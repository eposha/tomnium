import {FC, useState} from 'react';
import {FaSurveyOption} from 'src/graphql.schema';
import SquareCheckbox from '@/components/common/checkbox/SquareCheckbox';

import {FreeAnswer} from 'styles/survey';

interface ICheckbox {
  surveyId?: number;
  option: FaSurveyOption;
  register?: any;
  isBool?: boolean;
  index: number;
}

const Checkbox: FC<ICheckbox> = ({surveyId, register, index, option}) => {
  const [isDisabled, setDidabled] = useState(true);

  return (
    <>
      <SquareCheckbox
        register={register}
        name={`${surveyId}.${index}.optionId`}
        value={option.id}
        onFocus={() => setDidabled(false)}>
        {option.title}
      </SquareCheckbox>

      {option.hasFluentAnswer && (
        <FreeAnswer
          {...register(`${surveyId}.${index}.freeAnswer`)}
          disabled={isDisabled}
          mt={10}
        />
      )}
    </>
  );
};

export default Checkbox;
