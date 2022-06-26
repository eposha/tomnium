import * as UI from 'styles/survey/index';
import {getCoursePagePreviewMode} from '@/helpers/common';
import {initApollo} from '@/lib/apolloClient';
import {GET_COURSE} from '@/query/courses/course';
import {GET_COURSE_PREVIEW} from '@/query/courses/coursePreview';
import {Media} from 'src/media-styles';
import {GetServerSideProps} from 'next';
import {CourseSidebar} from '@/components/courses';
import {ICourse} from '@/types/courses';
import {IModule} from '@/types/module';
import {FC, useMemo} from 'react';
import {LearnProcessBanner} from '@/components/learning-structure';
import {GET_SURVEY} from '@/query/survey/getSurvey';
import SurveyForm from '@/components/quiz/SurveyForm';

interface IQuizPageProps {
  ssrModules: IModule[];
  ssrCourse: ICourse;
  url: string;
  ip: any;
  ssrSurvey: any;
}

const QuizPage: FC<IQuizPageProps> = ({ssrCourse, ssrSurvey}) => {
  const {SurveyQuestions} = ssrSurvey;

  const {
    Threads,
    Authors,
    title,
    description,
    studentsCount,
    imageWeb,
    imageMob,
    usersImages,
    id,
    DefaultThread,
    OwnThread,
    status,
  } = ssrCourse;

  const mainThread = useMemo(() => {
    if (OwnThread) {
      return OwnThread;
    }
    if (DefaultThread) {
      return DefaultThread;
    }
  }, [OwnThread, DefaultThread]);

  const {endSubmissionDate, id: threadId} = mainThread || {};

  return (
    <UI.Wrapper>
      <Media greaterThan={'xs'}>
        <CourseSidebar
          endSubmissionDate={endSubmissionDate}
          modules={mainThread?.Modules}
          threadId={threadId}
          courseId={id}
          status={status}
          OwnThreadId={OwnThread?.id}
        />
      </Media>
      <div>
        <LearnProcessBanner
          title={title}
          description={description}
          Authors={Authors}
          studentsCount={studentsCount}
          imageWeb={imageWeb}
          imageMob={imageMob}
          usersImages={usersImages}
          mainThreadId={mainThread?.id}
          threadsList={Threads}
          label={'Курс'}
          button={true}
          courseId={id}
          OwnThread={OwnThread}
        />
        <SurveyForm SurveyQuestions={SurveyQuestions} courseId={id} />
      </div>
    </UI.Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    query: {courseId, show, threadId},
  } = ctx;
  const client = initApollo(null, ctx);

  const record = getCoursePagePreviewMode(courseId, show);

  let data;
  let survey;
  //@ts-ignore
  if (record && record?.record) {
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

  try {
    survey = await client.query({
      query: GET_SURVEY,
      variables: {
        threadId: threadId,
      },
    });
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      ssrCourse: data?.data?.course ?? data?.data?.coursePreview ?? {},
      ssrSurvey: survey?.data?.survey || {},
    },
  };
};

export default QuizPage;
