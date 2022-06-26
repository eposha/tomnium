import {FC} from 'react';
import {Maybe} from 'src/graphql.schema';
import {InputRange} from 'styles/common/CustomInputs';

interface ISliderInput {
  min?: string;
  max?: string;
  step?: string;
  surveyId: Maybe<number>;
  onChangeFunc: (value: any) => void;
}

const SliderInput: FC<ISliderInput> = ({
  min,
  max,
  step,
  surveyId,
  onChangeFunc,
}) => {
  return (
    <>
      <InputRange
        min={min || '0'}
        max={max || '10'}
        step={step || '1'}
        name='foo'
        onChange={(e) => {
          onChangeFunc([
            {
              questionId: Number(surveyId),
              numberAnswer: Number(e.target.value),
            },
          ]);
        }}
      />
    </>
  );
};

export default SliderInput;
