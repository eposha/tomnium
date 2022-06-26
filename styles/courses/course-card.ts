import styled from 'styled-components';
import {media} from 'styles/media';
import CoinIcon from 'public/icons/CoinSVG.svg';
import Time from 'public/icons/TimeSVG.svg';

import {Widget as UIWidget} from 'styles/common';

export const Header = styled.div`
  margin-bottom: 15px;

  ${media.greaterThan('xs')`
    width: 230px;
    margin: 0 20px 0 0;
    flex:none
  `};
`;

export const Content = styled.div`
  width: 100%;
  ${media.greaterThan('xs')`
    width: auto;
    flex: 1;
    margin-right: 20px
  `};
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  ${media.greaterThan('xs')`
    padding: 10px 20px 0;
  `};
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

  & > span {
    border-radius: 5px;
  }
`;

export const CardLabelWrapper = styled.div`
  position: absolute;
  top: -5px;
  left: -5px;
  z-index: 10;

  ${media.greaterThan('xs')`
    top: -10px;
    left: -10px;
  `};
`;

export const Widget = styled(UIWidget)`
  position: absolute;
  left: 10px;
  bottom: 10px;
`;

export const FavoriteWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10;

  ${media.greaterThan('xs')`
    top: 10px;
    right: 10px;
  `};
`;

export const UserCountWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 5px;
  bottom: 5px;
  margin-top: 10px;
  & > :first-child {
    margin-right: 5px;
  }
  ${media.greaterThan('xs')`
    position: static;
    & > :first-child {
      margin-right: 0px;
    }
  `};
`;

export const IconsGroupWrapper = styled.div`
  margin-right: 5px;

  ${media.greaterThan('xs')`
      margin-right: 0px;
  `};
`;

export const MainMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  width: calc(51% - 10px);
  ${media.greaterThan('xs')`
    margin-right: 10px;
  `};
`;

export const PriceWrapper = styled.div`
  position: relative;
  max-width: 135px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;

  ${media.greaterThan('xs')`
    max-width: 180px;
    width: 100%;
  `};
`;

export const Price = styled.p`
  margin: 0;
  padding-left: 25px;
  position: relative;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AdditionalMetaWrapper = styled.div`
  display: flex;
  margin-top: auto;
  & > :first-child {
    display: flex;
    margin-right: 10px;
    flex: 1;
  }
`;

export const AdditionalMeta = styled.div``;

export const TotalLessonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 20px;
`;

export const IconLabel = styled.div`
  font-size: 12px;
  margin-left: 5px;
  color: ${({theme}) => theme.colors.common.greyDark};
  font-weight: 500;
  line-height: 14.5px;
  flex: none;

  ${media.greaterThan('xs')`
    margin-left: 10px;
  `};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & > *:not(:last-child) {
    margin-right: 10px;
  }
  ${media.greaterThan('xs')`
    flex-direction: column;
    min-width: 180px;
    width: fit-content;
    & > *:not(:last-child) {
      margin: 0 0 10px;
    }
  `};
`;

export const CoinIconSVG = styled(CoinIcon)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;

  path {
    stroke: ${({theme}) => theme.colors.common.blueberry};
  }
`;

export const DurationWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  max-width: 135px;
  width: 100%;

  ${media.greaterThan('xs')`
    max-width: 180px;
  `};
`;

export const Duration = styled.div`
  padding-left: 5px;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TimeIcon = styled(Time)`
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;

  path {
    stroke: ${({theme}) => theme.colors.common.blueberry};
  }
`;
