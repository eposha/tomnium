import {CourseSidebar} from '@/components/courses';
import {HOMEWORK_NAVBAR_TYPE} from '@/constants/homework';
import useHomeworkTaskResultCreate from '@/graph-hooks/homeworks/task/useHomeworkTaskResultCreate';
import {useHomeworkById} from '@/graph-hooks/homeworks/useHomeworkById';
import {ICourse} from '@/types/courses';
import {IHomeworkTypeTask} from '@/types/homework';
import {useRouter} from 'next/router';
import {FC} from 'react';
import {Media} from 'src/media-styles';
import {Wrapper} from 'styles/courses/course-page';
import * as UI from 'styles/homeworks/common';
import {ContentBlockWrapper} from 'styles/homeworks/homework-fluent';
import ContentBlock from 'src/components/content-block/ContentBlock';
import RoundCheckbox from '../checkbox/RoundCheckbox';
import HomeworkNavBar, {HomeworkNavbarType} from './HomeworkNavBar';
import {CourseStatus, UserHomeworkStatus} from 'src/graphql.schema';
import {IThread} from '@/types/thread';
import {useHomeworkResultCalculate} from '@/graph-hooks/homeworks/useHomeworkResultCalculate';
import {useGetNextStep} from '@/graph-hooks/lessons/useNextStep';

interface IHomeworkTaskProps {
  homeworkData: IHomeworkTypeTask;
  course: ICourse;
  completedTasks?: {
    id: number;
    title: string;
    rate: number;
  }[];
  modules?: any;
  courseId?: string;
  threadId?: string;
  status?: CourseStatus;
  OwnThreadId?: string | undefined;
  mainThread?: IThread | undefined;
  OwnThread?: IThread | null | undefined;
}

const HomeworkTask: FC<IHomeworkTaskProps> = ({
  homeworkData,
  course: {OwnThread, id: courseId, status},
  completedTasks = [],
  modules,
  OwnThreadId,
}) => {
  const completed = completedTasks?.reduce((acc, curr) => {
    acc.push(curr.id);
    return acc;
  }, [] as number[]);

  const {handleTaskHomeworkResultCreate} = useHomeworkTaskResultCreate();

  const {
    query: {homeworkId},
  } = useRouter();

  const {homework} = useHomeworkById(homeworkId);

  const {TASK} = HOMEWORK_NAVBAR_TYPE;

  const {title, HomeworkTasks, status: homeworkStatus} = homeworkData || {};
  const {id: threadId} = OwnThread || {};

  const {homeworkResultCalculate} = useHomeworkResultCalculate();

  const {getSteps} = useGetNextStep();

  const handleNextLearningStep = async () => {
    if (homeworkStatus !== UserHomeworkStatus.UserHomeworkStatusDone) {
      await homeworkResultCalculate({
        variables: {
          homeworkId,
        },
      });
    }
    getSteps({
      variables: {
        courseId,
      },
    });
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

        <ContentBlockWrapper>
          {homework?.HomeworkContent && (
            <ContentBlock contentData={homework.HomeworkContent} />
          )}
        </ContentBlockWrapper>
        <UI.Wrapper>
          <UI.Container>
            {HomeworkTasks?.map(({id, title}, index) => (
              <>
                <RoundCheckbox
                  top={2}
                  key={id}
                  checked={completed.includes(id)}
                  disabled={completed.includes(id)}
                  onClick={() => {
                    handleTaskHomeworkResultCreate(id);
                  }}>
                  <UI.TaskTitle mb={10}>Задание {++index}</UI.TaskTitle>
                </RoundCheckbox>
                <UI.ListItemDivider>
                  <UI.TaskText>{title}</UI.TaskText>
                </UI.ListItemDivider>
              </>
            ))}
          </UI.Container>
          <HomeworkNavBar
            type={TASK as HomeworkNavbarType}
            handleNextLearningStep={handleNextLearningStep}
          />
        </UI.Wrapper>
      </div>
    </Wrapper>
  );
};

export default HomeworkTask;
