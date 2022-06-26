import HomeworkTestQuestions from '@/components/common/Homework/HomeworkTestQuestions';
import {initApollo, addApolloState} from '@/lib/apolloClient';
import {GET_HOMEWORK_TEST} from '@/query/homeworks/test/getHomeworkTest';
import {GetServerSideProps} from 'next';

const HomeworkTestQuestionsPage = () => {
  return <HomeworkTestQuestions />;
};

export default HomeworkTestQuestionsPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    query: {homeworkId},
  } = ctx;
  const client = initApollo(null, ctx);

  await client.query({
    query: GET_HOMEWORK_TEST,
    variables: {
      id: homeworkId,
    },
  });

  return addApolloState(client, {
    props: {},
  });
};
