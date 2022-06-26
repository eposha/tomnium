import {CuratorDashboardLayout} from '@/components/layout';
import UserStatistic from '@/components/user-statistic';
import {initApollo} from '@/lib/apolloClient';
import {USER_SURVEY_RESULT} from '@/query/threads/FCSurveyQuestionResults';
import {GetServerSideProps} from 'next';
import {FC} from 'react';

interface IUserStatistic {
  survey?: any;
}

const UserStatisticPage: FC<IUserStatistic> = ({survey}) => {
  return (
    <CuratorDashboardLayout pageTitle={`Статистика пользователя`}>
      <UserStatistic surveys={survey} />
    </CuratorDashboardLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    query: {surveyId, userId},
  } = ctx;
  const client = initApollo(null, ctx);

  let statistic;

  try {
    statistic = await client.query({
      query: USER_SURVEY_RESULT,
      variables: {
        surveyId: surveyId,
        userId: userId,
      },
    });
  } catch (e) {
    console.log(e);
  }

  if (statistic) {
    return {
      props: {
        survey: statistic?.data?.FCSurveyQuestionResults,
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

export default UserStatisticPage;
