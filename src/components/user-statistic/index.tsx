import {FC} from 'react';
import {SurveyQuestionResult} from 'src/graphql.schema';
import {Wrapper} from 'styles/statistics-survey/index';
import Card from './Card';

interface IUserStatistic {
  surveys: SurveyQuestionResult[];
}

const UserStatistic: FC<IUserStatistic> = ({surveys}) => {
  return (
    <Wrapper>
      {surveys &&
        surveys.map((survey: SurveyQuestionResult, index: number) => (
          <Card survey={survey} key={index} />
        ))}
    </Wrapper>
  );
};

export default UserStatistic;
