import styled from 'styled-components';

import {media} from 'styles/media';

export const Label = styled.label<{$isWrap?: boolean}>`
  width: 100%;
  display: flex;
  align-items: center;
  ${({$isWrap}) =>
    $isWrap &&
    `
    flex-wrap: wrap;
  `}
`;

export const CheckedCheckbox = styled.div`
  width: 7px;
  height: 7px;
  background: #516ff6;
  border-radius: 50%;
  display: none;
`;

export const CheckboxTxt = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #697077;

  ${media.greaterThan('sm')`
    font-size: 16px;
    line-height: 19px;
  `}
`;

export const CustomCheckbox = styled.div<{right?: boolean; jc?: string}>`
  min-width: 15px;
  height: 15px;
  border: 1px solid #8bb3ff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({right}) => (right ? 0 : '5px')};
  margin-left: ${({right}) => (right ? '17px' : 0)};

  ${({right}) => media.greaterThan('sm')`
    margin-right: ${right ? 0 : '10px'};
    margin-left: ${right ? '17px' : 0};
  `}
`;

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);

  &:checked + ${CustomCheckbox} {
    ${CheckedCheckbox} {
      display: block;
    }
  }

  &:checked ~ ${CheckboxTxt} {
    color: #131415;
  }
`;

export const RadioCheckbox = styled.input.attrs(({value, name, checked}) => ({
  type: 'radio',
  value,
  name,
  checked,
}))`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);

  &:checked + ${CustomCheckbox} {
    ${CheckedCheckbox} {
      display: block;
    }
  }

  &:checked ~ ${CheckboxTxt} {
    color: #131415;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 50px;
  border: 1px solid #d3e2ff;
  border-radius: 5px;
  padding: 10px;
  margin-top: 15px;
  font-family: 'Gilroy-Medium', sans-serif;
  resize: none;
  outline: none;

  &::placeholder {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #bcbcbc;
  }

  ${media.greaterThan('sm')`
    height: 80px
  `}
`;
