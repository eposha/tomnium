import {FC} from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {formatDate, getNonOriginalImage} from 'src/helpers/common';
import {DATE_FORMAT, DOCUMENT_TYPE} from '@/constants/common';
import {Media} from 'src/media-styles';

import {Text, Button, Widget} from 'styles/common';

import styled from 'styled-components';

import * as UI from 'styles/documents/cardFooter';
import {ICourse} from '@/types/courses';
import {IAuthor} from '@/types/author';

const Hidden = styled(Media)`
  display: flex;
  align-items: center;
`;

interface ICardFooter {
  id?: string;
  type?: keyof typeof DOCUMENT_TYPE;
  author?: IAuthor | null;
  startDate?: Date | null;
  publishDate?: Date | null;
  Course?: ICourse | null;
}

const CardFooter: FC<ICardFooter> = ({
  id,
  type,
  author,
  publishDate,
  Course,
}) => {
  const {avatar, regalia, fullName} = author || {};

  const isLesson = type === 'DOCUMENT_TYPE_LESSON';
  const isArticle = type === 'DOCUMENT_TYPE_ARTICLE';
  const isNews = type === 'DOCUMENT_TYPE_NEWS';
  const isWebinar = type === 'DOCUMENT_TYPE_WEBINAR';
  const isCourse = type === 'DOCUMENT_TYPE_COURSE';

  const courseAuthor = Course?.Authors?.[0];
  const courseStartDate = Course?.Threads?.[0]?.startSubmissionDate;

  return (
    <UI.Footer>
      {author && !isCourse && (
        <UI.Author>
          <UI.AuthorLogo>
            <Image
              src={
                getNonOriginalImage(avatar) || '/icons/test-icons/avatar.png'
              }
              alt={'avatar'}
              objectFit='cover'
              layout='fill'
            />
          </UI.AuthorLogo>
          <UI.AuthorNameWrapper>
            <Text margin='0 0 5px 0'>{fullName}</Text>
            <Text $description>{regalia}</Text>
          </UI.AuthorNameWrapper>
        </UI.Author>
      )}
      {isCourse && courseAuthor && (
        <UI.Author>
          <UI.AuthorLogo>
            <Image
              src={
                getNonOriginalImage(courseAuthor.avatar) ||
                '/icons/test-icons/avatar.png'
              }
              alt={'avatar'}
              objectFit='cover'
              layout='fill'
            />
          </UI.AuthorLogo>
          <UI.AuthorNameWrapper>
            <Text margin='0 0 5px 0'>{courseAuthor.fullName}</Text>
            <Text $description>{courseAuthor.regalia}</Text>
          </UI.AuthorNameWrapper>
        </UI.Author>
      )}
      <UI.ButtonWrapper>
        <Hidden at={'xs'}>
          {(isArticle || isNews) && publishDate && (
            <>
              <UI.CalendarIcon />
              <UI.Date>{formatDate(publishDate, DATE_FORMAT.primary)}</UI.Date>
            </>
          )}
          {isWebinar && (
            <>
              <UI.Date>До начала</UI.Date>
              <Widget $status>22:00:00</Widget>
            </>
          )}
          {isLesson && (
            <>
              <UI.CalendarIcon />
              <UI.Date>Доступно</UI.Date>
            </>
          )}
          {isCourse && courseStartDate && (
            <>
              <UI.CalendarIcon />
              <UI.Date>
                {formatDate(courseStartDate, DATE_FORMAT.primary)} Старт
              </UI.Date>
            </>
          )}
        </Hidden>
        <Button width={135} height={40}>
          {isCourse ? (
            <Link href={`/courses/${Course?.id}`} passHref>
              <UI.LinkUI>Смотреть</UI.LinkUI>
            </Link>
          ) : (
            <Link href={`/documents/${id}`} passHref>
              <UI.LinkUI>Смотреть</UI.LinkUI>
            </Link>
          )}
        </Button>
      </UI.ButtonWrapper>
    </UI.Footer>
  );
};

export default CardFooter;
