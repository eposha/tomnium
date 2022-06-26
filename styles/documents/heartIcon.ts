import styled from 'styled-components';

import {media} from 'styles/media';

export const IconWrapper = styled.div<{isFavorite?: boolean, position?: number}>`
  position: absolute;
  top: ${({position}) => position || 18}px;
  right: ${({position}) => position || 18}px;
  cursor: pointer;
  z-index: 99999;
  transition: transform 0.2s ease-in-out;

  & > svg {
    fill: ${({isFavorite, theme}) => isFavorite && theme.colors.secondary};
  }

  &:hover {
    transform: scale(1.1);
  }

  ${({position}) => media.greaterThan('xs')`
    top: ${position || 13}px;
    right: ${position || 13}px;
  `}
`;
