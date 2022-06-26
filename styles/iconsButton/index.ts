import styled, {css} from 'styled-components';
import {media} from '../media';

type Variant = 'default' | 'secondary';

const secondaryCss = css`
  background: #fff;
  border-radius: 5px;
`;

const IconsButtonCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 5px;
`;

export const IconButton = styled.button<{
  variant?: Variant;
  desktopVariant?: Variant;
  margin?: string;
  desktopMargin?: string;
  $isActive?: boolean;
}>`
  ${IconsButtonCss}
  background: ${({$isActive}) => ($isActive ? '#516ff6' : '#ffffff')};
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.12));
  ${({margin}) => margin && `margin: ${margin};`}
  ${({variant}) => variant === 'secondary' && secondaryCss}
  ${({desktopVariant}) =>
    desktopVariant === 'secondary' &&
    media.greaterThan('xs')`
      ${secondaryCss}
  `}

  ${({desktopMargin}) =>
    desktopMargin &&
    media.greaterThan('sm')`
  margin: ${desktopMargin};
`}
`;

export const UIBurgerButton = styled.button<{
  variant?: Variant;
  margin?: string;
}>`
  background: #fff;
  ${IconsButtonCss}
`;
