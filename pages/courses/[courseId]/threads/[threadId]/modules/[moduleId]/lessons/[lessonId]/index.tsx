import {SecondaryBreadCrumbs} from '@/components/common/Breadcrumbs';
import HeadSeo from '@/components/common/HeadSeo';
import Homework from '@/components/common/Homework';
import {ContentBlock} from '@/components/content-block';
import {CourseSidebar} from '@/components/courses';
import {LearnProcessBanner} from '@/components/learning-structure';
import {RatingValueType} from '@/components/rating/StarRating';
import {useGetCourse} from '@/graph-hooks/courses/useGetCourse';
import {useGetCoursePreview} from '@/graph-hooks/courses/useGetCoursePreview';
import {getCoursePagePreviewMode, getSlugifiedUrl} from '@/helpers/common';
import {initApollo} from '@/lib/apolloClient';
import {ILessonRateRequest, LESSON_RATE} from '@/mutations/rating/lessonRate';
import {GET_COURSE} from '@/query/courses/course';
import {GET_COURSE_PREVIEW} from '@/query/courses/coursePreview';
import {LESSON} from '@/query/lessons/getLesson';
import {ICourse} from '@/types/courses';
import {ILesson} from '@/types/lesson';
import {useMutation} from '@apollo/client';
import {GetServerSideProps, NextPage} from 'next';
import {useRouter} from 'next/router';
import {useMemo} from 'react';
import {Media} from 'src/media-styles';
import * as UI from 'styles/courses/course-page';

interface ILessonPageProps {
  ssrLesson: ILesson;
  ssrCourse: ICourse;
}

const LessonPage: NextPage<ILessonPageProps> = ({ssrLesson, ssrCourse}) => {
  const {
    query: {lessonId, moduleId, courseId, show},
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

  const imageMob = ssrCourse?.imageMob?.filter(({isOriginal}) => !isOriginal);
  const imageWeb = ssrCourse?.imageWeb?.filter(({isOriginal}) => !isOriginal);

  const {
    title,
    description,
    LessonContents,
    rate,
    Homework: lessonHomework,
  } = ssrLesson || {};

  const {
    Threads,
    seoTitle,
    seoDescription,
    status,
    id,
    OwnThread,
    DefaultThread,
  } = renderCourseData || {};

  const dataForBreadcrumbs = [
    {name: 'Главная', link: '/'},
    {name: 'Курс', link: `/courses/${courseId}`},
    {name: 'Модуль', link: `/courses/${courseId}/modules/${moduleId}`},
  ];

  const [estimate] = useMutation<ILessonRateRequest>(LESSON_RATE);

  const estimateLesson = (id: string, rate: RatingValueType) => {
    estimate({variables: {record: {id, rate}}});
  };

  const mainThread = useMemo(() => {
    if (OwnThread) {
      return OwnThread;
    }
    if (DefaultThread) {
      return DefaultThread;
    }
  }, [Threads?.length, DefaultThread, OwnThread]);

  const {id: threadId} = mainThread || {};

  return (
    <>
      <HeadSeo seoTitle={seoTitle} seoDescription={seoDescription} />

      <UI.Wrapper>
        <Media greaterThan={'xs'}>
          <CourseSidebar
            endSubmissionDate={Threads && Threads[0]?.endSubmissionDate}
            modules={mainThread?.Modules}
            threadId={threadId}
            courseId={id}
            status={status}
            OwnThreadId={OwnThread?.id}
          />
        </Media>
        <div>
          <Media greaterThan={'xs'}>
            <LearnProcessBanner
              title={title}
              description={description}
              button={false}
              label={'Урок'}
              imageMob={imageMob}
              imageWeb={imageWeb}
            />
          </Media>
          <Media at={'xs'}>
            <SecondaryBreadCrumbs
              dataList={dataForBreadcrumbs}
              title={'Урок №(TBD)'}
            />
          </Media>
          <UI.Main>
            <div style={{maxWidth: 780}}>
              <UI.CourseContentWrapper>
                {!!LessonContents && (
                  <UI.ContentBlockWrapper>
                    <ContentBlock contentData={LessonContents} />
                  </UI.ContentBlockWrapper>
                )}
              </UI.CourseContentWrapper>

              <Homework
                rate={rate as RatingValueType}
                entityId={lessonId as string}
                homeworks={lessonHomework}
                estimateEntity={estimateLesson}
                idCourse={id}
              />
            </div>
          </UI.Main>
        </div>
      </UI.Wrapper>
    </>
  );
};

export default LessonPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    query: {lessonId, courseId, show},
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
    data: {lesson},
  } = await client.query({
    query: LESSON,
    variables: {
      record: {id: lessonId},
    },
  });

  return {
    props: {
      ssrLesson: lesson || {},
      ssrCourse: data?.data?.course ?? data?.data?.coursePreview ?? {},
    },
  };
};
