import styled from 'styled-components';
import {BREAKPOINT_CONTAINER, media} from '../media';
import ArrowIcon from '@/public/icons/ArrowRightSVG.svg';
import {Box} from '../common';
import * as MediaIcons from 'src/icon-components/social-icons';

type ListDirectionType = 'column' | 'row';

const {Instagram, Telegram, TikTok, Youtube, Facebook} = MediaIcons;

export const InstagramSVG = styled(Instagram)`
  width: 15px;
  height: 15px;

  path {
    fill: ${({theme}) => theme.colors.common.jordyBlue};
  }
`;

export const TelegramSVG = styled(Telegram)`
  width: 15px;
  height: 15px;

  path {
    fill: ${({theme}) => theme.colors.common.jordyBlue};
  }
`;

export const TikTokSVG = styled(TikTok)`
  width: 15px;
  height: 15px;

  path {
    fill: ${({theme}) => theme.colors.common.jordyBlue};
  }
`;

export const YoutubeSVG = styled(Youtube)`
  width: 15px;
  height: 15px;

  path {
    fill: ${({theme}) => theme.colors.common.jordyBlue};
  }
`;

export const FacebookSVG = styled(Facebook)`
  width: 15px;
  height: 15px;

  path {
    fill: ${({theme}) => theme.colors.common.jordyBlue};
  }
`;

export const icons: any[] = [
  {
    component: TikTokSVG,
    link: 'https://www.tiktok.com/@woman_insight',
  },
  {
    component: TelegramSVG,
    link: 'https://t.me/womaninsightBot',
  },
  {
    component: FacebookSVG,
    link: 'https://www.facebook.com/womaninsightclub/',
  },
  {
    component: InstagramSVG,
    link: 'https://www.instagram.com/woman_insight/',
  },
  {
    component: YoutubeSVG,
    link: 'https://www.youtube.com/c/kerymova_WOMANINSIGHT',
  },
];

export const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 10px;
  line-height: 1.2;
  max-width: ${BREAKPOINT_CONTAINER}px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0 11px;
  background-color: #fff;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -10px;
    width: 10px;
    height: 100%;
    background-color: #fff;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: -10px;
    width: 10px;
    height: 100%;
    background-color: #fff;
  }

  ${media.greaterThan('md')`
      background-color: transparent;
      
       &::after,
       &::before {
         display: none;
  `}

  ${media.greaterThan('xl')`
     margin-bottom: 30px;
     padding-top: 25px;
  `}
`;

export const PersonInfo = styled.div<{noAccess?: boolean}>`
  width: 90%;
  background: #fff;
  border-radius: ${({noAccess}) => (noAccess ? '5px 5px 0 0' : '5px')};
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PersonInfoWrapper = styled.div<{noAccess?: boolean}>`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: ${({noAccess}) => (noAccess ? '0' : '25px')};
`;

export const NavigationsItemsWrapper = styled.div<{active?: boolean}>`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  background: ${({active}) => (active ? '#516FF6' : '#fff')};
`;

export const NavItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 15px;
  flex: 1;
  margin-right: 20px;
`;

export const PhotoWrapperMobile = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  img {
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const PersonInfoWrap = styled.div`
  max-width: 125px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  font-size: 14px;
  column-gap: 20px;

  ${media.greaterThan('md')`
      column-gap: 30px;
  `}
`;

export const Arrow = styled(ArrowIcon)`
  position: absolute;
  height: 12px;
  width: 6px;
  top: 5px;
  left: 10px;

  path {
    stroke: ${({theme}) => theme.colors.common.blueberry};
  }
`;

export const Link = styled.a<{
  line?: number;
  weight?: number;
  fz?: number;
  paddingHeight?: number;
  arrow?: boolean;
  color?: string;
}>`
  display: block;
  width: 100%;
  font-size: ${({fz}) => fz || 14}px;
  font-weight: ${({weight}) => weight || 600};
  color: ${({theme, color}) => color || theme.colors.common.jordyBlue};
  border-bottom: ${({line}) => line || 0}px solid
    ${({theme, color}) => color || theme.colors.common.jordyBlue};
  padding: ${({paddingHeight}) => paddingHeight || 0}px 0;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  line-height: 1;

  ${media.greaterThan('xl')`
      text-align: left;
  `}
`;

export const Button = styled.a<{width?: number; mini?: boolean}>`
  color: ${({theme, mini}) =>
    mini ? '#516FF6' : theme.colors.common.jordyBlue};
  border: 1px solid ${({theme}) => theme.colors.common.jordyBlue};
  border-radius: 5px;
  padding: ${({mini}) => (mini ? '10px 35px' : '10px 20px')};
  display: ${({mini}) => (mini ? 'unset' : 'inline-block')};
  font-size: 14px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #516ff6;
    color: #fff;
    border: 1px solid #516ff6;
  }

  ${media.lessThan('sm')`
       width: 100%;
       max-width: 400px;
       background: #fff;
  `}
  ${media.greaterThan('md')`
       padding: 10px;
  `}
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  ${media.lessThan('sm')`
       padding: 30px 0;
  `}
  ${media.greaterThan('xl')`
       flex-direction: row;
       justify-content: space-between;
       align-items: start;
  `}
