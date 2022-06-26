import styled from 'styled-components';
import {media} from 'styles/media';

import {Text, Button} from 'styles/common';

export const Hero = styled.div<{imageWeb?: string; imageMob?: string}>`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    ${({imageMob}) =>
      imageMob ? `url(${imageMob})` : `url('/images/courses/test2.jpg')`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 2;
  width: 100vw;
  right: 10px;

  ${media.greaterThan('xs')`
    width: 100%;
    right: unset;
    border-radius: 5px;
    background-image: linear-gradient(
      90deg,
      #000000 0%,
      rgba(0, 0, 0, 0) 41.15%,
      rgba(0, 0, 0, 0) 47.92%,
      rgba(0, 0, 0, 0) 59.37%,
      #000000 100%
    ),
    
    ${({
      //@ts-ignore
      imageWeb,
    }) => (imageWeb ? `url(${imageWeb})` : `url('/images/courses/test2.jpg')`)};
  `};
`;

export const HeroInner = styled.div`
  padding: 10px 10px 30px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.greaterThan('xs')`
    padding: 20px;
    flex-direction: row;
    min-height: 350px;
  `}
`;

export const UsersCountWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  white-space: nowrap;

  ${media.greaterThan('xs')`
    position: static;
    margin-bottom: 20px;
  `}
`;

export const UsersCountLabel = styled.span<{ml?: number}>`
  display: block;
  font-size: 12px;
  color: #fff;
  font-weight: 500;
  line-height: 14px;
  margin-left: ${({ml}) => (ml ? `${ml}px` : '0')};

  & > b {
    color: #fff;
  }
  ${media.greaterThan('xs')`
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
  `}
`;

export const HeroHeader = styled.div`
  padding: 30px 0 60px;
  ${media.greaterThan('xs')`
    padding: 0;
    margin-right: 48px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    & > :last-child{
      margin-top: auto;
    }
  `}
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  line-height: 33px;
  margin: 0 0 10px;
  color: #fff;

  ${media.greaterThan('xs')`
      margin-top: 24px;
  `}
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  margin: 0;
  color: #fff;

  ${media.greaterThan('xs')`
      font-weight: 500;
  `}
`;

export const HeroFooter = styled.div`
  ${media.greaterThan('xs')`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `}
`;

export const AuthorsWrapper = styled.div`
  margin-bottom: 30px;
  ${media.greaterThan('xs')`
    margin-bottom: auto ;
  `}
`;

export const AuthorsHeading = styled(Text)`
  margin: 0 0 12px;
  color: #fff;
`;

export const AuthorsList = styled.div`
  & > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const HeroButton = styled(Button)`
  min-width: 160px;
  margin: 0 auto;
  position: relative;

  ${media.greaterThan('xs')`
    margin: 0;
  `}
`;

export const ProgressWrapper = styled.div`
  ${media.greaterThan('xs')`
    margin: 0;  
  `}
`;

export const ThreadListWrapper = styled.div`
  position: absolute;
  top: 38px;
  left: 0;
  width: 160px;
  border-radius: 5px;
  box-shadow: 0 0 15px 0 rgb(0 0 0 / 20%);
  background: white;
`;

export const ThreadList = styled.div``;

export const ThreadItem = styled(Text)<{isSelected: boolean}>`
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  color: ${({theme}) => theme.colors.common.black};
  word-break: break-word;

  &:hover {
    background: ${({theme}) => theme.colors.common.blueCloud};
  }

  ${({isSelected, theme}) =>
    isSelected &&
    `
      color: #fff;
      background: ${theme.colors.common.blueberryMiddle};
      
      &:hover {
        background: ${theme.colors.common.blueberryMiddle};
      }
  `}
`;
