import Image from 'next/image';

import styled from 'styled-components';

import {media} from 'styles/media';

export const DocumentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;

  background: #ffffff;
  border-radius: 5px;

  ${media.greaterThan('xs')`
    margin-bottom: 20px;
    padding: 20px;
    max-width: 480px;
  `}
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
`;

export const TimeDataInfo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  margin-bottom: 15px;
  font-size: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const IconsGroupWrapper = styled.div<{
  width: number;
  height: number;
  margin?: string;
}>`
  position: relative;
  display: flex;
  margin: ${({margin}) => margin ?? '0'};
  width: ${({width}) => width + 'px'};
  height: ${({height}) => height + 'px'};
`;

export const IconsGroupItem = styled.div<{
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  width: number;
  height: number;
  zIndex: number;
}>`
  position: absolute;
  top: ${({top}) => (top ? `${top}px` : '0')};
  right: ${({right}) => (right ? `${right}px` : '0')};
  bottom: ${({bottom}) => (bottom ? `${bottom}px` : '0')};
  left: ${({left}) => (left ? `${left}px` : '0')};

  width: ${({width}) => width + 'px'};
  height: ${({height}) => height + 'px'};

  z-index: ${({zIndex}) => zIndex};

  border-radius: 50%;
  overflow: hidden;
`;

export const ImageWrapper = styled.div<{$isStock?: boolean}>`
  position: relative;
  width: 100%;
  height: 160px;
  border-radius: 5px;

  ${({$isStock}) =>
    $isStock
      ? media.greaterThan('xs')`  
  height: 130px;      
`
      : media.greaterThan('xs')`  
  height: 250px;      
`}
`;

export const ImageUI = styled(Image)`
  border-radius: 5px;
`;

export const Title = styled.div`
  margin-top: 15px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #131415;

  ${media.greaterThan('xs')`
    margin-top: 20px;
`}
`;

export const Description = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  line-height: 14px;
  color: #697077;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;

  ${media.greaterThan('xs')`
    flex-direction: row;
    justify-content: space-between;        
  `}
`;

export const Author = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const AuthorLogo = styled.div`
  position: relative;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;

export const AuthorNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AuthorName = styled.div`
  font-size: 14px;
  line-height: 140%;
  color: #131415;
`;

export const AuthorDescription = styled.div`
  font-size: 10px;
  line-height: 12px;
  color: #697077;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const TimeWrapper = styled.div`
  display: flex;

  ${media.greaterThan('xs')`
    display: none;
`}
`;

export const DesktopTimeWrapper = styled.div<{$stock?: boolean}>`
  display: none;

  ${({$stock}) =>
    $stock &&
    media.greaterThan('xs')`
        display: flex;
        flex-direction: column;
        justify-content: center;
`}
`;
export const Date = styled.div`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #131415;
`;

export const LinkUI = styled.a`
  width: 100%;
  height: 100%;
  color: #fff;
`;