`;

export const Title = styled.h1<{noAccess?: boolean}>`
  font-weight: 600;
  margin: 0 0 5px;
  font-size: 28px;
  color: #516ff6;
  font-family: 'Gilroy-Medium', sans-serif;

  ${media.greaterThan('sm')`
    font-family: 'Gilroy-Bold', sans-serif;
    color: #131415;
    font-size: 65px;
  `}
  ${({noAccess}) => media.greaterThan('md')`
  font-size: ${noAccess ? '65px' : '100px'};
  `}
  ${media.greaterThan('xl')`
     text-align: left;
     padding-top: 0;
  `}
`;

export const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  font-family: 'Gilroy-Medium', sans-serif;
  margin: 0 0 25px;
  color: ${({theme}) => theme.colors.common.greyDark};

  ${media.greaterThan('sm')`
    font-weight: 600;
    font-size: 30px;
    font-family: 'Gilroy-Regular', sans-serif;
  `}
  ${media.greaterThan('xl')`
     margin: 0 0 60px 0;
     text-align: left;
  `}
`;

export const Paragraph = styled.p<{marginR?: number; noAccess?: boolean}>`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.greyDark};
  margin: 0 0 15px;
  text-align: center;
  color: #131415;
  font-family: 'Gilroy-Semibold', sans-serif;

  ${({noAccess}) => media.greaterThan('sm')`
    font-family: 'Gilroy-Medium', sans-serif;
    color: #697077;
    font-size: ${noAccess ? '14px' : '18px'};
    max-width: ${noAccess ? '80%' : '70%'};
  `}
  ${media.greaterThan('xl')`
     text-align: left;
  `}
`;

export const CaptionTitle = styled.h3`
  font-family: 'Gilroy-Semibold', sans-serif;
  color: ${({theme}) => theme.colors.common.black};
  font-size: 14px;
  margin: 0;
  line-height: 16px;
  text-align: left;

  ${media.greaterThan('sm')`
     font-size: 20px;
     font-weight: 700;
     margin: 15px 0 5px;
  `}
`;

export const ImagePersonWrapper = styled.div`
  max-width: 400px;
`;

export const CaptionSubtitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.greyDark};
  text-align: left;
  margin: 0 0 15px 0;

  ${media.lessThan('sm')`
     font-size: 10px;
     margin: 0;
     line-height: 12px;
  `}
`;

export const SupportTextWrapper = styled.div<{noAccess?: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  line-height: 21px;
  font-family: 'Gilroy-Semibold', sans-serif;

  ${media.lessThan('sm')`
    margin-bottom: 25px; 
    line-height: 16px;
  `}
`;

export const SupportText = styled.div`
  font-weight: 600;
  font-size: 18px;
  box-sizing: border-box;
  line-height: 21px;
  color: #131415;
  text-align: left;

  ${media.lessThan('sm')`
    width: 90%;
    font-size: 14px;
    text-align: center;
    padding: 10px 20px 20px;
    background: #fff;
    border-radius: 0 0 5px 5px;
    border-top: 1px solid #F4F6FA;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;
export const SupportTextInner = styled.div`
  margin: 0;

  ${media.lessThan('sm')`
     margin-bottom: 15px;
  `}
`;

export const SupportLink = styled.a`
  color: #516ff6;
`;

export const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  min-height: 50px;
  align-items: center;
  border-top: 0.5px solid ${({theme}) => theme.colors.common.greyLight};
`;

export const UList = styled.ul<{direction: ListDirectionType; $wrap?: boolean}>`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: ${({$wrap}) => ($wrap ? 'flex-start' : 'center')};
  flex-direction: ${({direction}) => direction};
  padding: 0;
  margin: 0;
  flex-wrap: ${({$wrap}) => ($wrap ? 'wrap' : 'nowrap')};
  gap: ${({$wrap}) => ($wrap ? '15px' : 'unset')};
  list-style-type: none;

  li:not(:last-child) ${Box} {
    margin-right: 50px;
  }

  ${media.lessThan('sm')`
     flex-direction: column;
     align-items: center;
  `}
`;

export const ListItem = styled.li<{marginB?: number}>`
  white-space: nowrap;
  margin-bottom: ${({marginB}) => marginB || 0}px;

  ${media.lessThan('sm')`
     display: flex;
     justify-content: center;
     width: 90%;
  `}
`;

export const ListItemSvg = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
`;

export const FooterText = styled.p`
  display: block;
  font-size: 10px;
  font-weight: 500;
  margin: 0 70px 0 0;
  padding-top: 5px;
  color: ${({theme}) => theme.colors.common.blueberry};

  &:last-child {
    margin: 0;
  }
`;
