import {FC} from 'react';
import * as UI from 'styles/unsubscribe/form-elements/index';

interface CustomRoundCheckboxPropsType {
  currentValue?: string;
  text?: string;
  isWrap?: boolean;
  right?: boolean;
  onChange?: (id?: string) => void;
  name?: string;
  value?: string;
  type?: string;
}

const CustomRoundCheckbox: FC<CustomRoundCheckboxPropsType> = ({
  text,
  isWrap,
  children,
  right,
  onChange,
  value,
  name,
  type,
  currentValue,
}) => {
  return (
    <UI.Label $isWrap={isWrap}>
      {right && children}

      {type === 'radio' && (
        <UI.RadioCheckbox
          name={name}
          checked={currentValue === value}
          value={value}
          onChange={(e: any) => {
            onChange && onChange(e.target.value);
          }}
        />
      )}

      {!type && <UI.Checkbox />}

      <UI.CustomCheckbox right={right}>
        <UI.CheckedCheckbox />
      </UI.CustomCheckbox>
      <UI.CheckboxTxt>{text}</UI.CheckboxTxt>
      {!right && children}
    </UI.Label>
  );
};

export default CustomRoundCheckbox;
