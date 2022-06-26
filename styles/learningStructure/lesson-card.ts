import styled, {css} from 'styled-components';
import {media} from 'styles/media';
import {Text} from 'styles/common';

const cardDashedLineStyles = css`
  content: '';
  position: absolute;
  width: 1px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23D3E2FFFF' stroke-width='1' stroke-dasharray='1' stroke-dashoffset='1' stroke-linecap='butt'/%3e%3c/svg%3e");
  left: calc(50% - 1px);
  z-index: 1;
  ${media.greaterThan('xs')`
    left: 50%;
  `}
`;

export const SubNumberLabel = styled.div`
  min-width: 15px;
  height: 15px;
  font-size: 7px;
  line-height: 15px;
  position: relative;
  border-radius: 50%;
  padding: 0;
  background-color: ${({theme}) => theme.colors.common.whiteGrey};
  color: ${({theme}) => theme.colors.common.blueLight};
  text-align: center;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    ${cardDashedLineStyles};
    top: -500px;
    bottom: 15px;
  }
  &::after {
    ${cardDashedLineStyles};
    top: 15px;
    bottom: -500px;
  }
  ${media.greaterThan('xs')`
    min-width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    font-weight: 600;
    &:before {
      bottom: 30px;
    }
    &::after {
      top: 30px;
    }
  `}
`;

export const LessonCard = styled.div`
  padding: 15px 10px;

  &:not(:nth-child(2)) {
    overflow: hidden;
  }

  ${media.greaterThan('xs')`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    flex-wrap: wrap;

    &:first-child {
        &::before {
        visibility: hidden;
      }
    }

    &::before{
      content: '';
      position: absolute;
      bottom: 0;
      left: 70px;
      right: 35px;
      height: 1px;
      background: #F4F6FA;
    }
  `}
`;

export const LessonTitleWrapper = styled.div`
  display: flex;
  flex: 1;
  padding-left: 3px;
  margin-bottom: 10px;
  & > :first-child {
    margin-right: 10px;
  }
  ${media.greaterThan('xs')`
    margin: 0;
    padding: 0;
    & > :first-child {
      margin-right: 20px;
    }
  `}
`;
export const LessonTitle = styled(Text)`
  font-family: 'Gilroy-Medium';

  ${media.greaterThan('xs')`
    font-weight: 600;
    line-height: 19px;
    font-size: 16px;
  `}
`;

export const LessonDescription = styled(Text)`
  padding-left: 28px;
  color: #697077;
  ${media.greaterThan('xs')`
    padding-left: 50px;
    margin-bottom: 25px;
  `}
`;

export const LessonContent = styled.div`
  margin-bottom: 15px;
  ${media.greaterThan('xs')`
    flex-basis: 425px;
    margin: 0 20px 0 0;
  `}
`;

export const ProgressWrapper = styled.div`
  padding-left: 28px;
  ${media.greaterThan('xs')`
    padding-left: 50px;
    flex-basis: 425px;
  `}
`;

export const HomeworksListWrapper = styled.div`
  padding-left: 28px;
  margin-bottom: 10px;

  ${media.greaterThan('xs')`
    padding: 0;
    min-width: 160px;
  `}
`;
