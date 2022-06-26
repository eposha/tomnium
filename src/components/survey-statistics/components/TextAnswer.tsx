import {IAnswer} from '@/types/survey';
import {FC} from 'react';
import {ItemAnswer, TextItemAnswer} from 'styles/statistics-survey';

const TextAnswer: FC<IAnswer> = ({question}) => {
  return (
    <ItemAnswer>
      {question?.SurveyQuestionResults?.map((elem, index) => (
        <TextItemAnswer key={index}>{elem?.freeAnswer}</TextItemAnswer>
      ))}
    </ItemAnswer>
  );
};

export default TextAnswer;
