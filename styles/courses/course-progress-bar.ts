import styled from 'styled-components';
import {media} from 'styles/media';
import {TColors} from 'styles/_variables';
import {Text} from 'styles/common';

export const ProgressBar = styled.div<{width?: string}>`
  background-color: #fff;
  border-radius: 10px;
  height: 10px;
  width: 100%;
  ${media.greaterThan('xs')`
    display: flex;
    width: ${({width}: any) => width};
  `}
`;
export const ProgressInner = styled.div<{
  progress?: number;
  color?: TColors;
}>`
  background-color: ${({theme, color}) => color && theme.colors.common[color]};
  border-radius: 10px;
  height: 100%;
  width: ${({progress}) => `${progress}%`};
`;

export const ProgressLabel = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  ${media.greaterThan('xs')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: 15px;
    } 
  `}
`;

export const ProgressText = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  ${media.greaterThan('xs')`
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    margin: 0 20px 0 0; 
  `}
`;
