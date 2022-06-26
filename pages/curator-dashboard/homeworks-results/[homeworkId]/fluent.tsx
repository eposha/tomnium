import {Chat} from '@/components/chat';
import {Carousel} from '@/components/common/Carousel';
import HomeworkFile from '@/components/common/Homework/HomeworkFile';
import UserCard from '@/components/curator-dashboard/UserCard';
import {DATE_FORMAT} from '@/constants/common';
import {useRoom} from '@/graph-hooks/chat';
import {useFileCreate} from '@/graph-hooks/files/useCreateFile';
import {useDeleteFile} from '@/graph-hooks/files/useDeleteFile';
import {useGetFiles} from '@/graph-hooks/files/useGetFiles';
import {useFCHomeworkResultById} from '@/graph-hooks/homeworks/useFCHomeworkResultById';
import useFCHomeworkResulChatCreate from '@/graph-hooks/homeworks/useFCHomeworkResultChatCreate';
import useFCHomeworkResultUpdate from '@/graph-hooks/homeworks/useFCHomeworkResultUpdate';
import {useHomeworkResultCalculate} from '@/graph-hooks/homeworks/useHomeworkResultCalculate';
import {initApollo} from '@/lib/apolloClient';
import {GET_FC_HOMEWORK_RESULT_BY_ID} from '@/query/homeworkResults/getFCHomeworkResultById';
import {IFile, IHomework, IUser} from 'src/types';
import {format} from 'date-fns';
import {GetServerSideProps, NextPage} from 'next';
import {useRouter} from 'next/router';
import {Fragment, useEffect, useRef, useState} from 'react';
import ContentBlock from 'src/components/content-block/ContentBlock';
import {EntityName, FileParentEntity, Scalars} from 'src/graphql.schema';
import {Media} from 'src/media-styles';
import {Box} from 'styles/common';
import * as UI from 'styles/homeworks/homework-fluent';
import {InputLabel} from 'styles/user/common';
import {InputNumber} from 'styles/user/userProfile';
import {CuratorDashboardLayout} from '@/components/layout';
import FCBreadCrumbs from '@/components/common/Homework/FCBreadCrumbs';

interface IHomeworkFluentResultProps {
  ssrResults: {
    id: number;
    score: number;
    content: Scalars['GraphQLJSON'];
    createdAt: Date;
    chatCreated: boolean;
    completed: boolean;
    Homework: IHomework;
    User: IUser;
  };
}

