import {IAnswer} from '@/types/survey';
import {FC} from 'react';
import {
  BlockAnswer,
  SliderAnswerWrapper,
  SliderItem,
  SliderTitle,
} from 'styles/statistics-survey';

const SliderAnswer: FC<IAnswer> = ({question}) => {
  return (
    <BlockAnswer>
      {Object.keys(question?.numbersStatistics).map((elem, index) => (
        <SliderAnswerWrapper key={index}>
          <SliderItem>{elem}</SliderItem>
          <SliderTitle>( {question?.numbersStatistics[elem]} )</SliderTitle>
        </SliderAnswerWrapper>
      ))}
    </BlockAnswer>
  );
};

export default SliderAnswer;
