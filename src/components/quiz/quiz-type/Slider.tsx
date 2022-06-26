import SliderInput from '@/components/common/SliderInput/SliderInput';
import {Maybe} from 'src/graphql.schema';
import {Controller} from 'react-hook-form';
import {FC} from 'react';
import {SurveyItem} from 'styles/survey';

interface ISlider {
  surveyId: Maybe<number>;
  control: any;
}

export const Slider: FC<ISlider> = ({surveyId, control}) => {
  return (
    <SurveyItem>
      <Controller
        name={`${surveyId}`}
        control={control}
        render={({field: {onChange}}) => (
          <SliderInput surveyId={surveyId} onChangeFunc={onChange} />
        )}
      />
    </SurveyItem>
  );
};

export default Slider;
