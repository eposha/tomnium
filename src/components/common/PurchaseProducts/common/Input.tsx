import {Controller} from 'react-hook-form';
import {AuthInput} from 'styles/payments';
import {ErrorInfo} from 'styles/auth/common';
import {Text} from 'styles/common';
import {Control} from 'react-hook-form/dist/types/form';

interface IProps {
  name: string;
  placeholder?: string;
  fontSize?: string;
  control: Control<any>;
  formError?: Record<string, any>;
  type?: 'primary' | 'secondary';
}

export const Input: React.FC<IProps> = ({
  name,
  control,
  formError,
  placeholder,
  type,
  fontSize,
}) => {
  return (
    <>
      <Text
        $description
        margin={'0 0 5px 0'}
        fontSize={fontSize || '14px'}
        fontWeight={'500'}
        color={'greyDark'}>
        {name}
      </Text>
      <Controller
        name={name}
        control={control}
        rules={{
          required: true,
        }}
        render={({field}) => (
          <AuthInput
            {...field}
            autoComplete='off'
            placeholder={placeholder}
            color={type}
            $isError={Boolean(formError)}
          />
        )}
      />
      {formError && <ErrorInfo>{formError?.message}</ErrorInfo>}
    </>
  );
};
