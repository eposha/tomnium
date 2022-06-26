import styled from 'styled-components';

import {media} from 'styles/media';

export const UserWrapper = styled.div`
  display: flex;
  padding: 0 0 30px;
  ${media.greaterThan('xs')`
    padding: 35px 0 80px;
  `};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
