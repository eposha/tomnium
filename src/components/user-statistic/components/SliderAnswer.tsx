import {FC} from 'react';
import {SurveyQuestionResult} from 'src/graphql.schema';
import {SliderAnswerWrapper, SliderItem} from 'styles/statistics-survey';

interface ISliderAnswer {
  survey: SurveyQuestionResult;
}

const SliderAnswer: FC<ISliderAnswer> = ({survey}) => {
  return (
    <SliderAnswerWrapper>
      <SliderItem>{survey.numberAnswer}</SliderItem>
    </SliderAnswerWrapper>
  );
};

export default SliderAnswer;
