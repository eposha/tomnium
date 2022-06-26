import {media} from 'styles/media';
import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const UIContainer = styled.div`
  margin: auto;
  padding: 0 10px;
  width: 100%;
  height: 100%;
  max-width: 1180px;

  ${media.greaterThan('sm')`
    padding: 0;
  `};
`;
