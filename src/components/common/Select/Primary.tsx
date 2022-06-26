import React from 'react';
import {SelectProps, SelectRenderer} from 'react-dropdown-select';

import {
  DateSelect,
  InnerSelect,
  ContValue,
  InnerValue,
} from 'styles/select/primary';

import {ChevronDownIcon, ChevronDownIconGrey} from 'styles/select/timezone';

interface IPrimarySelectProps {
  placeholder?: string;
  onChange: (value: any[]) => void;
  width?: string;
  height?: string;
  maxWidth?: string;
  lineClamp?: number;
  fontSize?: string;
  mode?: 'dark' | 'light';
  sidebar?: boolean;
  labelField?: string;
  valueField?: string;
  isNote?: boolean;
  Icon?: any;
}

const ContentSelect = <T,>({
  state,
  lineClamp,
  mode,
  fontSize,
  labelField,
  sidebar,
  isNote,
  Icon,
}: SelectRenderer<T> & Omit<IPrimarySelectProps, 'onChange'>) => {
  const label = labelField || 'label';

  const valueSelect = (state.values[0] as any)?.[label];

  const color = mode === 'dark' ? 'white' : 'blueberry';

  return (
    <ContValue isNote={isNote}>
      <InnerValue
        mode={mode}
        fontSize={fontSize}
        lineClamp={lineClamp}
        color={color}
        margin={'0 5px 0 0'}
        sidebar={sidebar}
        isNote={isNote}
        textAlign={'center'}>
        {isNote && <Icon width={20} height={20} alt='icon' />}
        {valueSelect || 'Select'}
      </InnerValue>
      {!sidebar && (
        <ChevronDownIcon color={color} $isDropDown={state.dropdown} />
      )}
      {sidebar && <ChevronDownIconGrey />}
    </ContValue>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const PrimarySelect = <T extends object | string = {}>({
  width,
  maxWidth,
  height,
  lineClamp,
  options,
  values,
  placeholder,
  onChange,
  labelField,
  valueField,
  sidebar,
  isNote,
  Icon,
  mode,
  ...elemProps
}: React.PropsWithRef<SelectProps<T>> & IPrimarySelectProps) => {
  return (
    <InnerSelect
      width={width}
      maxWidth={maxWidth}
      height={height}
      sidebar={sidebar}>
      {/*@ts-ignore*/}
      <DateSelect
        {...elemProps}
        options={options}
        values={values}
        mode={mode}
        labelField={labelField}
        valueField={valueField}
        sidebar={sidebar}
        isNote={isNote}
        contentRenderer={(props) => (
          <ContentSelect
            mode={mode}
            lineClamp={lineClamp}
            fontSize={elemProps.fontSize}
            labelField={labelField}
            valueField={valueField}
            sidebar={sidebar}
            isNote={isNote}
            Icon={Icon}
            {...props}
          />
        )}
        placeholder={placeholder || ''}
        dropdownHandle={false}
        keepSelectedInList={true}
        onChange={onChange}
        dropdownPosition={'auto'}
        dropdownGap={0}
        closeOnScroll
      />
    </InnerSelect>
  );
};
