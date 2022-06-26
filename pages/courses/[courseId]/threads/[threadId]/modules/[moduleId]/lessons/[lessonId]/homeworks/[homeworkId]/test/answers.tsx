import HomeworkAnswers from '@/components/common/Homework/HomeworkAnswers';
import {getSlugifiedUrl} from '@/helpers/common';
import {initApollo, addApolloState} from '@/lib/apolloClient';
import {GET_COURSE} from '@/query/courses/course';
import {GET_HOMEWORK_TEST} from '@/query/homeworks/test/getHomeworkTest';
import {GET_TEST_SELECTED_OPTIONS} from '@/query/homeworks/test/getTestSelectedOptions';
import {ICourse} from '@/types/courses';
import {IHomeworkTestQuestion} from '@/types/homework';
import {GetServerSideProps, NextPage} from 'next';

interface IHomeworkTestQuestionsPage {
  ssrCourse: ICourse;
}
const HomeworkTestQuestionsPage: NextPage<IHomeworkTestQuestionsPage> = ({
  ssrCourse,
}) => {
  return <HomeworkAnswers courseId={ssrCourse?.id} />;
};

export default HomeworkTestQuestionsPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    query: {courseId, homeworkId},
  } = ctx;
  const client = initApollo(null, ctx);

  const record = getSlugifiedUrl(courseId);

  const {data: dataCourse} = await client.query({
    query: GET_COURSE,
    variables: record,
  });

  const {data} = await client.query({
    query: GET_HOMEWORK_TEST,
    variables: {
      id: homeworkId,
    },
  });

  await client.query({
    query: GET_TEST_SELECTED_OPTIONS,
    variables: {
      questionIds: data?.homeworkById?.HomeworkTestQuestions?.map(
        (question: IHomeworkTestQuestion) => question.id,
      ),
    },
  });

  return addApolloState(client, {
    props: {
      ssrCourse: dataCourse.course,
    },
  });
};
