import styled from 'styled-components';
import {media} from 'styles/media';

export const UL = styled.ul`
  list-style-type: disc;
  margin-left: 15px;
  li {
    margin-top: 15px;
    &::marker {
      color: ${({theme}) => theme.colors.primary};
    }
  }

  ${media.greaterThan('xs')`
    li {
        margin-top: 20px;
      }
`};
`;
