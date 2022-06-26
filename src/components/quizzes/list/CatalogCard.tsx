import {FC} from 'react';
import Link from 'next/link';
import {MutationFunctionOptions} from '@apollo/client';
import {Media} from 'src/media-styles';

import {IQuiz} from '@/types/quiz';

import {
  formatDuration,
  getDeclension,
  getNonOriginalImage,
  isNonEmptyObject,
} from '@/helpers/common';

import {IconsGroup} from '@/components/common/logo';
import {Text, Card, Button, CardLabel, Widget} from 'styles/common';

import * as UI from 'styles/quizzes/list/catalog-card';

import TimeIcon from 'public/icons/TimeSVG.svg';
import FileIcon from 'public/icons/FileSVG.svg';
import {QuizUserStatus} from 'src/graphql.schema';
import router from 'next/router';
import {isNonEmptyArray} from '@apollo/client/utilities';

const widgetTexts = {
  [QuizUserStatus.QuizUserStatusDone]: 'Пройден',
  [QuizUserStatus.QuizUserStatusStarted]: 'Еще не пройден',
  [QuizUserStatus.QuizUserStatusNotStarted]: 'Еще не пройден',
  null: 'Еще не пройден',
};

const buttonTexts = {
  [QuizUserStatus.QuizUserStatusDone]: 'Рекомендации',
  [QuizUserStatus.QuizUserStatusStarted]: 'Продолжить',
  [QuizUserStatus.QuizUserStatusNotStarted]: 'Смотреть',
  null: 'Смотреть',
};

const buttonLinks = {
  [QuizUserStatus.QuizUserStatusDone]: 'results',
  [QuizUserStatus.QuizUserStatusStarted]: 'start',
  [QuizUserStatus.QuizUserStatusNotStarted]: '',
  null: '',
};

interface ICourseCardProps {
  quiz: IQuiz;
  resetQuiz: (options?: MutationFunctionOptions<any>) => Promise<any>;
}

const CatalogQuizCard: FC<ICourseCardProps> = ({
  quiz: {
    id,
    title,
    description,
    label,
    duration,
    studentsCount,
    imageList,
    questionCount,
    status,
    usersImages,
  },
  resetQuiz,
}) => {
  const isDone = status === QuizUserStatus.QuizUserStatusDone;

  const handleResetQuiz = async () => {
    await resetQuiz({
      variables: {quizId: id},
    });

    router.push(`/quizzes/${id}`);
  };

  return (
    <Card>
      <UI.Header>
        <UI.ImageWrapper>
          <UI.Image
            src={getNonOriginalImage(imageList) || '/images/courses/test1.jpg'}
            alt='Course'
            width={440}
            height={251}
            layout='responsive'
            priority
          />

          {label && (
            <UI.CardLabelWrapper>
              <CardLabel $isPromo>{label}</CardLabel>
            </UI.CardLabelWrapper>
          )}

          <Media at='xs'>
            <UI.Widget fontSize='10px'>{widgetTexts[status]}</UI.Widget>
          </Media>
        </UI.ImageWrapper>
      </UI.Header>

      <UI.Content>
        <Text $title lineHeight='19px'>
          {title}
        </Text>
        <Text $description lineHeight='19px' lineClamp={3}>
          {description}
        </Text>
      </UI.Content>

      <UI.Footer $isDone={isDone}>
        <UI.MetaDataWrapper $isDone={isDone}>
          <div>
            <FileIcon width={20} height={20} />
            <UI.IconLabel>
              До <b>{questionCount}</b> вопросов
            </UI.IconLabel>
          </div>

          {isNonEmptyObject(duration) && (
            <div>
              <TimeIcon width={20} height={20} />
              <UI.IconLabel>{formatDuration(duration)}</UI.IconLabel>
            </div>
          )}

          <Media greaterThan='xs'>
            <Widget $status fontSize='12px'>
              {widgetTexts[status]}
            </Widget>
          </Media>
        </UI.MetaDataWrapper>

        <UI.ButtonsContainer>
          {isDone ? (
            <Button $solid $fullWidth onClick={handleResetQuiz}>
              Пройти заново
            </Button>
          ) : (
            <Media greaterThan='xs'>
              {isNonEmptyArray(usersImages) && (
                <IconsGroup
                  groupListSize={{
                    width:
                      usersImages.length === 1
                        ? 30
                        : 30 + usersImages.slice(1, 3).length / 2,
                    height: 30,
                  }}
                  iconsSizes={{width: 30, height: 30}}
                  iconsList={usersImages.slice(0, 3)}
                />
              )}
              <Text>
                {studentsCount}{' '}
                {getDeclension(
                  ['студент', 'студента', 'студентов'],
                  studentsCount,
                )}
                <br />
                прошли квиз
              </Text>
            </Media>
          )}
          <Link href={`/quizzes/${id}/${buttonLinks[status]}`}>
            <a>
              <Button $fullWidth>{buttonTexts[status]}</Button>
            </a>
          </Link>
        </UI.ButtonsContainer>
      </UI.Footer>
    </Card>
  );
};

export default CatalogQuizCard;
