import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.common.whiteGrey};
  margin-right: 5px;
`;

export const ProgressBarInner = styled.div<{
  color?: 'primary' | 'secondary';
  progress: number;
}>`
  background-color: ${({theme, color}) =>
    color === 'primary'
      ? `${theme.colors.common.blueberry}`
      : `${theme.colors.common.jordyBlue}`};

  width: ${({progress}) => `${progress}%`};
  height: 100%;
  border-radius: 10px;
`;

export const ProgressText = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${({theme}) => theme.colors.common.greyDark};
`;
