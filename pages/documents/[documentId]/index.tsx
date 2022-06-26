import {NextPage, GetServerSideProps} from 'next';
import {useEffect} from 'react';

import Modal from '@/components/common/Modal';
import {Chat} from 'src/components/chat';
import {RegisterForm} from '@/components/auth';

import {initApollo} from 'src/lib/apolloClient';
import {DOCUMENT_BY_ID} from 'src/graph/query/documents';
import {IDocument} from 'src/types/document';
import {DATE_FORMAT, DOCUMENT_TYPE} from '@/constants/common';
import {Media} from 'src/media-styles';
import {ProfileCard} from '@/components/common/profile';
import {
  formatDate,
  formatDuration,
  getNonOriginalImage,
} from 'src/helpers/common';

import {useUser} from '@/graph-hooks/user';
import {useRoom} from 'src/graph/hooks/chat';
import {EntityName} from 'src/graphql.schema';

import {EntityAuthor} from '@/components/authors';
import ContentBlock from 'src/components/content-block/ContentBlock';

import {CardLabel} from 'styles/common';
import * as UI from 'styles/documents/document-page';
import {useModal} from 'src/hooks/useModal';
import ReactPortal from '@/components/portal/ReactPortal';

interface IDocumentPageProps {
  documentData: IDocument;
}

const Document: NextPage<IDocumentPageProps> = ({documentData}) => {
  const {
    id: documentId,
    DocumentContents,
    type,
    title,
    description,
    Author,
    durationLabel,
    publishDate,
    imageMob,
    imageWeb,
    startDate,
    Course,
    chatCreated,
  } = documentData || {};

  const isLesson = type === 'DOCUMENT_TYPE_LESSON';
  const isArticle = type === 'DOCUMENT_TYPE_ARTICLE';
  const isNews = type === 'DOCUMENT_TYPE_NEWS';
  const isWebinar = type === 'DOCUMENT_TYPE_WEBINAR';
  const isCourse = type === 'DOCUMENT_TYPE_COURSE';

  const durationAvailable = (isArticle || isNews || isLesson) && durationLabel;
  const courseDurationAvailable = isCourse && Course?.learnDuration;

  const {user, loading} = useUser();
  const {room, getRoom} = useRoom();

  const {isOpen, onClose, onOpen} = useModal(false);

  useEffect(() => {
    if (!chatCreated || !user?.id) return;
    getRoom({
      variables: {
        record: {
          entityId: documentId,
          entityName: EntityName.EntityNameDocument,
        },
      },
    });
  }, [user?.id, chatCreated]);

  useEffect(() => {
    if (!loading && !user?.id) {
      onOpen();
    }
  }, [user?.id, loading]);

  return (
    <>
      <UI.DocumentWrapper>
        <Media greaterThan={'xs'}>
          <UI.SideNavigation>
            <ProfileCard />
          </UI.SideNavigation>
        </Media>

        <UI.Main>
          <UI.HeroWrapper
            imageMob={getNonOriginalImage(imageMob)}
            imageWeb={getNonOriginalImage(imageWeb)}>
            <UI.Hero>
              <UI.HeroMain>
                <UI.HeroText>
                  {type && <CardLabel>{DOCUMENT_TYPE[type]}</CardLabel>}
                  <UI.Title>{isCourse ? Course?.title : title}</UI.Title>
                </UI.HeroText>
                {(Author || Course?.Authors) && (
                  <UI.AuthorsWrapper>
                    <UI.AuthorsHeading>
                      Автор {isCourse && 'курса'}
                      {isNews && 'новости'}
                      {isArticle && 'статьи'}
                      {isLesson && 'урока'}
                      {isWebinar && 'вебинара'}
                    </UI.AuthorsHeading>
                    <UI.AuthorsList>
                      <EntityAuthor
                        author={
                          isCourse
                            ? Course?.Authors.sort(
                                (a, b) => a.index - b.index,
                              )[0]
                            : Author
                        }
                        color='light'
                      />
                    </UI.AuthorsList>
                  </UI.AuthorsWrapper>
                )}
              </UI.HeroMain>
              <UI.HeroFooter>
                <UI.Description>
                  {isCourse ? Course?.description : description}
                </UI.Description>
                <UI.HeroFooterContainer>
                  {(durationAvailable || courseDurationAvailable) && (
                    <UI.HeroFooterText fontWeight='500'>
                      {isArticle || isNews ? 'Время чтения' : 'Длительность'}{' '}
                      <span>
                        {formatDuration(
                          isCourse ? Course?.learnDuration : durationLabel,
                        )}
                      </span>
                    </UI.HeroFooterText>
                  )}
                  {startDate && isWebinar && (
                    <UI.HeroFooterText fontWeight='500'>
                      Время начала{' '}
                      <span>
                        {formatDate(startDate, DATE_FORMAT.secondary)}
                      </span>
                    </UI.HeroFooterText>
                  )}

                  {(isArticle || isNews) && publishDate && (
                    <UI.HeroFooterText fontWeight='500'>
                      Опубликовано{' '}
                      <span>
                        {formatDate(publishDate, DATE_FORMAT.primary)}
                      </span>
                    </UI.HeroFooterText>
                  )}
                </UI.HeroFooterContainer>
              </UI.HeroFooter>
            </UI.Hero>
          </UI.HeroWrapper>

          {DocumentContents && <ContentBlock contentData={DocumentContents} />}

          {room?.id && (
            <Chat
              roomId={room.id}
              pinnedMessage={room?.pinnedMessage}
              noHeader
            />
          )}
        </UI.Main>
      </UI.DocumentWrapper>

      {
        <ReactPortal>
          <Modal isOpen={isOpen}>
            <RegisterForm onClose={onClose} />
          </Modal>
        </ReactPortal>
      }
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    res,
    query: {documentId},
  } = ctx;
  const client = initApollo();

  const {
    data: {documentById},
  } = await client.query({
    query: DOCUMENT_BY_ID,
    variables: {
      id: documentId,
    },
  });

  res.setHeader(
    'Cache-Control',
    `public, s-maxage=10, stale-while-revalidate=18000`,
  );

  return {
    props: {
      documentData: documentById,
    },
  };
};

export default Document;
