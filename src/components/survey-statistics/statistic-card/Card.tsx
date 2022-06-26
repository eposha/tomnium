import {FC} from 'react';
import {Maybe, SurveyQuestion} from 'src/graphql.schema';
import {AnswerBlock} from 'styles/statistics-survey';
import {SurveyTitle, SurveyDescription} from 'styles/survey';
import Answers from '@/components/survey-statistics/components/Answers';

interface ICard {
  question: Maybe<SurveyQuestion>;
}

const Card: FC<ICard> = ({question}) => {
  return (
    <AnswerBlock>
      <SurveyTitle>{question?.title}</SurveyTitle>
      <SurveyDescription>{question?.description}</SurveyDescription>
      <Answers question={question} />
    </AnswerBlock>
  );
};

export default Card;
