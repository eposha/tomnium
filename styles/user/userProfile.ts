import styled, {css} from 'styled-components';
import Select2 from 'react-dropdown-select';
import {media} from 'styles/media';
import Select from '@/components/common/Select';

export const ProfileBox = styled.div`
  width: 100%;
  border-radius: 5px;

  ${media.greaterThan('sm')`
    background: #ffffff;
    border-radius: 5px;
  `}
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 33px;
  margin: 30px 30px 15px;
`;

export const AvatarCard = styled.div`
  display: flex;
  padding: 20px;
  margin: 15px 0;
  background: #ffffff;
  border-radius: 5px;

  ${media.greaterThan('sm')`
    padding: 30px;
  `}
`;

export const AvatarCardWrapper = styled.div`
  min-width: 95px;
  height: 95px;
  position: relative;

  img {
    border-radius: 50%;
  }
`;

export const AvatarLoadCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  position: relative;
`;

export const Subtitle = styled.div`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

export const ButtonWrapper = styled.div<{disabled?: boolean}>`
  display: flex;

  ${media.greaterThan('sm')`
    justify-content: flex-end;
    width: 100%;
  `}
`;

export const Form = styled.form`
  ${media.greaterThan('sm')`
    padding: 15px;
`}
`;

export const FormSideWrapper = styled.div<{disabled?: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  ${({disabled}) => media.greaterThan('sm')`
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: ${disabled ? 'flex-start' : 'space-between'};
      gap: 0;
  `}
`;

export const ColWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.greaterThan('md')`
    flex-direction: row;
    justify-content: space-between;
  `}
`

export const InputFile = styled.input.attrs({type: 'file'})`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

export const FormBlock = styled.div<{
  disabled?: boolean;
  isWrap?: boolean;
  pd?: string;
}>`
  background: #ffffff;
  border-radius: 5px;
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${({disabled, isWrap, pd}) => media.greaterThan('sm')`
      background: transparent;
      ${
        disabled &&
        pd &&
        `
        padding: ${pd || '15px'};
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0;
      `
      }
  `}
`;

export const FormSide = styled.div<{
  pd?: string;
  width?: number;
  disabled?: boolean;
}>`
  ${({pd, width, disabled}) => media.greaterThan('sm')`
      ${
        disabled &&
        `
        padding: ${pd || '0'};
        ${
          width &&
          `
          width: ${width}%;
        `
        }
      `
      }
  `}
`;

export const InputWrapper = styled.div<{disabled?: boolean}>`
  display: flex;
  flex-direction: column;
  position: relative;

  ${({disabled}) => media.greaterThan('sm')`
      flex-direction: ${disabled ? 'row' : 'column'};
      align-items: ${disabled ? 'center' : 'flex-start'};
      gap: 20px;
      ${
        !disabled &&
        `
          & > * {
            width: 100%;
          }
      `
      }
  `}
`;

export const Label = styled.label<{$active?: boolean}>`
  font-size: ${({$active}) => ($active ? '10px' : '14px')};
  font-weight: ${({$active}) => ($active ? '400' : '600')};
  line-height: ${({$active}) => ($active ? '12px' : '17px')};
  color: ${({theme}) => theme.colors.common.greyDark};
  margin-bottom: 4px;

  ${({$active}) => media.greaterThan('sm')`
      margin: ${$active ? '0' : '0 0 4px 0'};
      min-width: ${$active ? '150px' : 'unset'};
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: #697077;
  `}
`;

export const InputStyles = css<{disabled?: boolean; error?: boolean}>`
  width: 100%;
  height: ${({disabled}) => (disabled ? 'auto' : '40px')};
  outline: none;
  border: ${({theme, disabled, error}) =>
    disabled
      ? 'none'
      : error
      ? `1px solid ${theme.colors.common.red}`
      : '1px solid #D3E2FF'};
  border-radius: 5px;
  background: transparent;
  padding: ${({disabled}) => (disabled ? '0' : '10px')};
  font-size: ${({disabled}) => (disabled ? '16px' : '14px')};
  line-height: ${({disabled}) => (disabled ? '19px' : '140%')};
  font-weight: ${({disabled}) => (disabled ? '600' : '500')};
  color: #131415;
  font-family: ${({disabled}) =>
    disabled ? `'Gilroy-Semibold', sans-serif` : `'Gilroy-Medium', sans-serif`};
`;

export const Input = styled.input<{disabled: boolean; error?: boolean}>`
  ${InputStyles};
`;

export const InputEmail = styled.input<{$isDisabled: boolean; error?: boolean}>`
  width: 100%;
  height: ${({$isDisabled}) => ($isDisabled ? 'auto' : '40px')};
  outline: none;
  border: ${({theme, $isDisabled, error}) =>
    $isDisabled
      ? 'none'
      : error
      ? `1px solid ${theme.colors.common.red}`
      : '1px solid #D3E2FF'};
  border-radius: 5px;
  background: transparent;
  padding: ${({$isDisabled}) => ($isDisabled ? '0' : '10px')};
  font-size: ${({$isDisabled}) => ($isDisabled ? '16px' : '14px')};
  line-height: ${({$isDisabled}) => ($isDisabled ? '19px' : '140%')};
  font-weight: ${({$isDisabled}) => ($isDisabled ? '600' : '500')};
  color: #131415;
  font-family: ${({$isDisabled}) =>
    $isDisabled ? `'Gilroy-Semibold', sans-serif` : `'Gilroy-Medium', sans-serif`};
`;

export const InputNumber = styled.input.attrs({
  type: 'number',
})<{
  disabled?: boolean;
  error?: boolean;
}>`
  ${InputStyles};
  &::placeholder {
    color: #131415;
  }
`;

export const SelectInput2 = styled(Select2)<{disabled?: boolean}>`
  ${InputStyles};
  padding: 10px !important;
  border: 1px solid #d3e2ff !important;
  border-radius: 5px !important;

  .react-dropdown-select-dropdown {
    width: 100%;
  }

  ${({disabled}) =>
    disabled &&
    `
      opacity: 1!important;
      border: none!important;
      padding: 0!important;

      .react-dropdown-select-input {
        display: none;
      }
  `}

  ${media.greaterThan('sm')`
      min-height: unset !important;
  `}
`;

export const SelectInput = styled(Select)<{isDisabled?: boolean}>`
  width: 100%;
  .react-select__control {
    background-color: transparent;
    border: 1px solid ${({theme}) => theme.colors.common.blueberryLight};
    justify-content: space-between;
    min-height: 40px;

    ${({isDisabled}) =>
      isDisabled &&
      `
        min-height: auto;
        border: none;
        padding: 0;
      `}
  }
  .react-select__single-value,
  .react-select__input-container,
  .react-select__placeholder {
    font-size: ${({isDisabled}) => (isDisabled ? '16px' : '14px')};
    line-height: ${({isDisabled}) => (isDisabled ? '19px' : '140%')};
    font-weight: ${({isDisabled}) => (isDisabled ? '600' : '500')};
    color: ${({theme}) => theme.colors.common.black};
    font-family: ${({isDisabled}) =>
      isDisabled
        ? `'Gilroy-Semibold', sans-serif`
        : `'Gilroy-Medium', sans-serif`};
  }
  .react-select__indicator {
    width: 16px;
    height: 16px;
    ${({isDisabled}) =>
      isDisabled &&
      `
          visibility: hidden;
      `}
    path {
      stroke: ${({theme}) => theme.colors.common.greyDark};
    }
  }
`;

export const DateInput = styled.input.attrs({type: 'date'})<{
  disabled?: boolean;
}>`
  ${InputStyles};
  position: relative;
  padding-left: ${({disabled}) => (disabled ? '0' : '35px')};

  &::-webkit-calendar-picker-indicator {
    width: 15px;
    height: 15px;
    display: block;
    background: url('/icons/Calendar.svg') center center no-repeat;
    background-size: contain;
    position: absolute;
    left: 5px;
    bottom: 12px;
  }
`;

export const Error = styled.div`
  position: absolute;
  height: 20px;
  bottom: -20px;
  font-size: 12px;
  color: ${({theme}) => theme.colors.common.red};
`;

export const BtnsController = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 15px;
  padding: 0 15px;
  box-sizing: border-box;
  flex-direction: column;
  gap: 10px;

  ${media.greaterThan('xs')`
    flex-direction: row;
    justify-content: space-between;
  `}
`;
