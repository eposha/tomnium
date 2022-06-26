import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  user-select: none;
`;

export const CheckMark = styled.span<{top?: number}>`
  position: absolute;
  top: ${({top}) => `${top}px` ?? 0};
  left: 0;
  height: 15px;
  width: 15px;
  border: 1px solid #8bb3ff;
  border-radius: 50%;
  &::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({theme}) => theme.colors.primary};
    display: none;
  }
`;

export const Input = styled.input`
  position: absolute;
  cursor: pointer;
  visibility: hidden;
  &:checked ~ ${CheckMark} {
    &::after {
      display: block;
    }
  }
`;
