import { Text } from 'styles/common';
import styled from 'styled-components';
import Image from 'next/image';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 12px;
  min-width: 180px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(88, 88, 88, 0.1);
  border-radius: 5px;
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  margin-top: 20px;
  margin-left: 21px;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
`;

export const Input = styled.input`
  position: absolute;
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
  pointer-events: none;

  & ~ ${Text} {
    color: #697077;
    font-weight: 400;
  }

  &:checked ~ ${Text} {
    color: #131415;
  }

`;

export const Indicator = styled.div`
  position: absolute;
  top: 0;
  left: -21px;
  width: 15px;
  height: 15px;
  background: #fff;
  border: 1px solid #131415;
  box-sizing: border-box;
  border-radius: 3px;
  cursor: pointer;

  ${Input}:checked + & {
    background-color: #516ff6;
    border: 1px solid #516ff6;
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0.1em;
    left: 0.3em;
    width: 35%;
    height: 70%;
    border: solid #fff;
    border-width: 0 0.2em 0.2em 0;
    transform: rotate(45deg);
  }
`;

export const SearchInput = styled.input`
  padding: 10px;
  box-sizing: border-box;
  margin-top: 20px;
  border: 2px solid ${({theme}) => theme.colors.common.greyLight};
  border-radius: 5px;
  color: ${({theme}) => theme.colors.text};
  &:focus {
    outline: none;
    border: 2px solid ${({theme}) => theme.colors.primary};
  }
`;

export const ButtonIsMoreItems = styled.button`
  position: relative;
  margin-top: 20px;
  border: none;
  background: ${({theme}) => theme.colors.common.white};
  padding: 3px;
  width: 100%;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 12px;
  color: ${({theme}) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Arrow = styled(Image)<{$isRotate: boolean}>`
  ${({$isRotate}) => $isRotate && `transform: rotate(180deg)`}
`;
