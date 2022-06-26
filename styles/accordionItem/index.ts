import styled from 'styled-components';
import Image from 'next/image';
import {Text} from 'styles/common';
import {media} from 'styles/media';
import {TColors} from '../_variables';

interface ISize {
  size?: 'small' | 'middle' | 'large';
  isSub?: boolean;
}

export const Wrapper = styled.div<{background?: TColors; isActive?: boolean}>`
  background-color: ${({background, theme}) =>
    background ? theme.colors.common[background] : theme.colors.common.white};
  border-radius: 10px;
  border: ${({isActive}) => (isActive ? '1px solid #8BB3FF' : 'none')};
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #d3e2ff;
  }
`;

const getPadding = ({size}: ISize) => {
  switch (size) {
    case 'middle':
    case 'small':
      return '15px 10px';
    case 'large':
      return '15px 20px 10px 20px';
  }
};

export const Header = styled.div<ISize>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  padding: 15px 10px;
  font-family: 'Gilroy-Semibold';
  cursor: pointer;
  ${media.greaterThan<ISize>('xs')`
    padding: ${getPadding};
  `};
`;

export const Content = styled.div<{$isActive: boolean}>`
  transition: ${({$isActive}) =>
    !$isActive
      ? 'max-height 0.5s cubic-bezier(0, 1, 0, 1)'
      : 'max-height 1s linear'};
  max-height: ${({$isActive}) => ($isActive ? '1000px' : 0)};
  overflow: hidden;
`;

export const ArrowContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  flex: 0 0 30px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.common.whiteGrey};
`;

export const StyledArrow = styled(Image)<{$isActive: boolean}>`
  transition: all 0.35s ease;
  transform: ${({$isActive}) => $isActive && 'rotate(180deg)'};
`;

export const StyledText = styled(Text)<ISize>`
  border-top: ${({theme}) => `1px solid ${theme.colors.common.greyLight}`};
  font-weight: 500;
  padding-top: ${({isSub}) => (isSub ? '0' : '8px')};
  color: #697077;
  ${({isSub}) =>
    isSub &&
    `
    font-size: 12px!important;
    color: #697077;
    font-family: 'Gilroy-Regular';
    border: none;
  `}
  ${media.greaterThan<ISize>('xs')`
    font-size: ${({size}) => (size === 'middle' ? '14px' : '16px')};
    line-height: ${({size}) => (size === 'middle' ? '110%' : '19px')};
  `};
`;

export const ContentInner = styled.div`
  padding: 0 10px 10px;

  ${media.greaterThan('xs')`
    padding: 0 20px 20px;
  `}
`;
