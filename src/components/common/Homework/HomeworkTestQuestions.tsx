import {ContentBlock} from '@/components/content-block';
import {CourseSidebar} from '@/components/courses';
import {HOMEWORK_NAVBAR_TYPE} from '@/constants/homework';
import {useGetHomeworkTest} from '@/graph-hooks/homeworks/test/useGetHomeworkTest';
import {useRouter} from 'next/router';
import {useEffect, useMemo, useState} from 'react';
import {HomeworkQuestionType} from 'src/graphql.schema';
import {Media} from 'src/media-styles';
import {Wrapper} from 'styles/courses/course-page';
import * as UI from 'styles/homeworks/common';
import RadioButton from '../RadioButton';
import HomeworkNavBar, {HomeworkNavbarType} from './HomeworkNavBar';

import SquareCheckbox from '../checkbox/SquareCheckbox';
import {useAnswerHomeworksTest} from '@/graph-hooks/homeworks/test/useAnswerHomeworksTest';
import {useHomeworkTestMainLink} from 'src/hooks/homeworks/test/useHomeworkTestMainLink';
import {useHomeworkResultCalculate} from '@/graph-hooks/homeworks/useHomeworkResultCalculate';

const HomeworkTestQuestions = () => {
  const router = useRouter();
  const {homeworkId} = router.query;
  const {mainLink} = useHomeworkTestMainLink();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const {homeworkResultCalculate} = useHomeworkResultCalculate();

  const {homework} = useGetHomeworkTest(homeworkId as string);

  const {title, HomeworkTestQuestions} = homework || {};

  const currentQuestion = useMemo(
    () => HomeworkTestQuestions?.[currentQuestionIndex],
    [HomeworkTestQuestions, currentQuestionIndex],
  );

  const {register, onSubmit} = useAnswerHomeworksTest({
    setCurrentQuestionIndex,
  });

  useEffect(() => {
    if (currentQuestionIndex === HomeworkTestQuestions?.length) {
      const handleCalculateResult = async () => {
        await homeworkResultCalculate({
          variables: {
            homeworkId,
          },
          onCompleted() {
            localStorage.setItem(
              'homeworkTestMeta',
              JSON.stringify({
                ...JSON.parse(localStorage.homeworkTestMeta),
                endDate: new Date(),
              }),
            );

            router.replace(`${mainLink}/test/results`);
          },
        });
      };
      handleCalculateResult();
    }
  }, [currentQuestionIndex]);

  return (
    <Wrapper>
      <Media greaterThan={'xs'}>
        <CourseSidebar />
      </Media>
      <div>
        <UI.HomeworkTitle>{title}</UI.HomeworkTitle>
        <UI.Wrapper>
          <UI.Container>
            <UI.TaskTitle>{currentQuestion?.title}</UI.TaskTitle>

            {currentQuestion?.HomeworkTestQuestionContent && (
              <ContentBlock
                contentData={currentQuestion.HomeworkTestQuestionContent}
              />
            )}

            <UI.Form onSubmit={onSubmit}>
              {currentQuestion?.HomeworkTestQuestionOptions.map(
                ({id, title}) => {
                  return currentQuestion.type ===
                    HomeworkQuestionType.HomeworkQuestionTypeSelectMany ? (
                    <SquareCheckbox
                      key={id}
                      register={register}
                      name='selectedMany'
                      value={id}>
                      <UI.ListItemDivider $isTest>
                        <UI.TestTitle margin='0 0 30px'>{title}</UI.TestTitle>
                      </UI.ListItemDivider>
                    </SquareCheckbox>
                  ) : (
                    <RadioButton
                      key={id}
                      top={2}
                      register={register}
                      name='selectedOne'
                      value={id}>
                      <UI.ListItemDivider $isTest>
                        <UI.TestTitle margin='0 0 30px'>{title}</UI.TestTitle>
                      </UI.ListItemDivider>
                    </RadioButton>
                  );
                },
              )}

              <UI.FlexContainer mb={{xs: 20}}>
                <div></div>
                <UI.TestButton onSubmit={onSubmit} $fullWidth>
                  Ответить
                </UI.TestButton>
              </UI.FlexContainer>
            </UI.Form>
          </UI.Container>

          <HomeworkNavBar
            type={HOMEWORK_NAVBAR_TYPE.TEST as HomeworkNavbarType}
            dataTestQuestions={{
              currentQuestion: currentQuestionIndex,
              questionCount: HomeworkTestQuestions?.length,
            }}
          />
        </UI.Wrapper>
      </div>
    </Wrapper>
  );
};

export default HomeworkTestQuestions;
