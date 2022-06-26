import HomeworkMainPage from '@/components/common/Homework/HomeworkMainPage';
import {useLazyGetThreadById} from '@/graph-hooks/threads/useGetThreadById';
import {getSlugifiedUrl} from '@/helpers/common';
import {initApollo, addApolloState} from '@/lib/apolloClient';
import {GET_COURSE} from '@/query/courses/course';
import {GET_HOMEWORK_TEST} from '@/query/homeworks/test/getHomeworkTest';
import {ICourse} from '@/types/courses';
import {GetServerSideProps} from 'next';
import {FC, useMemo} from 'react';

interface IHomeworkTestPage {
  ssrCourse: ICourse;
}

const HomeworkTestPage: FC<IHomeworkTestPage> = ({ssrCourse}) => {
  const {thread, loading: loadingThread} = useLazyGetThreadById();

  const {Threads, id, DefaultThread, OwnThread, status} = ssrCourse || {};

  const mainThread = useMemo(() => {
    if (thread?.id) {
      return thread;
    }
    if (OwnThread) {
      return OwnThread;
    }
    if (DefaultThread && !loadingThread) {
      return DefaultThread;
    }
  }, [thread?.id, Threads?.length]);

  const {id: threadId} = mainThread || {};
  return (
    <HomeworkMainPage
      modules={mainThread?.Modules}
      courseId={id}
      threadId={threadId}
      status={status}
      OwnThreadId={OwnThread?.id}
    />
  );
};

export default HomeworkTestPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    query: {homeworkId, courseId},
  } = ctx;
  const client = initApollo(null, ctx);

  await client.query({
    query: GET_HOMEWORK_TEST,
    variables: {
      id: homeworkId,
    },
  });

  const courseRecord = getSlugifiedUrl(courseId);

  const {
    data: {course},
  } = await client.query({
    query: GET_COURSE,
    variables: {
      record: courseRecord.record,
    },
  });

  return addApolloState(client, {
    props: {
      ssrCourse: course || {},
    },
  });
};
