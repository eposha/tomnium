import {Controller, FieldError} from 'react-hook-form';
import {FormCheckbox} from 'src/UIcomponents';
import * as UI from 'styles/auth/common';
import {Control} from 'react-hook-form/dist/types';

interface IProps {
  control: Control<any>;
  errors?: FieldError;
}

export const PolicyCheckbox: React.FC<IProps> = ({control, errors}) => {
  return (
    <UI.InputWrapper>
      <Controller
        name={'policy'}
        control={control}
        rules={{
          required: true,
        }}
        render={({field}) => (
          <FormCheckbox
            {...field}
            isPurchase
            backgroundCheckBox={'blueberryLight'}
            sizeCheckBox={'10px'}
            //@ts-ignore
            size={'small'}
            errors={errors}
          />
        )}
      />
    </UI.InputWrapper>
  );
};
