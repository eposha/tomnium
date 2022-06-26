import styled from 'styled-components';
import {media} from 'styles/media';

export const Wrapper = styled.div`
  padding: 8px;
  border: ${({theme}) => `1px solid ${theme.colors.common.blueberryLight}`};
  text-align: center;
  width: 70px;
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  border-radius: 5px;
  ${media.greaterThan('xs')`
    border-radius: 10px;
    border-width: 2px;
    width: 80px;
    height: 80px;
  `}
`;

export const Count = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  color: ${({theme}) => theme.colors.primary};
  margin: 0 0 5px;

  ${media.greaterThan('xs')`
    font-size: 36px;
    line-height: 44px;
    margin: 0;
  `}
`;

export const Title = styled.span`
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
  ${media.greaterThan('xs')`
    font-size: 12px;
  `}
`;
