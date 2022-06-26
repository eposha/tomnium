import {FC} from 'react';
import {Maybe, SurveyQuestion, SurveyQuestionType} from 'src/graphql.schema';
import LinearAnswer from './LinearAnswer';
import SliderAnswer from './SliderAnswer';
import TextAnswer from './TextAnswer';

interface IAnswers {
  question: Maybe<SurveyQuestion>;
}

const Answers: FC<IAnswers> = ({question}) => {
  const {
    SurveyQuestionTypeBool,
    SurveyQuestionTypeCheckbox,
    SurveyQuestionTypeRadio,
    SurveyQuestionTypeSlider,
    SurveyQuestionTypeString,
    SurveyQuestionTypeText,
    SurveyQuestionTypeRate,
  } = SurveyQuestionType;

  const typeData = {
    [SurveyQuestionTypeBool]: LinearAnswer,
    [SurveyQuestionTypeCheckbox]: LinearAnswer,
    [SurveyQuestionTypeRadio]: LinearAnswer,
    [SurveyQuestionTypeSlider]: SliderAnswer,
    [SurveyQuestionTypeString]: TextAnswer,
    [SurveyQuestionTypeText]: TextAnswer,
    [SurveyQuestionTypeRate]: TextAnswer,
  };

  const answerType = question?.type;

  if (answerType) {
    const AnswerElem = typeData[answerType];
    return <AnswerElem question={question} />;
  }

  return null;
};

export default Answers;
