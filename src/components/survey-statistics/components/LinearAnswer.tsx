import {IAnswer} from '@/types/survey';
import {FC} from 'react';
import {SurveyOption} from 'src/graphql.schema';
import {
  LinearWrapper,
  OptionTitle,
  LinearLine,
  BlockAnswer,
} from 'styles/statistics-survey';

const LinearAnswer: FC<IAnswer> = ({question}) => {
  return (
    <BlockAnswer>
      {question?.SurveyOptions &&
        question?.SurveyOptions.filter(
          (elem: SurveyOption | any) => elem?.answersCount > 0,
        ).map((elem: any, index) => (
          <LinearWrapper key={index}>
            <OptionTitle>{elem.title}</OptionTitle>
            <LinearLine percent={elem.percent} />
            <OptionTitle>{`${elem.answersCount} (${Math.floor(
              elem.percent,
            )}%)`}</OptionTitle>
          </LinearWrapper>
        ))}
    </BlockAnswer>
  );
};

export default LinearAnswer;
