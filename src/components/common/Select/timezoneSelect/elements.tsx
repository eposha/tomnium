import {SelectRenderer} from 'react-dropdown-select';
import {Box} from 'styles/common';
import WorldIcon from 'public/icons/World2.svg';
import React from 'react';
import {
  ChevronDownIcon,
  ContValue,
  DropdownInner,
  DropdownMenuItem,
  InnerValue,
  SearchSelectInput,
  InnerSearchInput,
  InnerOptions,
  InnerEmptyState,
} from 'styles/select/timezone';

export const DropdownRenderer = <T,>({
  props,
  state,
  methods,
}: SelectRenderer<T>) => {
  const regexp = new RegExp(state.search, 'i');

  return (
    <DropdownInner>
      <InnerSearchInput>
        <SearchSelectInput
          type='text'
          value={state.search}
          onChange={methods.setSearch}
          placeholder='Search...'
        />
      </InnerSearchInput>
      <InnerOptions>
        {props?.options
          ?.filter((item) =>
            // @ts-ignore
            regexp.test(item[props?.searchBy] || item[props?.labelField]),
          )
          .map((option) => (
            <DropdownMenuItem
              // @ts-ignore
              key={option[props?.valueField]}
              title={(option as any)?.label}
              $isSelected={
                !!state?.values?.find(
                  (it) => (it as any)?.value === (option as any)?.value,
                )
              }
              onClick={() => methods.addItem(option)}>
              {/*// @ts-ignore*/}
              {option[props?.labelField]}
            </DropdownMenuItem>
          ))}
      </InnerOptions>
    </DropdownInner>
  );
};

export const ContentSelect = <T,>({state}: SelectRenderer<T>) => {
  const valueSelect = (state.values[0] as any)?.label;

  if (!valueSelect) {
    return (
      <InnerEmptyState>
        <Box mr={'7px'}>Select timezone</Box>
        <ChevronDownIcon $isDropDown={state.dropdown} />
      </InnerEmptyState>
    );
  }

  return (
    <ContValue>
      <Box mr={'5px'}>
        <WorldIcon width={14} height={14} />
      </Box>
      <InnerValue color={'black'}>{valueSelect}</InnerValue>
      <ChevronDownIcon $isDropDown={state.dropdown} />
    </ContValue>
  );
};
