import {FC, useEffect, useState} from 'react';
import {DATE_FORMAT} from '@/constants/common';
import {useCreateFavorite, useDeleteFavorite} from '@/graph-hooks/favorite';
import {
  formatDate,
  getDeclension,
  getNonOriginalImage,
  declensionDuration,
} from '@/helpers/common';
import {GET_FAVORITES} from '@/query/favorites/getFavorites';
import {ICourse} from '@/types/courses';
import Image from 'next/image';
import Link from 'next/link';
import CalendarIcon from 'public/icons/Calendar.svg';
import FileIcon from 'public/icons/FileSVG.svg';
import {CourseStatus, FavoriteTarget} from 'src/graphql.schema';
import {Media} from 'src/media-styles';
import {Card, CardLabel, Text} from 'styles/common';
import * as UI from 'styles/courses/course-card';
import {EventButton} from 'styles/dashboard/dashboard-event';
import HeartIcon from '../documents/HeartIcon';
import UsersCount from './UsersCount';

interface ICourseCardProps {
  course: ICourse;
}

const CourseCard: FC<ICourseCardProps> = ({
  course: {
    id,
    title,
    description,
    label,
    studentsCount,
    imageList,
    usersImages,
    isFavorite,
    slug,
    exclusive,
    learnDuration,
    DefaultThread,
    status,
  },
}) => {
  const [favoriteState, setFavoriteState] = useState<boolean | undefined>(
    false,
  );

  useEffect(() => {
    setFavoriteState(isFavorite);
  }, [isFavorite]);

  const {handleCreateFavorite} = useCreateFavorite({
    targetId: id,
    targetType: FavoriteTarget.FavoriteTargetCourse,
    setFavoriteState,
  });

  const {handleDeleteFavorite} = useDeleteFavorite({
    targetId: id,
    targetType: FavoriteTarget.FavoriteTargetCourse,
    setFavoriteState,
    refetchQueries: [GET_FAVORITES],
  });

  const handleChangeFavorite = () =>
    favoriteState ? handleDeleteFavorite() : handleCreateFavorite();

  const {startSubmissionDate, lessonsCount} = DefaultThread || {};

  const {CourseStatusAvailable, CourseStatusCompleted} = CourseStatus;

  const isButtonVisible = status !== CourseStatusCompleted;
  const buttonText =
    status === CourseStatusAvailable ? 'Записаться' : 'Продолжить';

  return (
    <Card $fullWidth desktopDirection='row'>
      {typeof isFavorite === 'boolean' && (
        <HeartIcon isFavorite={favoriteState} onClick={handleChangeFavorite} />
      )}
      <UI.Header>
        <UI.ImageWrapper>
          <Image
            src={getNonOriginalImage(imageList) || '/images/courses/test1.jpg'}
            alt='Course'
            width={280}
            height={160}
            layout='responsive'
          />

          {label && (
            <UI.CardLabelWrapper>
              <CardLabel $isPromo>{label}</CardLabel>
            </UI.CardLabelWrapper>
          )}

          {!!studentsCount && (
            <Media at='xs'>
              <UsersCount
                studentsCount={studentsCount}
                usersImages={usersImages}
              />
            </Media>
          )}

          <UI.Widget $content fontSize='10px'>
            Курс
          </UI.Widget>
        </UI.ImageWrapper>
      </UI.Header>

      <UI.Content>
        <Text $title margin='0 0 10px'>
          {title}
        </Text>
        <Text $description margin='0 0 15px' fontWeight='400'>
          {description}
        </Text>
      </UI.Content>

      <UI.Footer>
        {startSubmissionDate && (
          <UI.MainMeta>
            <UI.DateWrapper>
              <CalendarIcon width={20} height={20} />
              <UI.IconLabel>
                <b>{formatDate(startSubmissionDate, DATE_FORMAT.primary)}</b>{' '}
                старт
              </UI.IconLabel>
            </UI.DateWrapper>
            {exclusive ? (
              <UI.PriceWrapper>
                <UI.CoinIconSVG />
                <UI.Price>Эксклюзив</UI.Price>
              </UI.PriceWrapper>
            ) : (
              learnDuration && (
                <UI.DurationWrapper>
                  <UI.TimeIcon />
                  <UI.Duration>
                    {Object.entries(learnDuration).map(
                      (value) =>
                        //@ts-ignore
                        value[1] && declensionDuration(value[0], value[1]),
                    )}
                  </UI.Duration>
                </UI.DurationWrapper>
              )
            )}
          </UI.MainMeta>
        )}

        <UI.AdditionalMetaWrapper>
          <Media greaterThan='xs'>
            <UI.AdditionalMeta>
              {!!lessonsCount && (
                <UI.TotalLessonsWrapper>
                  <FileIcon width={20} height={20} />
                  <UI.IconLabel>
                    <b>{lessonsCount}</b>{' '}
                    {getDeclension(['урок', 'урока', 'уроков'], lessonsCount)}
                  </UI.IconLabel>
                </UI.TotalLessonsWrapper>
              )}
              {!!studentsCount && (
                <UsersCount
                  studentsCount={studentsCount}
                  usersImages={usersImages}
                />
              )}
            </UI.AdditionalMeta>
          </Media>
          <UI.ButtonsContainer>
            <Link href={`/courses/${slug ?? id}`} passHref>
              <EventButton color='blueberry' bgc='white' $display>
                Подробнее
              </EventButton>
            </Link>
            {isButtonVisible && (
              <Link href={`/courses/${slug ?? id}`} passHref>
                <EventButton color='white' bgc='blueberry' $display>
                  {buttonText}
                </EventButton>
              </Link>
            )}
          </UI.ButtonsContainer>
        </UI.AdditionalMetaWrapper>
      </UI.Footer>
    </Card>
  );
};

export default CourseCard;
