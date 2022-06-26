import {FC, useState} from 'react';
import * as UI from 'styles/unsubscribe/form-elements/index';
import {FaSurveyOption, Maybe} from 'src/graphql.schema';
import {FreeAnswer} from 'styles/survey';

interface ICheckbox {
  surveyId: Maybe<number>;
  SurveyOption: FaSurveyOption;
  register?: any;
  isBool?: boolean;
}

const RoundCheckbox: FC<ICheckbox> = ({
  surveyId,
  SurveyOption,
  register,
  isBool,
}) => {
  const {id, title, hasFluentAnswer} = SurveyOption || {};

  const [isDisabled, setDidabled] = useState(true);

  return (
    <div>
      <UI.Label>
        <UI.RadioCheckbox
          type='radio'
          value={Number(id)}
          onFocus={() => {
            setDidabled(false);
          }}
          {...register(`${surveyId}[0].optionId`)}
        />
        <UI.CustomCheckbox>
          <UI.CheckedCheckbox />
        </UI.CustomCheckbox>

        <UI.CheckboxTxt>{title}</UI.CheckboxTxt>
      </UI.Label>

      {hasFluentAnswer && !isBool && (
        <FreeAnswer
          {...register(`${surveyId}[0].freeAnswer`)}
          disabled={isDisabled}
          mt={5}
        />
      )}
    </div>
  );
};

export default RoundCheckbox;
