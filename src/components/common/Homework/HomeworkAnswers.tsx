import {FC} from 'react';
import {useRouter} from 'next/router';
import {CourseSidebar} from '@/components/courses';
import {HOMEWORK_NAVBAR_TYPE} from '@/constants/homework';
import {Media} from 'src/media-styles';
import {Wrapper} from 'styles/courses/course-page';
import HomeworkAnswersContainer from './HomeworkAnswersContainer';
import HomeworkNavBar, {HomeworkNavbarType} from './HomeworkNavBar';
import HomeworkNavbarResult from './HomeworkNavbarResult';
import {useGetHomeworkTest} from '@/graph-hooks/homeworks/test/useGetHomeworkTest';
import {useGetNextStep} from '@/graph-hooks/lessons/useNextStep';
import {useHomeworkTestResult} from '@/graph-hooks/homeworkResults/useHomeworkResult';
import {useGetTestDuration} from 'src/hooks/homeworks/test/useGetTestDuration';

import * as UI from 'styles/homeworks/common';

interface IHomeworkAnswerProps {
  courseId?: string;
}

const HomeworkAnswers: FC<IHomeworkAnswerProps> = ({courseId}) => {
  const router = useRouter();
  const {homeworkId} = router.query;
  const {FINAL} = HOMEWORK_NAVBAR_TYPE;

  const {homework} = useGetHomeworkTest(homeworkId as string);
  const {homeworkResult} = useHomeworkTestResult(homeworkId as string);
  const {duration} = useGetTestDuration();

  const {getSteps} = useGetNextStep();

  const handleNextLearningStep = () => {
    getSteps({
      variables: {
        courseId,
      },
    });
  };

  return (
    <Wrapper>
      <Media greaterThan={'xs'}>
        <CourseSidebar />
      </Media>
      <UI.FlexWrapper>
        <UI.HomeworkAnswersWrapper>
          <UI.HomeworkTitle>Ответы теста</UI.HomeworkTitle>
          <UI.Wrapper>
            <UI.Container>
              <HomeworkAnswersContainer
                questions={homework?.HomeworkTestQuestions}
                handleNextLearningStep={handleNextLearningStep}
              />
            </UI.Container>
            <Media at='xs'>
              <HomeworkNavBar
                type={FINAL as HomeworkNavbarType}
                handleNextLearningStep={handleNextLearningStep}
                dataTestQuestions={{
                  duration,
                  maxScore: homework?.maxScore,
                  score: homeworkResult?.score,
                }}
              />
            </Media>
          </UI.Wrapper>
        </UI.HomeworkAnswersWrapper>
        <Media greaterThan='xs'>
          <HomeworkNavbarResult
            maxScore={homework?.maxScore}
            score={homeworkResult?.score}
            duration={duration}
          />
        </Media>
      </UI.FlexWrapper>
    </Wrapper>
  );
};

export default HomeworkAnswers;
