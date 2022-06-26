import {FC} from 'react';
import {Media} from 'src/media-styles';
import {IHomeworkTestQuestion} from '@/types/homework';
import {useGetTestSelectedOptions} from '@/graph-hooks/homeworks/test/useGetTestSelectedOptions';

import {Box} from 'styles/common';
import {ButtomContainer, TestButton, TestTitle} from 'styles/homeworks/common';
import * as UI from 'styles/homeworks/homework-answers';

interface IHomeworkAnswersContainer {
  questions?: IHomeworkTestQuestion[];
  handleNextLearningStep: () => void;
}

const HomeworkAnswersContainer: FC<IHomeworkAnswersContainer> = ({
  questions,
  handleNextLearningStep,
}) => {
  const {selectedOptionsIds} = useGetTestSelectedOptions({
    questionIds: questions?.map((question) => question.id),
  });

  return (
    <>
      <UI.AnswerContainerTitle>Вы прошли тест!</UI.AnswerContainerTitle>
      <UI.AnswerContainerSubtitle>
        Проанализируйте свои результаты:
      </UI.AnswerContainerSubtitle>

      {questions?.map(({id, title, HomeworkTestQuestionOptions}) => (
        <Box mb='20px' key={id}>
          <TestTitle margin='0 0 5px'>{title}</TestTitle>
          {HomeworkTestQuestionOptions?.map(
            (option) =>
              selectedOptionsIds?.includes(option.id) && (
                <UI.OptionWrapper key={option.id}>
                  <UI.OptionTitleWrapper>
                    <UI.OptionTitle>{option.title}</UI.OptionTitle>
                    <UI.TaskLabelContainer>
                      <Media greaterThan='xs'>
                        <UI.TaskLabel
                          background={option.right ? 'blueberry' : 'red'}>
                          {option.right ? 'Правильно' : 'Неправильно'}
                        </UI.TaskLabel>
                      </Media>
                      <Media at='xs'>
                        <UI.SVGContainer>
                          {option.right ? (
                            <UI.CorrectAnswerSVG />
                          ) : (
                            <UI.IncorrectAnswerSVG />
                          )}
                        </UI.SVGContainer>
                      </Media>
                    </UI.TaskLabelContainer>
                  </UI.OptionTitleWrapper>
                  {option.clarification && (
                    <UI.AnswerTextContainer>
                      <UI.AnswerText>{option.clarification}</UI.AnswerText>
                    </UI.AnswerTextContainer>
                  )}
                </UI.OptionWrapper>
              ),
          )}
        </Box>
      ))}

      <ButtomContainer>
        <TestButton onClick={handleNextLearningStep}>Закончить</TestButton>
      </ButtomContainer>
    </>
  );
};

export default HomeworkAnswersContainer;
