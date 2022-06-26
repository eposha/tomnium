import styled from 'styled-components';
import {media} from 'styles/media';
import AccordionArrowSVG from 'public/icons/AccordionArrowSVG.svg';

import { NumberLabel } from 'styles/learningStructure/module-title';

export const Header = styled.div`
  padding: 15px 10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  ${media.greaterThan('xs')`
    padding: 30px 20px 20px;

    &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 70px;
    right: 35px;
    height: 1px;
    background: #F4F6FA;
  }
  `};
`;

export const Item = styled.div`
  &:first-child {
    ${NumberLabel} {
      &::before {
        visibility: hidden;
      }
    }
  }
  &:last-child {
    ${NumberLabel} {
      &::after {
        visibility: hidden;
      }
    }
  }
`;


export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ArrowContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.common.whiteGrey};
`;

export const Arrow = styled(AccordionArrowSVG)<{$isActive: boolean}>`
  width: 12px;
  height: 7px;
  transition: all 0.2s ease-in-out;
  transform: ${({$isActive}) => $isActive && 'rotate(-90deg)'};
`;

export const TitleWrapper = styled.div`
  margin-right: 10px;
  flex: 1;
`;

export const Content = styled.div<{
  $isActive?: boolean;
  $isExpandable?: boolean;
}>`
  transition: ${({$isActive}) =>
    !$isActive
      ? 'max-height 0.5s cubic-bezier(0, 1, 0, 1)'
      : 'max-height 1s linear'};
  max-height: ${({$isActive}) => ($isActive ? '2000px' : 0)};
  max-height: ${({$isExpandable}) => !$isExpandable && '2000px'};
  overflow: hidden;
`;
