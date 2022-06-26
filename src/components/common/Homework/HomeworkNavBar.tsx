import * as UI from 'styles/homeworks/navigation-bar';
import * as COMMON from 'styles/homeworks/common';
import {FC} from 'react';
import {HOMEWORK_NAVBAR_TYPE} from '@/constants/homework';
import {Media} from 'src/media-styles';

export type HomeworkNavbarType = 'main' | 'test' | 'task' | 'results' | 'final';

export interface IHomeworkNavBarProps {
  type: HomeworkNavbarType;
  dataTestQuestions?: {
    currentQuestion?: number;
    questionCount?: number;
    score?: number;
    maxScore?: number;
    duration?: string;
  };
  handleNextLearningStep?: () => void;
}

const HomeworkNavBar: FC<IHomeworkNavBarProps> = ({
  type,
  dataTestQuestions,
  handleNextLearningStep,
}) => {
  const {MAIN, RESULTS, TASK, TEST, FINAL} = HOMEWORK_NAVBAR_TYPE;

  const title = type === MAIN ? 'Вопросы:' : 'Выполнено:';
  const buttonName = type === MAIN ? 'Начать' : 'Далее';

  const {currentQuestion, questionCount, score, maxScore, duration} =
    dataTestQuestions || {};

  return (
    <>
      {type === MAIN && (
        <UI.NavBar>
          <UI.NavBarContainer>
            <UI.NavBarCount>
              <UI.NavBarTitleCount>{title} </UI.NavBarTitleCount> 0 / 18
            </UI.NavBarCount>
          </UI.NavBarContainer>
          <COMMON.Button>{buttonName}</COMMON.Button>
        </UI.NavBar>
      )}
      {type === TASK && (
        <UI.NavBar>
          <UI.NavBarContainer></UI.NavBarContainer>
          <COMMON.TestButton onClick={handleNextLearningStep} width={160}>
            {buttonName}
          </COMMON.TestButton>
        </UI.NavBar>
      )}
      {type === TEST && (
        <>
          <Media at='xs'>
            <UI.NavBar>
              <UI.NavBarContainer>
                <UI.NavBarTitleCount>Вопрос: </UI.NavBarTitleCount>
                {Number(currentQuestion) + 1} / {questionCount}
                <div></div>
              </UI.NavBarContainer>
            </UI.NavBar>
          </Media>
          <Media greaterThan='xs'>
            <UI.NavBar>
              <UI.NavBarContainer>
                <UI.NavBarCount>
                  <UI.NavBarTitleCount>Вопрос: </UI.NavBarTitleCount>
                  {Number(currentQuestion) + 1} / {questionCount}
                </UI.NavBarCount>
              </UI.NavBarContainer>
            </UI.NavBar>
          </Media>
        </>
      )}
      {type === RESULTS && (
        <>
          <UI.NavBar>
            <UI.NavBarContainer>
              <UI.NavBarCount>
                <UI.NavBarTitleCount>Результат: </UI.NavBarTitleCount>
                <UI.NavBarResult>Отлично!</UI.NavBarResult>
              </UI.NavBarCount>
            </UI.NavBarContainer>
            <COMMON.TestButton>Следующий</COMMON.TestButton>
          </UI.NavBar>
        </>
      )}
      {type === FINAL && (
        <>
          <UI.NavBar>
            <UI.NavBarContainer>
              <UI.NavBarCount>
                <UI.NavBarTitleCount>Время: </UI.NavBarTitleCount>
                {duration}
              </UI.NavBarCount>

              <UI.NavBarCount>
                <UI.NavBarTitleCount>Баллы: </UI.NavBarTitleCount>
                {score} / {maxScore}
              </UI.NavBarCount>
            </UI.NavBarContainer>
          </UI.NavBar>
        </>
      )}
    </>
  );
};

export default HomeworkNavBar;
