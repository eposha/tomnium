import HomeworkTask from '@/components/common/Homework/HomeworkTask';
import {useHomeworkCompletedTasks} from '@/graph-hooks/homeworks/task/useHomeworkCompletedTasks';
import {useHomeworkTasks} from '@/graph-hooks/homeworks/useHomeworkTasks';
import {useLazyGetThreadById} from '@/graph-hooks/threads/useGetThreadById';
import {getSlugifiedUrl} from '@/helpers/common';
import {initApollo} from '@/lib/apolloClient';
import {GET_COURSE} from '@/query/courses/course';
import {GET_HOMEWORK_COMPLETED_TASKS} from '@/query/homeworks/getHomeworkCompletedTasks';
import {GET_HOMEWORK_TASKS} from '@/query/homeworks/getHomeworkTasks';
import {ICourse} from '@/types/courses';
import {IHomeworkTypeTask} from '@/types/homework';
import {GetServerSideProps, NextPage} from 'next';
import {useRouter} from 'next/router';
import {useMemo} from 'react';

interface HomeworkTaskPageProps {
  ssrHomework: IHomeworkTypeTask;
  ssrCourse: ICourse;
  ssrCompletedTasks: {
    id: number;
    title: string;
    rate: number;
  }[];
}

const ContainerHomeworkTaskPage: NextPage<HomeworkTaskPageProps> = ({
  ssrHomework,
  ssrCourse,
  ssrCompletedTasks,
}) => {
  const {
    query: {homeworkId},
  } = useRouter();

  const {homework, loading: loadingHomework} = useHomeworkTasks(homeworkId);
  const {completedTasks, loading: loadingCompletedTasks} =
    useHomeworkCompletedTasks(homeworkId);

  const {thread, loading: loadingThread} = useLazyGetThreadById();

  const {Threads, id, DefaultThread, OwnThread, status} = ssrCourse;

  //@ts-ignore
  const homeworkData: IHomeworkTypeTask = loadingHomework
    ? ssrHomework
    : homework;

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

  const mainThreadData = mainThread || ({} as any);

  const completed = loadingCompletedTasks ? ssrCompletedTasks : completedTasks;

  return (
    <HomeworkTask
      homeworkData={homeworkData}
      completedTasks={completed}
      course={ssrCourse}
      modules={mainThread?.Modules}
      courseId={id}
      threadId={mainThreadData?.id?.threadId}
      status={status}
      OwnThreadId={OwnThread?.id}
      mainThread={mainThread}
      OwnThread={OwnThread}
    />
  );
};

export default ContainerHomeworkTaskPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    query: {homeworkId, courseId},
  } = ctx;

  const client = initApollo(null, ctx);

  const record = getSlugifiedUrl(courseId);

  let homework;
  let course;
  let completedTasks;
  try {
    homework = await client.query({
      query: GET_HOMEWORK_TASKS,
      variables: {id: homeworkId},
    });
    completedTasks = await client.query({
      query: GET_HOMEWORK_COMPLETED_TASKS,
      variables: {homeworkId},
    });
    course = await client.query({
      query: GET_COURSE,
      variables: record,
    });
  } catch (e) {
    if (e instanceof Error && e.message === 'Not authenticated') {
      return {
        redirect: {
          destination: `/auth/login`,
          permanent: false,
        },
      };
    }
  }

  return {
    props: {
      ssrHomework: homework?.data?.homeworkById || {},
      ssrCourse: course?.data?.course || {},
      ssrCompletedTasks: completedTasks?.data?.homeworkTasks || [],
    },
  };
};
