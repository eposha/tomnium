import styled, {StyledProps} from 'styled-components';
import {TColors} from '../_variables';

const getBorderWidth = ({width}: StyledProps<{width: number}>) =>
  `0 ${width}px ${width}px 0`;

export const Arrow = styled.div<{
  color: TColors;
  width: number;
  padding: number;
  disabled?: boolean;
}>`
  border: solid ${({theme, color}) => theme.colors.common[color]};
  border-width: ${getBorderWidth};
  display: inline-block;
  padding: ${({padding}) => `${padding}px`};
  opacity: ${({disabled}) => (disabled ? '0.7' : '1')};
`;

export const RightArrow = styled(Arrow)`
  transform: rotate(-45deg);
`;
export const LeftArrow = styled(Arrow)`
  transform: rotate(135deg);
`;
export const UpArrow = styled(Arrow)`
  transform: rotate(-135deg);
`;
export const DownArrow = styled(Arrow)`
  transform: rotate(45deg);
`;
