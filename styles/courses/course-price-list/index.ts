import styled from 'styled-components';
import {media} from 'styles/media';

export const Wrapper = styled.div`
  padding-top: 30px;

  ${media.greaterThan('xs')`
      padding: 40px 0 80px;
      display: grid;
      grid-template-columns: 180px minmax(640px, 980px);
      gap: 20px;
    `};
`;

export const Box = styled.div`
  margin-top: 20px;
`;

export const Main = styled.main``;
