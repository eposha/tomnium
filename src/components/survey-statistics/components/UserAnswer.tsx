import RadioAnswers from '@/components/user-statistic/components/RadioAnswers';
import {FC} from 'react';
import {SurveyQuestionResult, SurveyQuestionType} from 'src/graphql.schema';
import SliderAnswer from '@/components/user-statistic/components/SliderAnswer';
import TextAnswer from '@/components/user-statistic/components/TextAnswer';

interface IUserAnswer {
  survey: SurveyQuestionResult;
}

const UserAnswer: FC<IUserAnswer> = ({survey}) => {
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
    [SurveyQuestionTypeBool]: RadioAnswers,
    [SurveyQuestionTypeCheckbox]: RadioAnswers,
    [SurveyQuestionTypeRadio]: RadioAnswers,
    [SurveyQuestionTypeSlider]: SliderAnswer,
    [SurveyQuestionTypeString]: TextAnswer,
    [SurveyQuestionTypeText]: TextAnswer,
    [SurveyQuestionTypeRate]: TextAnswer,
  };
  const answerType = survey?.SurveyQuestion?.type;
  if (answerType) {
    const AnswerElem = typeData[answerType];
    return <AnswerElem survey={survey} />;
  }
  return <div>UserAnswer</div>;
};

export default UserAnswer;
