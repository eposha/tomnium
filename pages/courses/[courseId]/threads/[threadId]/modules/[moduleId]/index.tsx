import HeadSeo from '@/components/common/HeadSeo';
import Homework from '@/components/common/Homework';
import Remainder from '@/components/common/Remainder';
import CourseProgressLabel from '@/components/courses/CourseProgressLabel';
import CourseSidebar from '@/components/courses/CourseSidebar';
import CourseStructureItem from '@/components/courses/CourseStructureItem';
import {LearnProcessBanner} from '@/components/learning-structure';
import {useGetCourse} from '@/graph-hooks/courses/useGetCourse';
import {useGetCoursePreview} from '@/graph-hooks/courses/useGetCoursePreview';
import {useModule} from '@/graph-hooks/modules/useModule';
import {getCoursePagePreviewMode, getSlugifiedUrl} from '@/helpers/common';
import {initApollo} from '@/lib/apolloClient';
import {GET_COURSE} from '@/query/courses/course';
import {GET_COURSE_PREVIEW} from '@/query/courses/coursePreview';
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
    query: {courseId, moduleId, threadId: mainThreadId, show},
  } = useRouter();

  const courseRecord = !show ? getSlugifiedUrl(courseId) : {record: {}};
  const {course, loading: courseLoading} = useGetCourse(courseRecord?.record);

  const previewRecord = !!show ? getCoursePagePreviewMode(courseId, show) : {};
  const {coursePreview, loading: loadingCoursePreview} =
    useGetCoursePreview(previewRecord);

  const renderCourseData =
    courseLoading || loadingCoursePreview
      ? ssrCourse
      : show
      ? coursePreview
      : course;

  const {module, loading: loadingModule} = useModule({id: moduleId});

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

  const mainThread = useMemo(() => {
    if (OwnThread) {
      return OwnThread;
    }
    if (DefaultThread) {
      return DefaultThread;
    }

    return Threads?.find((thread) => thread.id === mainThreadId);
  }, [mainThreadId, DefaultThread, OwnThread]);

  const {id: threadId, Modules} = mainThread || {};

  const moduleIndex = Modules?.findIndex(({id}) => id == moduleId);
  const moduleNumber = moduleIndex ? moduleIndex : 0;

  const {
    id,
    ModuleContents,
    title: modalTitle,
    description: modalDescription,
    Homework: moduleHomework,
  } = renderModuleData || {};

  const threadLink = `/courses/${courseId}/threads/${threadId}`;

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
            buttonLink={threadLink}
            description={modalDescription ?? ''}
            homework={moduleHomework as IHomework[]}
            moduleNumber={moduleNumber}
            title={modalTitle ?? ''}
            courseId={renderCourseData?.id}
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
                      threadId={threadId as string}
                      isPreviewMode={!!show}
                      OwnThread={OwnThread}
                    />
                  </UI.CourseStructureList>
                </Box>
                <Homework
                  rate={0}
                  entityId={renderModuleData as string}
                  idCourse={renderCourseData?.id}
                  homeworks={renderModuleData && renderModuleData.Homework}
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
    query: {courseId, moduleId, show},
  } = ctx;
  const client = initApollo(null, ctx);

  const record = getCoursePagePreviewMode(courseId, show);

  let data;

  //@ts-ignore
  if (record?.record) {
    data = await client.query({
      query: GET_COURSE,
      variables: record,
    });
  } else {
    data = await client.query({
      query: GET_COURSE_PREVIEW,
      variables: record,
    });
  }

  const {
    data: {module},
  } = await client.query({
    query: MODULE,
    variables: {
      record: {id: moduleId},
    },
  });

  return {
    props: {
      ssrCourse: data?.data?.course ?? data?.data?.coursePreview ?? {},
      ssrModule: module || {},
    },
  };
};
