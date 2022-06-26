import NextImage from 'next/image';

import styled, {css} from 'styled-components';
import {media} from 'styles/media';
import {theme} from 'styles/theme';

const lineClampStyle = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;

function groupTranslateTop(value: number) {
  let styles = '';

  for (let i = 0; i < 10; i += 1) {
    styles += `
      &:nth-child(${i + 1}) {
        transform: translateY(-${value * i}px)
      }
     `;
  }

  return css`
    ${styles}
  `;
}

export const Wrapper = styled.div<{$isPartial?: boolean}>`
  background: #fff;
  border-radius: 5px;
  max-height: 500px;
  padding: 20px 15px 15px;

  ${media.greaterThan('xs')`
    display: flex;
    justify-content: center;
    max-height: 660px;
    padding: 45px 30px 30px;
    background-image: url(/images/quizzes/group-scheme-bg.svg);
    background-position: 62% center;
    background-repeat: no-repeat;

    ${
      //@ts-ignore
      ({$isPartial}) =>
        $isPartial &&
        `
          max-width: 660px;
          background-position: 90% center;
        `
    }

  `};
`;

export const Inner = styled.div`
  ${media.greaterThan('xs')`
    max-width: 550px;
  `};
`;

export const GroupImageWrapper = styled.div<{$isActive?: boolean}>`
  width: 70px;
  height: 70px;
  position: relative;
  flex: none;

  ${({$isActive}) =>
    $isActive &&
    `
      z-index: 2;
    `}

  ${media.greaterThan('xs')`
    width: 90px;
    height: 90px;
  `};
`;

export const GroupImage = styled(NextImage)`
  position: absolute;
  z-index: 1;
`;

export const GroupContent = styled.div`
  flex: 1;

  ${media.greaterThan('xs')`
    height: 105px;
    padding-top: 10px;
  `};
`;

export const GroupTitle = styled.h3<{$isActive?: boolean}>`
  font-size: 12px;
  font-weight: 500;
  line-height: 115%;
  margin: 0 0 15px;
  position: relative;
  color: ${({theme}) => theme.colors.common.greyDark};

  ${lineClampStyle}
  -webkit-line-clamp: 1;

  ${({$isActive, theme}) =>
    $isActive &&
    `
      color: ${theme.colors.primary};
      font-size: 14px;
      font-weight: 600;
    `}

  ${media.greaterThan('xs')`
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 20px;
    -webkit-line-clamp: 2;
    
    ${
      //@ts-ignore
      ({$isActive}) =>
        $isActive &&
        `
          font-size: 18px;
        `
    }
  `};
`;

export const Line = styled.div<{$isActive?: boolean}>`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    left: -20px;
    bottom: 7px;
    height: 1px;
    background-color: ${theme.colors.primary};
    visibility: hidden;
  }

  ${({$isActive}) =>
    $isActive &&
    `
      &::after {
        visibility: visible;
      }
    `}

  ${media.greaterThan('xs')`
    &::after{
      bottom: 10px;
      visibility: visible;
    }
  `};
`;

export const GroupDescription = styled.p<{$isActive?: boolean}>`
  font-size: 10px;
  font-weight: 500;
  line-height: 115%;
  margin: 0;

  ${lineClampStyle}
  -webkit-line-clamp: 3;

  ${({$isActive}) =>
    !$isActive &&
    `
    display: none;
    `}

  ${media.greaterThan('xs')`
    font-size: 12px;
    -webkit-line-clamp: 4;

    ${
      //@ts-ignore
      ({$isActive, theme}) =>
        !$isActive &&
        `
          color: ${theme.colors.common.greyLight};
          display: -webkit-box;
        `
    }
  `};
`;

export const Group = styled.div<{$isActive?: boolean}>`
  display: flex;
  overflow: hidden;
  text-align: right;

  ${groupTranslateTop(5)}

  & > :first-child {
    margin-right: 15px;
  }

  ${({$isActive}) =>
    !$isActive &&
    `
      align-items: center;
    `}

  ${media.greaterThan('xs')`
    max-width: calc(320 / 550 * 100%) ;
    align-items: unset;

    ${groupTranslateTop(25)}

    &:nth-child(odd){
      text-align: left;

      & ${Line}{
        &::after{
          right: -20px;
        }
      }

      & ${GroupImageWrapper}{
        margin: 0 0 0 15px;
        order: 1;
      }
    }
    &:nth-child(even){
      margin-left: auto;
    }
  `};
`;

export const Block = styled.div`
  ${media.greaterThan('xs')`
    width: 480px;
    flex: 1;
  `};
`;
