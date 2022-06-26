import {FC} from 'react';
import {Controller} from 'react-hook-form';
import {FaSurveyOption, Maybe} from 'src/graphql.schema';
import {CheckBoxesWrapper} from 'styles/survey';
import SquareCheckbox from '@/components/quiz/quiz-inputs/Checkbox';

interface ICheckbox {
  surveyId: Maybe<number>;
  control: any;
  SurveyOptions: Maybe<Maybe<FaSurveyOption>[]>;
  register?: any;
  isBool?: boolean;
}

export const Checkbox: FC<ICheckbox> = ({
  surveyId,
  control,
  SurveyOptions,
  register,
}) => {
  return (
    <Controller
      name={`${surveyId}`}
      control={control}
      rules={{
        validate: (value) =>
          value.filter((elem: any) => elem.optionId != null).length > 0,
      }}
      render={() => (
        <CheckBoxesWrapper>
          {SurveyOptions &&
            SurveyOptions.map((option: any, index) => (
              <div key={option.id + index}>
                <SquareCheckbox
                  surveyId={surveyId}
                  register={register}
                  option={option}
                  index={index}
                />
              </div>
            ))}
        </CheckBoxesWrapper>
      )}
    />
  );
};

export default Checkbox;
