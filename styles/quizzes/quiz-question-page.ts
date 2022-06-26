import styled from 'styled-components';
import {media} from 'styles/media';

import {Button as UIButton} from 'styles/common';

export const Wrapper = styled.div`
  padding: 20px 0 30px;
  ${media.greaterThan('xs')`
    padding: 30px 0 80px;
    display: grid;
    grid-template-columns: 180px minmax(640px, 780px);
    gap: 20px;
  `};
`;

export const Main = styled.main`
  width: 100%;
  background: #fff;
  padding: 15px 10px;
  border-radius: 5px;
  ${media.greaterThan('xs')`
    padding: 30px;
  `};
`;

export const ContentBlockWrapper = styled.div`
  padding: 20px 0 30px;
  ${media.greaterThan('xs')`
    padding: 5px 0 25px;
  `};
`;

export const QuestionTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  line-height: 120%;
  margin: 0 0 10px;
  ${media.greaterThan('xs')`
    font-size: 20px
  `};
`;

export const OptionsContainer = styled.div<{$isBool: boolean}>`
  display: flex;
  flex-direction: column;
  padding: 25px 0;
  & > :not(:last-child) {
    margin-bottom: 40px;
  }
  ${media.greaterThan('xs')`
    padding: 20px 0 40px;
    & > :not(:last-child) {
    margin-bottom: 20px;
    }
    ${({
      //@ts-ignore
      $isBool,
    }) =>
      $isBool &&
      `
      flex-direction: row;
      & > :not(:last-child) {
        margin: 0 20px 0 0;
      } 
    `}
  `};
`;

export const ButtonContainer = styled.div`
  background-color: ${({theme}) => theme.colors.common.blueberryLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
`;

export const ProgressWrapper = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;
`;

export const CounterWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: #d3e2ff;
  border-radius: 0px 0px 5px 5px;
  margin-top: 15px;
`;

export const Counter = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: #516ff6;
  & > b {
    color: #516ff6;
  }

  ${media.greaterThan('xs')`
    display: inline-block;
    font-size: 12px;
    margin-right: 10px;
  `};
`;

export const ProgressBar = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 220px;
  height: 5px;
`;

export const ProgressBarInner = styled.div<{progress: number}>`
  background-color: #516ff6;
  border-radius: 10px;
  width: ${({progress}) => `${progress}%`};
  height: 5px;
`;

export const Button = styled(UIButton)`
  width: 100%;

  ${media.greaterThan('xs')`
    width: auto;
    min-width: 160px;
  `};
`;
