import Image from 'next/image';
import styled, {css} from 'styled-components';
import {media} from 'styles/media';

import {Button} from 'styles/common';
import {Dots} from 'src/components/common/Carousel/Buttons';

export const Container = styled.div`
  display: flex;
  margin-left: -20px;
`;

export const Slide = styled.div`
  flex: none;
  padding-left: 20px;
  width: calc(100% - 60px);
`;

const cardSidesCircles = css`
  position: absolute;
  content: '';
  background-color: ${({theme}) => theme.colors.common.whiteGrey};
  border-bottom: 0;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border: ${({theme}) => `1px solid ${theme.colors.common.blueberryLight}`};
  display: block;
  height: 6px;
  top: calc(50% - 3px);
  width: 12px;
`;

export const CardWrapper = styled.div`
  background: #fff;
  border-radius: 10px;
  border: ${({theme}) => `1px solid ${theme.colors.common.blueberryLight}`};
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  height: 175px;
  position: relative;

  &::before {
    ${cardSidesCircles}
    transform: rotate(90deg);
    left: -4px;
  }
  &::after {
    ${cardSidesCircles}
    transform: rotate(-90deg);
    right: -4px;
  }

  ${media.greaterThan('xs')`
    display:flex;
    padding: 20px;
    border: none;
    &::before, 
    &::after{
      visibility: hidden;
    }
  `}
`;

export const Header = styled.div`
  margin: 0 20px 0 0;
  width: 230px;
`;

export const Content = styled.div`
  padding: 10px;
  border-bottom: ${({theme}) =>
    `1px dashed ${theme.colors.common.blueberryLight}`};
  ${media.greaterThan('xs')`
    margin-right: 40px;
    padding: 0;
    border-bottom: none;
    flex: 1;
  `};
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  ${media.greaterThan('xs')`
    min-width: 33%;
    padding: 5px 10px;
    flex-direction: row;
    flex: none;
  `};
`;

export const StyledImage = styled(Image)`
  border-radius: 5px;
`;

export const MainMeta = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  ${media.greaterThan('xs')`
    flex-direction: column;
    align-items: flex-start;
    margin: 0 20px 0 0;
    padding: 10px 0;
    & > :not(:last-child) {
      margin-bottom: 30px;
    }
  `};
`;

export const DurationWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 49%;
  margin-right: 5px;
  ${media.greaterThan('xs')`
    width: auto;
    margin: 0;
  `};
`;

export const PriceWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: none;
  margin-right: 5px;
  width: 49%;
  ${media.greaterThan('xs')`
    width: 100%;
    margin: 0;
  `};
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 0 5px;
  position: relative;
  white-space: nowrap;
`;

export const Discount = styled.span`
  color: ${({theme}) => theme.colors.common.greyLight};
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  text-decoration: line-through;
  position: absolute;
  top: -5px;
`;

export const AdditionalMetaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.greaterThan('xs')`
    flex-direction: column;
    margin: 0;    
    width: 55%;
    flex: 1;
    max-width: 220px;
    margin-left: auto;
  `};
`;

export const TotalLessonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconLabel = styled.div`
  color: ${({theme}) => theme.colors.common.greyDark};
  font-size: 12px;
  font-weight: 500;
  line-height: 14.5px;
  margin-left: 5px;

  ${media.greaterThan('xs')`
    margin-left: 10px;
  `};
`;

export const StyledLink = styled.a`
  ${media.greaterThan('xs')`
    color: ${({theme}) => theme.colors.black};
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    text-decoration: underline;
  `};
`;

export const StyledButton = styled(Button)`
  display: block;
  padding: 5px;
  font-weight: 500;
  font-size: 12px;
  ${media.greaterThan('xs')`
    padding: 10px;
    font-size: 14px;
    font-weight: 600;
  `};
`;

export const CarouselDots = styled(Dots)`
  padding-top: 20px;

  & > :not(:last-child) {
    margin-right: 10px;
  }
`;