const HomeworkFluentResult: NextPage<IHomeworkFluentResultProps> = ({
  ssrResults,
}) => {
  const {
    query: {homeworkId},
  } = useRouter();

  const {homeworkResult, loading: loadingResults} = useFCHomeworkResultById(
    Number(homeworkId),
  );

  const result = loadingResults ? ssrResults : homeworkResult;

  const {
    id,
    score,
    createdAt,
    content,
    chatCreated,
    completed,
    Homework,
    User,
  } = result || {};

  const {files} = useGetFiles({
    entityId: String(homeworkResult?.id),
    parentEntity: FileParentEntity.FileParentEntityHomeworkResult,
  });

  const {handleSubmit: handleFileSubmit} = useFileCreate({
    entityId: String(homeworkResult?.id),
    entity: FileParentEntity.FileParentEntityHomeworkResult,
  });

  const {handleDeleteFile} = useDeleteFile();

  const inputRef = useRef<any>(null);

  const onFilesClickHandler = () => {
    inputRef?.current?.click();
  };

  const onFilesChangeHandler = () => {
    const file = Array([...inputRef?.current?.files])[0];

    if (file?.[0]) {
      handleFileSubmit({file: file[0]});
    }
  };

  const {title, description, HomeworkFluentContent, HomeworkContent, maxScore} =
    Homework || {};
  const {id: userId, fullName} = User || {};

  const {room, getRoom} = useRoom();

  useEffect(() => {
    if (!userId || !id || !chatCreated) return;

    getRoom({
      variables: {
        record: {
          entityId: id.toString(),
          entityName: EntityName.EntityNameHomeworkResult,
        },
      },
    });
  }, [userId, chatCreated, id]);

  const [isVisible, setIsVisible] = useState(chatCreated);

  const {handleSubmit, register, validateErrors} = useFCHomeworkResultUpdate({
    id,
    score,
    maxScore,
  });

  const {homeworkResultCalculate} = useHomeworkResultCalculate();

  const {handleSubmit: handleChatCreate} = useFCHomeworkResulChatCreate({
    id,
    chatCreated,
  });

  const onSendHomeworkResultHandler = async () => {
    try {
      await handleSubmit();
      await homeworkResultCalculate({
        variables: {
          homeworkId,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CuratorDashboardLayout pageTitle='Задание'>
      <>
        <UI.BreadCrumbsWrapper>
          <FCBreadCrumbs homeworkId={Homework?.id} />
        </UI.BreadCrumbsWrapper>

        <UserCard user={User} />

        <UI.Description>
          <UI.DescriptionTitle>{title}</UI.DescriptionTitle>
          {description && (
            <UI.DescriptionData>{description}</UI.DescriptionData>
          )}
        </UI.Description>

        {(HomeworkContent ?? HomeworkFluentContent) && (
          <UI.ContentBlockWrapper>
            <ContentBlock
              contentData={HomeworkFluentContent ?? HomeworkContent}
            />
          </UI.ContentBlockWrapper>
        )}
        <UI.HeaderContainer>
          <UI.SubTitle>Ответ пользователя:</UI.SubTitle>
        </UI.HeaderContainer>
        <UI.FluentWrapper>
          <UI.Container>
            <UI.FluentHeader>
              <UI.FluentTitle>
                {`Студент ${fullName ?? ''} добавил ответ`}
              </UI.FluentTitle>
              {createdAt && (
                <UI.FluentData>
                  {format(new Date(createdAt), DATE_FORMAT.secondary)}
                </UI.FluentData>
              )}
            </UI.FluentHeader>
            {content?.html && (
              <UI.DescriptionData>{content?.html}</UI.DescriptionData>
            )}

            <Media lessThan='md'>
              <Carousel>
                <UI.FilesWrapper>
                  {!!files?.length &&
                    homeworkResult?.id &&
                    files?.map(({id, entityId}: IFile) => (
                      <Fragment key={entityId}>
                        <HomeworkFile onDelete={handleDeleteFile} id={id} />
                      </Fragment>
                    ))}
                </UI.FilesWrapper>
              </Carousel>
            </Media>

            <Media greaterThanOrEqual='md'>
              <UI.FilesWrapper>
                {!!files?.length &&
                  homeworkResult?.id &&
                  files?.map(({id, entityId}: IFile) => (
                    <Fragment key={entityId}>
                      <HomeworkFile onDelete={handleDeleteFile} id={id} />
                    </Fragment>
                  ))}
              </UI.FilesWrapper>
            </Media>

            <UI.AbsoluteContainer>
              <UI.ResultForm onSubmit={handleSubmit}>
                <UI.FlexContainer>
                  <InputLabel htmlFor='id'>Score:</InputLabel>
                  <UI.InputWrapper>
                    <InputNumber
                      id='score'
                      error={!!validateErrors.score}
                      {...register('score', {
                        max: {
                          value: maxScore ?? '',
                          message: `Score should'nt exceed ${maxScore}`,
                        },
                        min: {
                          value: 0,
                          message: `Score should'nt be less than 0`,
                        },
                      })}
                    />
                    {!!validateErrors.score && (
                      <UI.ErrorText>
                        {validateErrors.score.message}
                      </UI.ErrorText>
                    )}
                  </UI.InputWrapper>
                </UI.FlexContainer>

                <UI.MediaClipWrapper
                  onClick={onFilesClickHandler}
                  onChange={onFilesChangeHandler}>
                  <UI.MediaClipLabel htmlFor='file-input'>
                    Выберите файл:
                  </UI.MediaClipLabel>
                  <UI.MediaClipInput id='file-input' ref={inputRef} />
                  <UI.MediaClipSVG />
                </UI.MediaClipWrapper>

                {!completed && (
                  <UI.Button
                    type='button'
                    onClick={onSendHomeworkResultHandler}>
                    Completed
                  </UI.Button>
                )}
              </UI.ResultForm>
            </UI.AbsoluteContainer>
          </UI.Container>
        </UI.FluentWrapper>
        <Box mt='70px'>
          <Box mb='20px'>
            <UI.Button
              onClick={() => {
                handleChatCreate();
                setIsVisible(!isVisible);
              }}>
              {isVisible ? 'Скрыть чат' : 'Показать чат'}
            </UI.Button>
          </Box>
          {room?.id && chatCreated && isVisible && (
            <Chat roomId={room.id} pinnedMessage={room?.pinnedMessage} />
          )}
        </Box>
      </>
    </CuratorDashboardLayout>
  );
};

export default HomeworkFluentResult;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    query: {homeworkId},
  } = ctx;

  const apolloClient = initApollo(null, ctx);

  let results;

  try {
    results = await apolloClient.query({
      query: GET_FC_HOMEWORK_RESULT_BY_ID,
      variables: {id: Number(homeworkId)},
    });
  } catch (e) {
    if (e instanceof Error && e.message === 'Not authenticated') {
      return {
        redirect: {
          destination: `/auth/login`,
          permanent: false,
        },
      };
    }

    return {
      redirect: {
        destination: `/500`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      ssrResults: results?.data?.FCHomeworkResultById || null,
    },
  };
};
