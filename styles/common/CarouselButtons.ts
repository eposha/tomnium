import styled from 'styled-components';
import Image from 'next/image';

export const ArrowWrapper = styled.div<{disabled?: boolean}>`
  background: #fff;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({disabled}) => (disabled ? 'unset' : 'pointer')};
`;

export const DotButton = styled.button<{$isSelected: boolean}>`
  appearance: none;
  background-color: ${({$isSelected, theme}) =>
    $isSelected ? theme.colors.common.blueberryLight : '#fff'};
  cursor: pointer;
  border-radius: 50%;
  width: 7px;
  height: 7px;
`;

export const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledImage = styled(Image)<{disabled?: boolean}>`
  opacity: ${({disabled}) => disabled && 0.5};
`;
