import {FC} from 'react';
import {FaSurveyOption, Maybe, SurveyQuestionType} from 'src/graphql.schema';
import {SurveyItem} from 'styles/survey/index';
import {
  Checkbox,
  Radio,
  Slider,
  String,
  Text,
} from '@/components/quiz/quiz-type';

interface ISurvey {
  surveyId: Maybe<number>;
  type: Maybe<SurveyQuestionType>;
  control: any;
  SurveyOptions: Maybe<Array<Maybe<FaSurveyOption>>>;
  register?: any;
}

const Survey: FC<ISurvey> = ({
  type,
  surveyId,
  SurveyOptions,
  control,
  register,
}) => {
  const {
    SurveyQuestionTypeBool,
    SurveyQuestionTypeCheckbox,
    SurveyQuestionTypeRadio,
    SurveyQuestionTypeSlider,
    SurveyQuestionTypeString,
    SurveyQuestionTypeText,
  } = SurveyQuestionType;
  switch (type) {
    case SurveyQuestionTypeBool:
      return (
        <SurveyItem>
          <Radio
            SurveyOptions={SurveyOptions}
            surveyId={surveyId}
            control={control}
            register={register}
            isBool
          />
        </SurveyItem>
      );
    case SurveyQuestionTypeCheckbox:
      return (
        <SurveyItem>
          <Checkbox
            SurveyOptions={SurveyOptions}
            surveyId={surveyId}
            control={control}
            register={register}
          />
        </SurveyItem>
      );
    case SurveyQuestionTypeRadio:
      return (
        <Radio
          SurveyOptions={SurveyOptions}
          surveyId={surveyId}
          control={control}
          register={register}
        />
      );
    case SurveyQuestionTypeSlider:
      return <Slider surveyId={surveyId} control={control} />;
    case SurveyQuestionTypeString:
      return <String surveyId={surveyId} control={control} />;
    case SurveyQuestionTypeText:
      return <Text surveyId={surveyId} control={control} />;
    default:
      return <SurveyItem></SurveyItem>;
  }
};

export default Survey;
