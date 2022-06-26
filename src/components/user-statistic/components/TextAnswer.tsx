import {FC} from 'react';
import {SurveyQuestionResult} from 'src/graphql.schema';
import {ItemAnswer, TextItemAnswer} from 'styles/statistics-survey';

interface ITextAnswer {
  survey: SurveyQuestionResult;
}

const TextAnswer: FC<ITextAnswer> = ({survey}) => {
  return (
    <ItemAnswer>
      <TextItemAnswer>{survey?.freeAnswer}</TextItemAnswer>
    </ItemAnswer>
  );
};

export default TextAnswer;
