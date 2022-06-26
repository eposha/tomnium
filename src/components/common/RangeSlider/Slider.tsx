import {FC} from 'react';
import {Control, Controller} from 'react-hook-form';
import Slider, {SliderProps} from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

interface IRangeSliderProps extends SliderProps {
  name: string;
  control: Control<any>;
}

const RangeSlider: FC<IRangeSliderProps> = ({
  marks,
  control,
  name,
  ...rest
}) => (
  <>
    <Controller
      name={name}
      control={control}
      render={({field: {onChange}}) => {
        return (
          <Slider
            marks={marks}
            step={0.1}
            dotStyle={{opacity: 0}}
            railStyle={{backgroundColor: '#F4F6FA', height: 5}}
            trackStyle={{backgroundColor: '#516FF6', height: 5}}
            handleStyle={{
              width: 20,
              height: 20,
              border: 'none',
              backgroundColor: '#516FF6',
              marginTop: -8,
            }}
            onAfterChange={onChange}
            {...rest}
          />
        );
      }}
    />
  </>
);

export default RangeSlider;
