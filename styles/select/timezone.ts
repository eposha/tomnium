import styled from 'styled-components';
import {media} from '../media';
import {TColors} from '../_variables';
import ChevronDown from '../../public/icons/ChevronDown.svg';
import {DateSelect} from './primary';
import Select from '@/components/common/Select';

export const InnerSearchInput = styled.div`
  position: sticky;
  top: 0;
  padding: 0 10px 10px 10px;
  box-sizing: border-box;
  background: ${({theme}) => theme.colors.common.white};
`;

export const SearchSelectInput = styled.input`
  border: 2px solid ${({theme}) => theme.colors.common.greyLight};
  border-radius: 5px;
  width: 100%;
  outline: none;
  height: 35px;
  &:focus {
    border: 2px solid ${({theme}) => theme.colors.common.blueberry};
    outline: none;
  }
  font-size: 12px;
`;

export const DropdownInner = styled.div`
  padding: 10px 0;
  box-sizing: border-box;
  overflow: hidden;
`;

export const DropdownMenuItem = styled.div<{$isSelected: boolean}>`
  padding: 5px 10px;
  box-sizing: border-box;
  font-size: 14px;
  color: ${({$isSelected, theme}) => $isSelected && theme.colors.common.white};
  background: ${({$isSelected, theme}) =>
    $isSelected && theme.colors.common.blueberryMiddle};
  word-break: break-word;
  &:hover {
    background: ${({theme}) => theme.colors.common.blueCloud};
  }
`;

export const StyledTimezoneSelect = styled(DateSelect)`
  &.primary-select {
    border: none;
    outline: none;
    min-width: 250px;
    width: max-content;
    &:focus {
      border: none;
      box-shadow: none;
    }
    ${media.lessThan('sm')` 
      width: 100%;
      border: 1px solid ${({theme}) => theme.colors.primary}
    `}
  }
`;

export const ContValue = styled.div`
  display: flex;
  align-items: center;
  border: none;
  position: relative;
  ${media.lessThan('sm')` 
    justify-content: center;
    width: 100%;
  `}
`;

export const InnerOptions = styled.div`
  max-height: 230px;
  overflow: auto;
`;

export const InnerValue = styled.div<{color?: TColors}>`
  color: ${({theme, color}) =>
    color ? theme.colors.common[color] : theme.colors.primary};
  font-weight: 600;
  font-size: 14px;
  margin-right: 13px;
  ${media.lessThan('sm')` 
    font-size: 12px;
  `}
`;

export const ChevronDownIcon = styled(ChevronDown)<{
  $isDropDown: boolean;
  color?: TColors;
}>`
  transform: ${({$isDropDown}) => ($isDropDown ? 'rotate(180deg)' : null)};
  width: 12px;
  height: 12px;
  & path {
    stroke: ${({theme, color}) =>
      color ? theme.colors.common[color] : theme.colors.primary};
  }
  flex-shrink: 0;
`;

export const ChevronDownIconGrey = styled(ChevronDown)`
  transform: ${({$isDropDown}) => ($isDropDown ? 'rotate(180deg)' : null)};
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  & path {
    stroke: #697077;
  }
`;

export const InnerEmptyState = styled.div`
  display: flex;
  align-items: center;
`;

export const TimezoneSelect = styled(Select)`
  && {
    font-size: 12px;
    .react-select__control {
      background-color: transparent;

      ${media.greaterThan('xs')`
        border: none;
        justify-content: flex-start;
        &:hover {
          border: none;
          box-shadow: none;
        }
      `}
    }
    .react-select__single-value,
    .react-select__input-container,
    .react-select__placeholder {
      font-weight: 500;
      color: ${({theme}) => theme.colors.common.black};
    }
    .react-select__option {
      padding: 5px 10px;
    }
    .react-select__indicator {
      visibility: hidden;
    }
  }
`;
