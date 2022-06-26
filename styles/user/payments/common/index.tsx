import styled from 'styled-components';
import {media} from 'styles/media';

export const PaymentWrapper = styled.div`
  margin: 20px 0 30px;

  ${media.greaterThan('xs')`
    margin:0
  `}
`;
