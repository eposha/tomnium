import Image from 'next/image';

import {Text} from 'styles/common';
import {media} from 'styles/media';
import styled from 'styled-components';

export const UIHeader = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 5px;

  ${media.greaterThan('xs')`  
    max-width: 230px;
    margin-right: 15px;  
  `}
`;

export const ImageUI = styled(Image)`
  position: relative;
  border-radius: 5px;
`;

export const DesktopTimeWrapper = styled.div`
  ${media.greaterThan('xs')`
    display: flex;
    flex-direction: column;
    padding-top: 15px;
  `}
`;

export const TimeDataInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  flex: none;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const TextUI = styled(Text)`
  margin-right: 5px;
`;

export const IconsGroupWrapper = styled.div`
  margin-right: 10px;
  display: flex;
`;

export const TimeLabel = styled.span`
  font-weight: 700;
  padding: 5px 10px;
  border-radius: 20px;
  color: ${({theme}) => theme.colors.common.blueberry};
  background-color: ${({theme}) => theme.colors.common.blueberryLight};
  margin-left: 5px;
`;
