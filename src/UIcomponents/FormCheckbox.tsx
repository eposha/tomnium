/* eslint-disable react/display-name */
/* eslint-disable @next/next/link-passhref */
import React from 'react';
import styled, {keyframes, StyledProps} from 'styled-components';
import {TColors} from 'styles/_variables';
import {Text} from 'styles/common';
import {useDirectories} from '@/graph-hooks/directories';

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
  cursor: pointer;
`;

type TSize = 'small' | 'large';

const getFontSize = (size?: TSize) => {
  switch (size) {
    case 'small':
      return '10px';
    case 'large':
      return '14px';
    default:
      return '14px';
  }
};

const getFontWeight = (size?: TSize) => {
  switch (size) {
    case 'small':
      return '400';
    case 'large':
      return '600';
    default:
      return '600';
  }
};

const getGap = ({size}: StyledProps<{size?: TSize}>) => {
  switch (size) {
    case 'small':
      return '15px';
    case 'large':
      return '44px';
    default:
      return '44px';
  }
};

const getSizeCheckBox = ({size}: StyledProps<{size?: TSize}>) => {
  switch (size) {
    case 'small':
      return '10px';
    case 'large':
      return '24px';
    default:
      return '24px';
  }
};

const Label = styled.label<{size?: TSize; $isError?: boolean}>`
  position: relative;
  display: inline-block;
  padding-left: ${getGap};
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  border: ${({$isError}) =>
    $isError ? '1px solid red' : '1px solid transparent'};
`;

const UILink = styled.a<{size?: TSize}>`
  font-size: ${({size}) => getFontSize(size)};
  font-weight: ${({size}) => getFontWeight(size)};
  line-height: 120%;
  color: ${({theme}) => theme.colors.primary};
  cursor: pointer;
`;

const rotate = keyframes`
 from {
    opacity: 0;    
  }
  to {
    opacity: 1;    
  }
`;

const Indicator = styled.div<{
  $isError?: boolean;
  background?: TColors;
  size?: TSize;
}>`
  position: absolute;
  top: ${({size}) => (size === 'small' ? '5px' : '0')};
  left: 0;
  width: ${getSizeCheckBox};
  height: ${getSizeCheckBox};
  background: ${({background, theme}) =>
    background
      ? theme.colors.common[background]
      : theme.colors.common.whiteGrey};
  border: 1px solid ${({$isError}) => ($isError ? '#E25241' : '#f4f6fa')};
  box-sizing: border-box;
  border-radius: ${({size}) => (size === 'small' ? '2px' : '6px')};

  ${({$isError}) => $isError && 'box-shadow: 0px 0px 3px #e25241;'}

  ${Input}:checked + & {
    background-color: #516ff6;
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: ${({size}) => (size === 'small' ? '0' : '0.1em')};
    left: ${({size}) => (size === 'small' ? '0.2em' : '0.5em')};
    width: 35%;
    height: 70%;
    border: solid #fff;
    border-width: ${({size}) =>
      size === 'small' ? '0 0.1em 0.1em 0' : '0 0.2em 0.2em 0'};
    transform: rotate(45deg);
    animation-name: ${rotate};
    animation-duration: 0.1s;
    animation-fill-mode: forwards;
  }
`;

interface IFormCheckboxProps {
  backgroundCheckBox?: TColors;
  size?: TSize;
}

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const FormCheckbox = React.forwardRef<
  HTMLInputElement,
  InputProps & IFormCheckboxProps
>((props, ref) => {
  const {size} = props;

  const {directories} = useDirectories();
  const {privacyPolicy, termsOfUse} = directories?.Settings || {};

  return (
    <Label
      size={size}
      //@ts-ignore
      $isError={props?.errors && props?.isPurchase}>
      <Text
        as={'span'}
        fontSize={getFontSize(size)}
        fontWeight={getFontWeight(size)}>
        С условиями
      </Text>{' '}
      <UILink href={termsOfUse ?? ''} target='_blank' size={size}>
        пользовательского соглашения
      </UILink>{' '}
      <Text
        as={'span'}
        fontSize={getFontSize(size)}
        fontWeight={getFontWeight(size)}>
        и
      </Text>{' '}
      <UILink href={privacyPolicy ?? ''} target='_blank' size={size}>
        политикой конфиденциальности
      </UILink>{' '}
      <Text
        as={'span'}
        fontSize={getFontSize(size)}
        fontWeight={getFontWeight(size)}>
        ознакомлен
      </Text>
      {/* @ts-ignore */}
      <Input ref={ref} {...props} type={'checkbox'} />
      {/* @ts-ignore */}
      <Indicator
        size={size}
        //@ts-ignore
        $isError={props?.errors}
        background={props.backgroundCheckBox}
      />
    </Label>
  );
});

export default FormCheckbox;
