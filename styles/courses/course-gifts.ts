import styled from 'styled-components';
import {media} from 'styles/media';

import {Card, Text, Button as CommonButton} from 'styles/common';
import {Dots} from 'src/components/common/Carousel/Buttons';

export const CarouselContainer = styled.div`
  display: flex;
  margin-left: -10px;
`;

export const CarouselSlide = styled.div`
  flex: none;
  padding-left: 10px;
  width: calc(100% - 40px);
`;

export const CarouselDots = styled(Dots)`
  padding-top: 15px;

  & > :not(:last-child) {
    margin-right: 10px;
  }
`;

export const Wrapper = styled(Card)<{
  isAvailable: boolean;
  isCentered?: boolean;
}>`
  padding: 20px;
  margin: 0;
  height: 275px;
  max-width: 380px;
  border-radius: 10px;
  ${({isAvailable}) =>
    !isAvailable &&
    `
    background-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23516FF6' stroke-width='3' stroke-dasharray='5%2c8' stroke-dashoffset='3' stroke-linecap='square'/%3e%3c/svg%3e");
  `}

  ${({isCentered}) =>
    isCentered &&
    `
      align-items: center;
      justify-content: center;
  `}

  ${media.greaterThan('xs')`
    height: 270px;
    padding: 30px 25px 25px 30px;
  `}
`;

export const ImageWrapper = styled.div`
  margin-right: 5px;
  display: flex;
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Title = styled.div`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 600;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  ${media.greaterThan('xs')`
    margin-bottom: 15px;
  `};
`;

export const Description = styled(Text)`
  font-weight: 500;

  ${media.greaterThan('xs')`
    -webkit-line-clamp: 6;
  `}
`;

export const Button = styled(CommonButton)`
  margin-top: auto;
  margin: 0 auto;
  width: 135px;
`;

export const Footer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  & > :not(:last-child) {
    margin: 0 0 30px;
  }
  ${media.greaterThan('xs')`
    flex-direction: row;
    & > :not(:last-child) {
      margin: 0 20px 0 0;
    }
  `}
`;

export const StyledLink = styled.a`
  color: ${({theme}) => theme.colors.common.blueberry};
  font-size: 14px;
  font-weight: 500;
  padding: 5px;
  text-decoration: underline;
  display: inline-block;
  cursor: pointer;
`;

export const Meta = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
`;

export const LinksWrapper = styled.div`
  display: flex;
  & > :not(:last-child) {
    margin-right: 10px;
  }
`;
