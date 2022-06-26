import {FC} from 'react';

import {Label, Input, CheckMark} from 'styles/radio-button';

interface IRadioButtonProps {
  name?: string;
  label?: string;
  register?: any;
  rules?: any;
  value?: string | number;
  top?: number;
}

const RadioButton: FC<IRadioButtonProps> = ({
  name,
  label,
  register,
  rules,
  value,
  children,
  top,
}) => (
  <Label>
    <Input
      type='radio'
      name={name}
      value={value}
      {...(register && register(name, rules))}
    />
    <CheckMark top={top} />
    {label ?? children}
  </Label>
);

export default RadioButton;
