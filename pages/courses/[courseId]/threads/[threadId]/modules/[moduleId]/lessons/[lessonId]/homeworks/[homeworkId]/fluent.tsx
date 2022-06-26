import HomeworkFluent from '@/components/common/Homework/HomeworkFluent';
import {useLazyGetThreadById} from '@/graph-hooks/threads/useGetThreadById';
import {getSlugifiedUrl} from '@/helpers/common';
import {initApollo} from '@/lib/apolloClient';
import {GET_COURSE} from '@/query/courses/course';
import {LESSON} from '@/query/lessons/getLesson';
import {ICourse} from '@/types/courses';
import {ILesson} from '@/types/lesson';
import {GetServerSideProps} from 'next';
import {FC, useMemo} from 'react';

interface ILessonHomeworkFluentPage {
  ssrCourse: ICourse;
  ssrLesson: ILesson;
}

const LessonHomeworkFluentPage: FC<ILessonHomeworkFluentPage> = ({
  ssrCourse,
  ssrLesson,
}) => {
  const {thread, loading: loadingThread} = useLazyGetThreadById();

  const {Threads, id, DefaultThread, OwnThread, status} = ssrCourse;

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
  const {Homework} = ssrLesson;

  return (
    <HomeworkFluent
      modules={mainThread?.Modules}
      courseId={id}
      idCourse={id}
      threadId={threadId}
      status={status}
      OwnThreadId={OwnThread?.id}
      mainThread={mainThread}
      OwnThread={OwnThread}
      homeworks={Homework}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    query: {courseId, lessonId},
  } = ctx;

  const client = initApollo(null, ctx);

  const courseRecord = getSlugifiedUrl(courseId);

  let course;
  let lesson;

  try {
    course = await client.query({
      query: GET_COURSE,
      variables: courseRecord,
    });
    lesson = await client.query({
      query: LESSON,
      variables: {
        record: {id: lessonId},
      },
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
      ssrCourse: course?.data?.course || {},
      ssrLesson: lesson?.data?.lesson || {},
    },
  };
};

export default LessonHomeworkFluentPage;
