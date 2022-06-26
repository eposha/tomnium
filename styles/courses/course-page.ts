import styled, {css} from 'styled-components';
import {media} from 'styles/media';

import {Text, Button, Widget} from 'styles/common';

export const Wrapper = styled.div`
  padding-top: 30px;

  ${media.greaterThan('xs')`
    padding: 40px 0 80px;
    display: grid;
    grid-template-columns: 180px minmax(640px, 980px);
    gap: 20px;
  `};
`;

export const ProgressWrapper = styled.div`
  margin-bottom: 30px;
`;

export const BannerBottomLabel = styled.div`
  background: ${({theme}) => theme.colors.common.blueberryLight};
  border-radius: 5px;
  color: ${({theme}) => theme.colors.common.blueberry};
  font-size: 12px;
  font-weight: 500;
  padding: 20px 10px 15px;
  position: relative;
  right: 10px;
  top: -5px;
  width: 100vw;
  z-index: 1;
  ${media.greaterThan('xs')`
    width: 100%;
    right: unset;
    padding: 15px 20px 10px;
    font-size: 14px;
    font-weight: 600;
  `};
`;

export const Main = styled.main`
  padding-top: 20px;
  ${media.greaterThan('xs')`
    padding-top: 10px;
  `}
`;

export const CarouselWrapper = styled.div`
  margin-bottom: 30px;
`;

export const CourseDetailsWrapper = styled.div`
  margin-bottom: 45px;

  & > :not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const ContentBlockWrapper = styled.div<{$isFlex?: boolean}>`
  flex: ${({$isFlex}) => ($isFlex ? '1' : 'unset')};
  margin: 0 0 25px;
`;

export const CourseTagsWrapper = styled.div<{$isRight?: boolean}>`
  display: flex;
  margin-bottom: 30px;
  width: 100%;
  order: -1;
  justify-content: space-around;

  & > :not(:last-child) {
    margin-right: 7px;
  }

  ${({$isRight}) =>
    media.greaterThan('xs')`
    flex-direction: column; 
    justify-content: flex-start;
    width: auto;
    order: unset;
    margin:${$isRight ? 0 : '0 50px'}; 
    order: ${$isRight && 2};
    & > :not(:last-child) {
      margin: 0 0 40px;
    } 
  `}
`;

export const CourseStructureWrapper = styled.div`
  margin-bottom: 30px;
  order: 1;
  ${media.greaterThan('xs')`
    width: calc(780 / 980 * 100%);
    max-width: 780px;
    display: flex;
    flex-direction: column;
    margin: 0 70px 50px 0;
  `}
`;

export const CourseStructureList = styled.div`
  background-color: #fff;
  border-radius: 10px;
  margin-left: -10px;
  overflow: hidden;
  width: 100vw;
  ${media.greaterThan('xs')`
    width: auto;
  `}
`;

export const ChatLabel = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChatThreadTitle = styled.span`
  color: ${({theme}) => theme.colors.common.greyLight};
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;

export const ChatList = styled.div`
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 30px;
`;

export const ChatItem = styled.a`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 15px;
    right: 15px;
    height: 1px;
    background-color: ${({theme}) => theme.colors.common.blueberryLight};
  }
`;

export const ChatItemContent = styled.div`
  margin-right: 20px;
`;

export const ChatLabelText = styled(Text)`
  display: flex;
  align-items: center;
  & > :last-child {
    margin-left: 10px;
  }
`;
export const ChatName = styled(Text)`
  color: ${({theme}) => theme.colors.common.greyDark};
  margin-bottom: 5px;
`;

export const ShowAllCss = css`
  background: #fff;
  border: none;
  color: ${({theme}: any) => theme.colors.primary};
  font-size: 12px;
  font-weight: 600;
  padding: 15px 15px 10px;
`;

export const ShowAllButton = styled(Button)`
  ${ShowAllCss};
`;

export const ShowAllLink = styled.a`
  ${ShowAllCss};
  display: block;
  text-align: center;
`;

export const ChatCounter = styled(Widget)<{$isActive?: boolean}>`
  background: ${({$isActive}) => ($isActive ? '#516FF6' : '#D3E2FF')};
  color: #fff;
  font-size: 10px;
  height: 20px;
  padding: 4px;
  min-width: 20px;
`;

export const TestimonialsWrapper = styled.div`
  margin-bottom: 60px;
`;

export const CourseGiftsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 380px));
  gap: 20px;
`;

export const FeedbackFormWrapper = styled.div`
  margin-bottom: 25px;
  ${media.greaterThan('xs')`
    margin-bottom: 55px;
  `}
`;

export const CourseContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
