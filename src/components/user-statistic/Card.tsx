import {FC} from 'react';
import {SurveyQuestionResult} from 'src/graphql.schema';
import {AnswerBlock} from 'styles/statistics-survey';
import {SurveyTitle, SurveyDescription} from 'styles/survey';
import UserAnswer from '../survey-statistics/components/UserAnswer';

interface ICard {
  survey: SurveyQuestionResult;
}

const Card: FC<ICard> = ({survey}) => {
  return (
    <AnswerBlock>
      <SurveyTitle>{survey?.SurveyQuestion?.title}</SurveyTitle>
      <SurveyDescription>
        {survey?.SurveyQuestion?.description}
      </SurveyDescription>
      <UserAnswer survey={survey} />
    </AnswerBlock>
  );
};

export default Card;
