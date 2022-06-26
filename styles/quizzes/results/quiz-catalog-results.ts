import styled from 'styled-components';
import {media} from 'styles/media';

import {Button as UIButton} from 'styles/common';

export const Results = styled.div`
  border-radius: 5px;
  background: #fff;
  padding: 15px 10px;
  border-radius: 5px;
  ${media.greaterThan('xs')`
    padding: 30px;
    margin-bottom: 50px;
  `};
`;

export const ResultsBottomLabel = styled.div`
  background: ${({theme}) => theme.colors.common.blueberryLight};
  border-radius: 0 0 5px 5px;
  padding: 10px;
  margin-bottom: 30px;
`;

export const ShareLink = styled.a`
  font-weight: 500;
  font-size: 10px;
  line-height: 115%;
  color: ${({theme}) => theme.colors.common.blueberry};
  display: block;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > :not(:last-child) {
    margin-right: 15px;
  }
`;

export const Button = styled(UIButton)`
  min-width: 135px;
`;

export const ResultText = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 115%;
  &:not(:last-child) {
    margin: 0 0 25px;
  }
  ${media.greaterThan('xs')`
    font-size: 16px;
  `};
`;
