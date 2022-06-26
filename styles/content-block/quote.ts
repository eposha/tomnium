import styled from 'styled-components';
import {media} from 'styles/media';

export const QuoteWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const VerticalLine = styled.div`
  margin-right: 10px;
  min-height: 100%;
  width: 5px;
  min-width: 5px;
  background: ${({theme}) => theme.colors.common.blueberryLight};
  border-radius: 15px;

  ${media.greaterThan('xs')`
    background: rgba(0, 87, 255, 0.5);
  `};
`;

export const Text = styled.div`
  div {
    ${media.lessThan('sm')`
      color: ${({theme}) => theme.colors.common.greyDark};
  `};
  }
`;
