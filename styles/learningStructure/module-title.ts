import styled, {css} from 'styled-components';

import {media} from 'styles/media';
import {Widget, CardLabel} from 'styles/common';

const cardLineStyles = css`
  content: '';
  position: absolute;
  width: 1px;
  background-color: ${({theme}) => theme.colors.primary};
  left: 50%;
  z-index: 2;
`;

export const NumberLabel = styled(CardLabel)`
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: none;
  margin-right: 10px;
  padding: 0;

  &::before {
    ${cardLineStyles};
    top: -50px;
    bottom: 20px;
  }
  &::after {
    ${cardLineStyles};
    top: 20px;
    bottom: -500px;
  }

  ${media.greaterThan('xs')`
    margin-right: 20px;
    width: 30px;
    height: 30px;
    font-size: 14px;
    font-weight: 700;
    &:before {
    bottom: 30px;
    }
    &::after {
      top: 30px;
    }
  `}
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const TitleLabel = styled(Widget)`
  display: inline-block;
  margin-left: 10px;
  background-color: ${({theme}) => theme.colors.secondary};
  color: #fff;
  font-size: 10px;
  line-height: 11px;
  font-weight: 500;
  padding: 0 7px;
  width: 35px;
  height: 12px;
  vertical-align: top;

  ${media.greaterThan('xs')`
    vertical-align: unset;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    padding: 1px 10px 1px 9px;
    width: 52px;
    height: 20px;

  `};
`;
