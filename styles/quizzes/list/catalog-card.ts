import NextImage from 'next/image';
import styled from 'styled-components';
import {media} from 'styles/media';

import {Widget as UIWidget} from 'styles/common';

export const Header = styled.div`
  margin-bottom: 15px;
  ${media.greaterThan('xs')`
    margin-bottom: 20px;    
  `};
`;

export const Content = styled.div`
  margin-bottom: 24px;
  position: relative;

  & > :not(:last-child) {
    margin-bottom: 10px;
  }

  &::after {
    content: '';
    position: absolute;
    height: 1px;
    left: 0;
    right: 0;
    bottom: -11px;
    background-color: ${({theme}) => theme.colors.common.blueberryLight};
  }
  ${media.greaterThan('xs')`
    &::after{
      display: none;
    }
  `};
`;

export const Footer = styled.div<{$isDone: boolean}>`
  display: flex;
  ${({$isDone}) =>
    $isDone
      ? `
        flex-direction: column;
        `
      : `
        align-items:center;
        justify-content: space-between;
        & > *{
          flex: 1;
        }
      `}

  ${media.greaterThan('xs')`
    display: block;
    margin-top: auto;
  `};
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Image = styled(NextImage)`
  border-radius: 5px;
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
  right: 10px;
  bottom: 10px;
`;

export const UserCountWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 5px;
  bottom: 5px;
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

export const MetaDataWrapper = styled.div<{$isDone?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  & > * {
    display: flex;
    align-items: center;
  }
  ${({$isDone}) =>
    !$isDone &&
    `
    margin: 0 20px 0 0;
    flex-direction: column;
    align-items: flex-start;
    
    & > :first-child{
      margin: 0 0 15px;
    }
  `}
  ${media.greaterThan('xs')`
    flex-direction: row;
    align-items: center;
    margin: 0 0 40px;
     & > :first-child{
      margin: 0;
    }
  `};
`;

export const IconLabel = styled.div`
  font-size: 12px;
  margin-left: 5px;
  color: ${({theme}) => theme.colors.common.greyDark};
  font-weight: 500;
  line-height: 14.5px;
  flex: none;

  & > b {
    color: ${({theme}) => theme.colors.common.greyDark};
  }

  ${media.greaterThan('xs')`
    margin-left: 10px;
  `};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > * {
    flex: 1;
  }
  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;
