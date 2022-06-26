import HeadSeo from '@/components/common/HeadSeo';
import {default as ModuleHomework} from '@/components/common/Homework';
import Remainder from '@/components/common/Remainder';
import CourseProgressLabel from '@/components/courses/CourseProgressLabel';
import CourseSidebar from '@/components/courses/CourseSidebar';
import CourseStructureItem from '@/components/courses/CourseStructureItem';
import {LearnProcessBanner} from '@/components/learning-structure';
import {useGetCourse} from '@/graph-hooks/courses/useGetCourse';
import {useModule} from '@/graph-hooks/modules/useModule';
import {useLazyGetThreadById} from '@/graph-hooks/threads/useGetThreadById';
import {getSlugifiedUrl} from '@/helpers/common';
import {initApollo} from '@/lib/apolloClient';
import {GET_COURSE} from '@/query/courses/course';
import {MODULE} from '@/query/modules/getModule';
import {ICourse} from '@/types/courses';
import {IHomework} from '@/types/homework';
import {IModule} from '@/types/module';
import {GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import {FC, useMemo} from 'react';
import ContentBlock from 'src/components/content-block/ContentBlock';
import {Media} from 'src/media-styles';
import {Box, Text} from 'styles/common';
import * as UI from 'styles/courses/course-page';
interface IModulePageProps {
  ssrModule: IModule;
  ssrCourse: ICourse;
  ip: any;
}

const CoursePage: FC<IModulePageProps> = ({ssrCourse, ssrModule}) => {
  const {
    query: {courseId, moduleId, threadId: mainThreadId},
  } = useRouter();

  const courseRecord = getSlugifiedUrl(courseId);

  //@ts-ignore
  const {course, loading: loadingCourse} = useGetCourse(courseRecord.record);

  const {module, loading: loadingModule} = useModule({id: moduleId});

  const {thread, loading: loadingThread} = useLazyGetThreadById();

  const renderCourseData = loadingCourse ? ssrCourse : course;
  const renderModuleData = loadingModule ? ssrModule : module;

  const {
    Threads,
    title,
    description,
    studentsCount,
    imageWeb,
    imageMob,
    usersImages,
    seoTitle,
    seoDescription,
    status,
    DefaultThread,
    OwnThread,
  } = renderCourseData || {};

  //@ts-ignore
  const {
    id,
    ModuleContents,
    Homework,
    title: moduleTitle,
    description: moduleDescription,
  } = renderModuleData || {};

  const mainThread = useMemo(() => {
    if (OwnThread) {
      return OwnThread;
    }
    if (DefaultThread && !loadingThread) {
      return DefaultThread;
    }

    return Threads?.find((thread) => thread.id === mainThreadId);
  }, [thread?.id, mainThreadId, DefaultThread, OwnThread]);

  const {id: threadId, Modules} = mainThread || {};

  const moduleIndex = Modules?.findIndex(({id}) => id == moduleId);
  const moduleNumber = moduleIndex ? moduleIndex : 0;
  const courseLink = `/courses/${courseId}/`;

  return (
    <>
      <HeadSeo seoTitle={seoTitle} seoDescription={seoDescription} />

      <UI.Wrapper>
        <Media greaterThan={'xs'}>
          <CourseSidebar
            endSubmissionDate={Threads && Threads[0].endSubmissionDate}
            modules={mainThread?.Modules}
            threadId={threadId}
            courseId={renderCourseData?.id}
            status={status}
            OwnThreadId={OwnThread?.id}
          />
        </Media>
        <div>
          <LearnProcessBanner
            title={title}
            description={description}
            Authors={Threads && Threads[0].Authors}
            studentsCount={studentsCount}
            imageWeb={imageWeb}
            imageMob={imageMob}
            progress={80}
            usersImages={usersImages}
            button={false}
            label={'Модуль'}
          />
          <Remainder
            buttonLink={courseLink}
            description={moduleDescription ?? ''}
            homework={Homework as IHomework[]}
            moduleNumber={moduleNumber}
            title={moduleTitle ?? ''}
          />

          <UI.Main>
            <Media at={'xs'}>
              <UI.ProgressWrapper>
                <CourseProgressLabel
                  title='Эффективность'
                  progress={80}
                  color='blueberry'
                />
                <CourseProgressLabel
                  title='Пройдено'
                  progress={50}
                  color='red'
                />
              </UI.ProgressWrapper>
            </Media>

            <UI.CourseContentWrapper>
              {ModuleContents && (
                <UI.ContentBlockWrapper>
                  <ContentBlock contentData={ModuleContents} />
                </UI.ContentBlockWrapper>
              )}

              <UI.CourseStructureWrapper>
                <Text fontSize='18px' margin='0 0 10px'>
                  Полная структура модуля
                </Text>

                <Box mb='20px' mw={'780px'}>
                  <UI.CourseStructureList>
                    <CourseStructureItem
                      key={id}
                      module={renderModuleData as IModule}
                      openStructure
                      moduleIndex={moduleNumber}
                      courseId={courseId as string}
                      threadId={Threads && Threads[0].id}
                    />
                  </UI.CourseStructureList>
                </Box>
                <ModuleHomework
                  rate={0}
                  entityId={moduleId as string}
                  homeworks={Homework}
                />
              </UI.CourseStructureWrapper>
            </UI.CourseContentWrapper>
          </UI.Main>
        </div>
      </UI.Wrapper>
    </>
  );
};

export default CoursePage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    // res,
    query: {courseId, moduleId},
  } = ctx;
  const client = initApollo(null, ctx);

  const courseRecord = getSlugifiedUrl(courseId);

  const {
    data: {course},
  } = await client.query({
    query: GET_COURSE,
    variables: {
      record: courseRecord,
    },
  });

  const {
    data: {module},
  } = await client.query({
    query: MODULE,
    variables: {
      record: {id: moduleId},
    },
  });

  // res.setHeader(
  //   'Cache-Control',
  //   `private, s-maxage=10, stale-while-revalidate=18000`,
  // );

  return {
    props: {
      ssrCourse: course || {},
      ssrModule: module || {},
    },
  };
};
