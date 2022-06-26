import styled from 'styled-components';
import {media} from 'styles/media';

import {Button as UIButton} from 'styles/common';

export const Wrapper = styled.div`
  background: ${({theme}) => theme.colors.common.white};
  border-radius: 5px;

  ${media.greaterThan('md')`
    max-width: 780%
  `}
`;

export const ListItemDivider = styled.div<{$isTest?: boolean}>`
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    position: absolute;
    content: '';
    height: 1px;
    left: 0;
    width: 100%;
    bottom: ${({$isTest}) => ($isTest ? '15px' : '10px')};
    background: ${({theme}) => theme.colors.common.blueberryLight};
    display: inline-block;

    ${media.greaterThan('xs')`
    background: transparent;
  `}
  }
`;

export const Container = styled.div`
  box-sizing: content-box;
  padding: 10px 10px 15px;

  ${media.greaterThan('md')`
    padding: 30px 30px 40px;
    max-width: 530px;
  `}

  & > :last-child::after {
    background-color: transparent;
  }
`;

export const HomeworkTitle = styled.h1`
  max-width: 680px;
  font-size: 18px;
  line-height: 1.2;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.black};
  margin: 20px 0 10px 0;

  ${media.greaterThan('md')`
  font-size: 28px;
  margin: 0 0 30px 0;
  `}
`;

export const TaskTitle = styled.h2<{mr?: number; mb?: number}>`
  font-size: 14px;
  cursor: pointer;
  margin: 0 ${({mr}) => (mr ? `${mr}px` : 0)}
    ${({mb}) => (mb || mb == 0 ? `${mb}px` : '20px')} 0;

  ${media.greaterThan('md')`
    font-size: 20px;
  `}
`;

export const TestTitle = styled.h2<{margin?: string}>`
  font-size: 14px;
  font-weight: 600;
  margin: ${({margin}) => margin ?? '0 0 30px'};

  ${media.greaterThan('md')`
    font-size: 16px;
  `};
`;

export const TaskText = styled.p<{mb?: number}>`
  font-size: 12px;
  color: ${({theme}) => theme.colors.common.greyDark};
  margin: 0 0 20px 0;
  display: inline-block;

  ${media.greaterThan('md')`
    font-size: 16px;
    padding-left: 40px;
    &:not(:last-child) {
      margin: 0 0 30px;
    }
  `}
`;

export const Button = styled.a<{
  background?: string;
  color?: string;
  borderColor?: string;
  mr?: number;
}>`
  display: inline-block;
  min-width: 135px;
  font-weight: 50;
  font-size: 14px;
  line-height: 1.4;
  padding: 10px;
  text-align: center;
  color: ${({theme, color}) =>
    color ? theme.colors.common[color] : theme.colors.common.white};
  background: ${({theme, background}) =>
    background
      ? theme.colors.common[background]
      : theme.colors.common.blueberry};
  border-radius: 5px;
  border: 1px solid
    ${({theme, borderColor}) =>
      borderColor ? theme.colors.common[borderColor] : 'none'};
  margin-right: ${({mr}) => (mr ? `${mr}px` : 0)};

  ${({mr}) => media.greaterThan('md')`
  margin-right: ${mr ? `${2 * mr}px` : 0};
  `}
`;

export const FlexContainer = styled.div<{
  mb?: {xs?: number; md?: number};
  justCont?: string;
}>`
  display: flex;
  justify-content: 'center';
  align-items: center;
  margin-bottom: ${({mb}) => (mb?.xs ? `${mb?.xs}px` : 0)};

  ${media.greaterThan('xs')`
  justify-content: space-between;
  `}
`;

export const ResultsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 80px 0;
`;

export const ResultTitle = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.black};
  margin: 0 0 10px 0;
`;

export const ResultText = styled.p`
  max-width: 240px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  color: ${({theme}) => theme.colors.common.blueberry};
  margin: 0 0 20px 0;
`;

export const FlexWrapper = styled.div<{mb?: number}>`
  display: flex;
  margin-bottom: ${({mb}) => (mb ? `${mb}px` : 0)};
`;

export const BoxContainer = styled.div<{width?: number}>`
  width: ${({width}) => `${width}px`};
`;

export const ButtomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40;
`;

export const TaskSubtitle = styled.p`
  margin: 5px 0 0;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: #697077;
`;

export const Form = styled.form`
  label:last-of-type {
    ${ListItemDivider}::after {
      background-color: transparent;
    }
  }
`;

export const TestButton = styled(UIButton)<{margin?: string}>`
  min-width: 135px;
  margin: ${({margin}) => margin};

  ${media.greaterThan('xs')`
    width: auto;
    min-width: 160px;
  `};
`;

export const HomeworkAnswersWrapper = styled.div`
  width: 100%;
  ${media.greaterThan('xs')`
    margin-right: 20px;
  `};
`;
