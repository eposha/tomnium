import {FC} from 'react';
import Link from 'next/link';

import {getNonOriginalImage} from '@/helpers/common';

import {Media} from 'src/media-styles';
import {IQuiz} from '@/types/quiz';
import {QuizUserStatus} from 'src/graphql.schema';

import * as UI from 'styles/quizzes/list/diagnostics-card';

const buttonTexts = {
  [QuizUserStatus.QuizUserStatusDone]: 'Рекомендации',
  [QuizUserStatus.QuizUserStatusStarted]: 'Продолжить',
  [QuizUserStatus.QuizUserStatusNotStarted]: 'Пройти чек-ап',
  null: 'Пройти чек-ап',
};

const buttonLinks = {
  [QuizUserStatus.QuizUserStatusDone]: 'results',
  [QuizUserStatus.QuizUserStatusStarted]: 'start',
  [QuizUserStatus.QuizUserStatusNotStarted]: '',
  null: '',
};
interface IDiagnosticsQuizCardProps {
  quiz: IQuiz;
}

const DiagnosticsQuizCard: FC<IDiagnosticsQuizCardProps> = ({quiz}) => {
  const {id, title, description, label, imageList, imageWeb, status} = quiz;

  return (
    <UI.Wrapper>
      <Media at='xs'>
        <UI.Image
          src={
            getNonOriginalImage(imageList) ||
            '/images/quizzes/defaultQuiz_mob.jpg'
          }
          width={300}
          height={170}
          alt='Quiz image'
          layout='responsive'
          priority
        />
      </Media>
      <Media greaterThan='xs'>
        <UI.Image
          src={
            getNonOriginalImage(imageWeb) || '/images/quizzes/defaultQuiz.jpg'
          }
          width={980}
          height={350}
          alt='Quiz image'
          layout='responsive'
          priority
        />
      </Media>

      <UI.Content>
        <UI.Title>{title}</UI.Title>
        <UI.Description>{description}</UI.Description>
      </UI.Content>

      <UI.CardLabelWrapper>
        {label && <UI.Label>{label}</UI.Label>}

        <Media greaterThan='xs'>
          <Link href={`quizzes/${id}/${buttonLinks[status]}`}>
            <a>
              <UI.Button>{buttonTexts[status]}</UI.Button>
            </a>
          </Link>
        </Media>
      </UI.CardLabelWrapper>
      <Media at='xs'>
        <Link href={`quizzes/${id}/${buttonLinks[status]}`}>
          <a>
            <UI.Button>{buttonTexts[status]}</UI.Button>
          </a>
        </Link>
      </Media>
    </UI.Wrapper>
  );
};

export default DiagnosticsQuizCard;
