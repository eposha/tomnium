import styled, {css} from 'styled-components';
import {TColors} from '../_variables';

const Disabled = css`
  background: #d3e2ff;
  color: #8bb3ff;
  border: 1px solid #d3e2ff;
`;

const Transparent = css`
  background: transparent;
  border: 1px solid #d3e2ff;
  color: #516FF6;
`

const Dashed = css`
  ${Disabled};
  border: 1px dashed #8bb3ff;
`;

const Solid = css<{color?: TColors}>`
  color: ${({theme, color}) =>
    color ? theme.colors.common[color] : theme.colors.primary};
  background: transparent;
  border: 1px solid
    ${({theme, color}) =>
      color ? theme.colors.common[color] : theme.colors.common.jordyBlue};
`;

const Label = css`
  color: ${({theme}) => theme.colors.primary};
  background: transparent;
  font-weight: 500;
  border: 1px solid ${({theme}) => theme.colors.common.blueberryLight};
`;

const Danger = css`
  color: ${({theme}) => theme.colors.common.red};
  background-color: transparent;
  border: 1px solid ${({theme}) => theme.colors.common.red};
`;

export interface IPropsButton {
  $isDisabled?: boolean;
  $dashed?: boolean;
  $solid?: boolean;
  width?: number | string;
  height?: number;
  $fullWidth?: boolean;
  $label?: boolean;
  color?: TColors;
  fontWeight?: number;
  fontSize?: string;
  margin?: string;
  $isDanger?: boolean;
  $transparent?: boolean;
}

const CommonButton = styled.button<IPropsButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #516ff6;
  background: #516ff6;
  color: #fff;
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  font-size: ${({fontSize}) => (fontSize ? fontSize : '14px')};
  font-weight: ${({fontWeight}) => (fontWeight ? fontWeight : 600)};
  user-select: none;
  ${({$isDisabled}) => $isDisabled && Disabled};
  ${({$dashed}) => $dashed && Dashed};
  ${({$solid}) => $solid && Solid};
  ${({$label}) => $label && Label};
  ${({ $isDanger }) => $isDanger && Danger};
  ${({$transparent}) => $transparent && Transparent};

  width: ${({width}) => (width ? `${width}px` : 'fit-content')};
  width: ${({$fullWidth}) => $fullWidth && '100%'};

  ${({height}) => height && `height:${height}px`};
  margin: ${({margin}) => margin || 0};
`;

export const ButtonLink = styled.a<IPropsButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #516ff6;
  background: #516ff6;
  color: #fff;
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  font-size: ${({fontSize}) => (fontSize ? fontSize : '14px')};
  font-weight: ${({fontWeight}) => (fontWeight ? fontWeight : 600)};
  user-select: none;
  ${({$isDisabled}) => $isDisabled && Disabled};
  ${({$dashed}) => $dashed && Dashed};
  ${({$solid}) => $solid && Solid};
  ${({$label}) => $label && Label};
  ${({ $isDanger }) => $isDanger && Danger};
  ${({$transparent}) => $transparent && Transparent};

  width: ${({width}) => (width ? `${width}px` : 'fit-content')};
  width: ${({$fullWidth}) => $fullWidth && '100%'};

  ${({height}) => height && `height:${height}px`};
  margin: ${({margin}) => margin || 0};
`;

export default CommonButton;

