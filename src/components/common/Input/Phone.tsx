import {Controller} from 'react-hook-form';
import PhoneInput, {PhoneInputProps} from 'react-phone-input-2';
import ru from 'react-phone-input-2/lang/ru.json';
import {PhoneFieldStyles} from 'styles/phone-number-input';
import 'react-phone-input-2/lib/high-res.css';

const localization: {[key: string]: any} = {
  ru,
};

interface IPhoneWithCountrySelect extends Omit<PhoneInputProps, 'onChange'> {
  name: string;
  control: any;
  locale?: string;
  isRegister?: boolean;
  $isError?: boolean;
  setValidLengthPhoneNumber?: (arg: number) => void;
  rules?: Record<string, any>;
}

export const PhoneCountrySelect: React.FC<IPhoneWithCountrySelect> = ({
  name,
  control,
  locale,
  rules,
  isRegister,
  $isError,
  // setValidLengthPhoneNumber,
  ...rest
}) => {
  return (
    <>
      <PhoneFieldStyles $isRegister={isRegister} $isError={$isError} />
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({field: {onChange, value}}) => (
          <PhoneInput
            countryCodeEditable={false}
            searchPlaceholder='Search...'
            enableSearch
            disableSearchIcon
            containerClass='phone-field-container'
            inputClass='phone-field-input'
            dropdownClass='phone-field-dropdown'
            buttonClass='phone-field-dropdown-button'
            country={'ua'}
            // isValid={(value, country) => {
            //   return true;
            // }}
            {...rest}
            localization={localization[locale || '']}
            value={value}
            onChange={onChange}
          />
        )}
      />
    </>
  );
};
