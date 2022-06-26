import RoundCheckbox from '@/components/quiz/quiz-inputs/RoundCheckbox';
import {Controller} from 'react-hook-form';
import {FC} from 'react';
import {FaSurveyOption, Maybe} from 'src/graphql.schema';
import {CheckBoxesWrapper, SurveyItem} from 'styles/survey';

interface IRadio {
  surveyId: Maybe<number>;
  control: any;
  SurveyOptions: Maybe<Maybe<FaSurveyOption>[]>;
  register: any;
  isBool?: boolean;
}

export const Radio: FC<IRadio> = ({
  surveyId,
  control,
  SurveyOptions,
  register,
  isBool,
}) => {
  return (
    <SurveyItem>
      <Controller
        name={`${surveyId}`}
        control={control}
        rules={{
          validate: (value) =>
            value.filter((elem: any) => elem.optionId != false).length > 0,
        }}
        render={() => (
          <CheckBoxesWrapper>
            {SurveyOptions &&
              SurveyOptions.slice(0, isBool ? 2 : SurveyOptions.length).map(
                (option: any, index: number) => (
                  <RoundCheckbox
                    SurveyOption={option}
                    surveyId={surveyId}
                    key={index}
                    register={register}
                    isBool={isBool}
                  />
                ),
              )}
          </CheckBoxesWrapper>
        )}
      />
    </SurveyItem>
  );
};

export default Radio;
