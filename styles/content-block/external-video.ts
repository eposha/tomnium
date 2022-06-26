import styled from 'styled-components';
import {media} from 'styles/media';

export const ExternalVideo = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 400px;
  max-height: 500px;

  ${media.greaterThan('xs')`
  margin-top: 50px;
`};
`;
