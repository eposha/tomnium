import ArrowRight from 'public/icons/ArrowRightSVG.svg';
import Zoom from 'public/icons/Zoom.svg';
import styled from 'styled-components';

export const ConsultationWrapper = styled.div`
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.common.white};
  padding: 10px 10px 15px 10px;
`;

export const ConsultatioTitle = styled.h2`
  color: ${({theme}) => theme.colors.common.blueberry};
  font-size: 12px;
  font-weight: 400;
  margin: 0 0 10px 0;
`;

export const ZoomSVG = styled(Zoom)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const ArrowRightSVG = styled(ArrowRight)`
  height: 10px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;

  path {
    stroke: ${({theme}) => theme.colors.common.blueberry};
  }
`;

export const ZoomText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.common.black};
  margin: 0;
`;

export const FlexContainer = styled.div<{mb?: number}>`
  align-items: center;
  display: flex;
  margin-bottom: ${({mb}) => (mb ? `${mb}px` : 0)};
  position: relative;
`;

export const TimeText = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.common.greyDark};
  margin: 0 5px 0 0;
`;
