import {FC, useEffect} from 'react';
import {useRouter} from 'next/router';
import {Media} from 'src/media-styles';
import {CourseStatus, UserHomeworkStatus} from 'src/graphql.schema';
import {useGetHomeworkTest} from '@/graph-hooks/homeworks/test/useGetHomeworkTest';
import {useHomeworkTestMainLink} from 'src/hooks/homeworks/test/useHomeworkTestMainLink';
import {ContentBlock} from '@/components/content-block';
import {CourseSidebar} from '@/components/courses';
import {Wrapper} from 'styles/courses/course-page';
import * as UI from 'styles/homeworks/common';
import HomeworkInfo from './HomeworkInfo';
import {NavBar} from 'styles/homeworks/navigation-bar';
import {Button} from 'styles/common';

interface IHomeworkMainPage {
  modules?: any;
  courseId?: string;
  threadId?: string;
  status?: CourseStatus;
  OwnThreadId?: string | undefined;
}

const HomeworkMainPage: FC<IHomeworkMainPage> = ({
  modules,
  courseId,
  threadId,
  status,
  OwnThreadId,
}) => {
  const router = useRouter();
  const {homeworkId} = router.query;

  const {mainLink} = useHomeworkTestMainLink();

  const {homework} = useGetHomeworkTest(homeworkId as string);

  const {title, HomeworkContent, status: homeworkStatus} = homework || {};

  useEffect(() => {
    if (homeworkStatus === UserHomeworkStatus.UserHomeworkStatusDone) {
      router.replace(`${mainLink}/test/answers`);
    }
  }, [homeworkStatus]);

  const handleStartTest = () => {
    localStorage.setItem(
      'homeworkTestMeta',
      JSON.stringify({startDate: new Date()}),
    );
    router.push(`${mainLink}/test/questions`);
  };

  return (
    <Wrapper>
      <Media greaterThan={'xs'}>
        <CourseSidebar
          modules={modules}
          threadId={threadId}
          courseId={courseId}
          status={status}
          OwnThreadId={OwnThreadId}
        />
      </Media>

      <div>
        <UI.HomeworkTitle>{title}</UI.HomeworkTitle>
        <UI.Wrapper>
          <UI.Container>
            {HomeworkContent && <ContentBlock contentData={HomeworkContent} />}
            <HomeworkInfo
              questionsCount={homework?.HomeworkTestQuestions?.length}
            />
          </UI.Container>

          <NavBar>
            <div></div>
            <Button onClick={handleStartTest} width={135}>
              Начать
            </Button>
          </NavBar>
        </UI.Wrapper>
      </div>
    </Wrapper>
  );
};

export default HomeworkMainPage;
