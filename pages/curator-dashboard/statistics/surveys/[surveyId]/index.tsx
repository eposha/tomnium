import {CuratorDashboardLayout} from '@/components/layout';
import StatisticSurvey from '@/components/survey-statistics';
import {initApollo} from '@/lib/apolloClient';
import {GET_STATISTIC_SURVEY} from '@/query/survey-statistics/getSurveyStatisctic';
import {GET_THREADS_STATS} from '@/query/threads/getThreads';
import {IThread} from '@/types/thread';
import {GetServerSideProps} from 'next';
import {FC} from 'react';
import {Survey} from 'src/graphql.schema';

interface IStatisticPage {
  survey: Survey;
  threads: IThread[];
}

const StatisticPage: FC<IStatisticPage> = ({survey, threads}) => {
  return (
    <CuratorDashboardLayout pageTitle='Статистика'>
      <StatisticSurvey survey={survey} threads={threads} />
    </CuratorDashboardLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    query: {surveyId},
  } = ctx;
  const client = initApollo(null, ctx);

  let statistic;

  try {
    statistic = await client.query({
      query: GET_STATISTIC_SURVEY,
      variables: {
        id: surveyId,
      },
    });
  } catch (e) {
    console.log(e);
  }

  let threads;

  try {
    threads = await client.query({
      query: GET_THREADS_STATS,
      variables: {
        filter: {
          published: true,
        },
      },
    });
  } catch (e) {
    console.log(e);
  }

  if (statistic) {
    return {
      props: {
        survey: statistic?.data?.surveyStatistics,
        threads: threads?.data?.FCThreads?.Threads,
      },
    };
  }
  return {
    redirect: {
      destination: `/500`,
      permanent: false,
    },
  };
};

export default StatisticPage;
