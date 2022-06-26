import {FC, forwardRef, Ref} from 'react';
import {
  Props,
  components,
  DropdownIndicatorProps,
  ControlProps,
  ClearIndicatorProps,
} from 'react-select';

import {StyledSelect, IconContainer} from 'styles/select';
import ChevronDownIcon from 'public/icons/ChevronDown.svg';
import CloseIcon from '@/public/icons/CloseIconSVG.svg';

interface ISelectProps extends Omit<Props, 'onChange'> {
  labelField?: string;
  valueField?: string;
  mode?: 'dark' | 'light';
  onChange: (value: any) => void;
  isNote?: boolean;
  sidebar?: boolean;
  Icon?: any;
  width?: string;
  height?: string;
  maxWidth?: string;
  minWidth?: string;
  fontSize?: string;
}

// eslint-disable-next-line react/display-name
const Select: FC<ISelectProps> = forwardRef(
  ({labelField, valueField, mode, ...selectProps}, ref: Ref<any>) => {
    const color = mode === 'dark' ? 'white' : 'blueberry';

    return (
      <StyledSelect
        classNamePrefix='react-select'
        getOptionLabel={(option: any) =>
          labelField ? option[labelField] : option.title ?? option.label
        }
        getOptionValue={(option: any) =>
          valueField ? option[valueField] : option.id ?? option.value
        }
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator,
          ClearIndicator,
          Control,
        }}
        color={color}
        isClearable={false}
        isSearchable={false}
        mode={mode}
        ref={ref}
        {...selectProps}
      />
    );
  },
);

export default Select;

const Control = ({children, ...props}: ControlProps) => {
  // @ts-ignore
  const {Icon, isNote} = props.selectProps;

  return (
    <components.Control {...props}>
      {Icon && (
        <IconContainer isNote={isNote}>
          <Icon width={20} height={20} />
        </IconContainer>
      )}
      {children}
    </components.Control>
  );
};

const DropdownIndicator = (props: DropdownIndicatorProps) => (
  <components.DropdownIndicator {...props}>
    <ChevronDownIcon />
  </components.DropdownIndicator>
);

const ClearIndicator = (props: ClearIndicatorProps) => (
  <components.ClearIndicator {...props}>
    <CloseIcon />
  </components.ClearIndicator>
);
