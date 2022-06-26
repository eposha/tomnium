import {FC} from 'react';
import {SurveyQuestionResult} from 'src/graphql.schema';
import {TextItemAnswer} from 'styles/statistics-survey';
import {RadioAnswer} from 'styles/statistics-survey/user-survey';

interface IRadioAnswers {
  survey: SurveyQuestionResult;
}

const RadioAnswers: FC<IRadioAnswers> = ({survey}) => {
  return (
    <>
      <RadioAnswer>
        <input type={'checkbox'} checked disabled></input>
        {survey.SurveyOption?.title}
      </RadioAnswer>
      {survey.freeAnswer && (
        <TextItemAnswer>{survey.freeAnswer}</TextItemAnswer>
      )}
    </>
  );
};

export default RadioAnswers;
