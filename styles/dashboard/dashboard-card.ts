import styled from 'styled-components';
import {media} from 'styles/media';

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;

  ${media.greaterThan('md')`
    gap: 20px;
  `}
`;

export const CardContainer = styled.article`
  max-width: 145px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.common.white};
  padding: 20px;

  ${media.greaterThan('md')`
  max-width: 180px;
  `}
`;

export const CardTitle = styled.h3`
  font-size: 13px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.black};
  margin: 0;
`;

export const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.blueLight};
  border-radius: 5px;
  border: 2px solid ${({theme}) => theme.colors.common.blueberryLight};

  ${media.greaterThan('md')`
    width: 180px;
    height: 80px;
    color: ${({theme}) => theme.colors.common.greyDark};
  `}
`;

export const ProgressCircle = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 3px solid ${({theme}) => theme.colors.common.blueberryLight};
  position: relative;

  ${media.greaterThan('md')`
    width: 40px;
    height: 40px;
  `}
`;

export const ProgressText = styled.span`
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 600;
  width: 100%;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Circle = styled.circle.attrs({
  cx: -20,
  cy: 20,
  r: 18,
})`
  fill: transparent;
  stroke: ${({theme}) => theme.colors.common.red};
  stroke-width: 3px;
  stroke-dasharray: 510;
  transform: rotate(-90deg);
`;

export const ProgressSVG = styled.svg<{percent?: number}>`
  position: absolute;
  top: -5px;
  left: -5px;

  ${media.greaterThan('md')`
    top: -3px;
    left: -3px;
  `}

  circle {
    stroke-dashoffset: calc(497 - ${({percent}) => (percent ? percent : -13)});
  }
`;

export const Span = styled.span``;
