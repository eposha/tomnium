import NextImage from 'next/image';
import styled from 'styled-components';
import {media} from 'styles/media';

export const Photo = styled.img<{left?: number; zIndex?: number}>`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: ${({left}) => (left ? `${left}px` : '0')};
  border-radius: 50%;
  z-index: ${({zIndex}) => (zIndex ? zIndex : '0')};
`;

export const UserPhoto = styled(Photo).attrs(({src}) => ({
  src,
}))``;

export const UserContainer = styled.div`
  display: none;

  ${media.greaterThan('md')`
    display: block;
    width: 180px;
    height: 190px;
    text-align: center;
    padding: 18px 24px 14px;
    background-color: ${({theme}) => theme.colors.common.white};
    border-radius: 5px;
  `}
`;

export const Image = styled.img.attrs(({src}) => ({src}))``;

export const AvatarWrapper = styled.div`
  margin-bottom: 10px;
`;

export const Avatar = styled(NextImage)`
  border-radius: 50%;
`;

export const UserPicture = styled(Image)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const UserSmallPicture = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const UserName = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Status = styled.span`
  display: inline-block;
  padding: 3px 14px 3px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 20px;
  color: ${({theme}) => theme.colors.common.blueberry};
  background-color: ${({theme}) => theme.colors.common.blueberryLight};
`;

export const FixedBox = styled.div`
  top: 0;
  right: 0;
  position: absolute;
`;

export const StatusLabel = styled.span<{color?: string; bgc?: string}>`
  display: inline-block;
  padding: 3px 6px;
  font-size: 8px;
  font-weight: 600;
  border-radius: 20px;
  color: ${({theme}) => theme.colors.common.white};
  background-color: ${({theme}) => theme.colors.common.blueberry};
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
