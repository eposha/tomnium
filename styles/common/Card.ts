import styled, {css} from 'styled-components';

import {media} from '../media';

const Desktop = css`
  margin-bottom: 20px;
  padding: 20px;
`;

const Card = styled.div<{$fullWidth?: boolean; desktopDirection?: 'row'}>`
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 10px;
  position: relative;
  width: 100%;

  ${({desktopDirection}) =>
    desktopDirection &&
    media.greaterThan('xs')`
        flex-direction: ${desktopDirection}
`}

  ${({$fullWidth}) =>
    $fullWidth
      ? media.greaterThan('xs')`
        ${Desktop};
        min-width: 100%;  
`
      : media.greaterThan('xs')`
        ${Desktop};
        max-width: 480px;
`}
`;

export default Card;
