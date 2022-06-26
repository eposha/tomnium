import HomeworkFluent from '@/components/common/Homework/HomeworkFluent';
import {useLazyGetThreadById} from '@/graph-hooks/threads/useGetThreadById';
import {getSlugifiedUrl} from '@/helpers/common';
import {initApollo} from '@/lib/apolloClient';
import {GET_COURSE} from '@/query/courses/course';
import {MODULE} from '@/query/modules/getModule';
import {ICourse} from '@/types/courses';
import {IModule} from '@/types/module';
import {GetServerSideProps} from 'next';
import {FC, useMemo} from 'react';

interface IModuleHomeworkFluentPage {
  ssrCourse: ICourse;
  ssrModule: IModule;
}

const ModuleHomeworkFluentPage: FC<IModuleHomeworkFluentPage> = ({
  ssrCourse,
  ssrModule,
}) => {
  const {thread, loading: loadingThread} = useLazyGetThreadById();

  const {Threads, id, DefaultThread, OwnThread} = ssrCourse || {};

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

  const {Homework} = ssrModule;

  return (
    <HomeworkFluent
      modules={mainThread?.Modules}
      courseId={id}
      idCourse={id}
      OwnThreadId={OwnThread?.id}
      mainThread={mainThread}
      OwnThread={OwnThread}
      homeworks={Homework}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    query: {courseId, moduleId},
  } = ctx;

  const client = initApollo(null, ctx);

  const record = getSlugifiedUrl(courseId);

  let course;
  let module;

  try {
    course = await client.query({
      query: GET_COURSE,
      variables: record,
    });
    module = await client.query({
      query: MODULE,
      variables: {
        record: {id: moduleId},
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
      ssrModule: module?.data?.module || {},
    },
  };
};

export default ModuleHomeworkFluentPage;
