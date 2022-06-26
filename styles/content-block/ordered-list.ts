import styled from 'styled-components';
import {media} from 'styles/media';

export const OL = styled.ol`
  margin-left: 15px;
  li {
    margin-top: 15px;
  }

  ${media.greaterThan('xs')`
    li {
        margin-top: 20px;
      }
`};
`;
