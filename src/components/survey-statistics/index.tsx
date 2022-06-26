import * as UI from 'styles/statistics-survey/index';
import {FC} from 'react';
import {Survey} from 'src/graphql.schema';
import Card from '@/components/survey-statistics/statistic-card/Card';
import {TextItemAnswer} from 'styles/statistics-survey';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {IThread} from '@/types/thread';
import {SurveyTitle} from 'styles/survey';

interface IStatisticPage {
  survey: Survey;
  threads: IThread[];
}

const StatisticSurvey: FC<IStatisticPage> = ({survey, threads}) => {
  const {
    query: {surveyId},
  } = useRouter();

  const displayedQuestions = survey.SurveyQuestions?.filter(
    (elem: any) => elem?.answersCount > 0,
  );

  const isThreadSurvey = !!threads.find(
    (elem: IThread) => elem?.Survey?.id == surveyId,
  );

  return (
    <UI.Wrapper>
      <UI.UsersWrapper>
        <SurveyTitle>Пользователи</SurveyTitle>
        <UI.UsersInner>
          {survey.Users?.map((user: any, index: number) => {
            return isThreadSurvey ? (
              <Link
                href={`/curator-dashboard/statistics/surveys/${surveyId}/user/${user.id}`}
                key={index}
                passHref>
                <UI.UserLink>
                  <TextItemAnswer>{user.fullName}</TextItemAnswer>
                </UI.UserLink>
              </Link>
            ) : (
              <TextItemAnswer key={index}>{user.fullName}</TextItemAnswer>
            );
          })}
        </UI.UsersInner>
      </UI.UsersWrapper>

      {displayedQuestions && displayedQuestions.length > 0
        ? displayedQuestions.map((question, index) => (
            <Card question={question} key={index} />
          ))
        : 'Нет Статистики'}
    </UI.Wrapper>
  );
};

export default StatisticSurvey;
