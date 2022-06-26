import styled from 'styled-components';
import {media} from 'styles/media';

import LockSVG from 'public/icons/LockSVG.svg';
import AccordionArrowSVG from 'public/icons/AccordionArrowSVG.svg';

export const LockedCard = styled.div`
  padding: 20px 10px;
  background-color: ${({theme}) => theme.colors.common.blueberryLight};
  display: flex;
  ${media.greaterThan('xs')`
    align-items: center;
    padding: 30px 20px;
  `};
`;

export const LockIcon = styled(LockSVG)`
  width: 25px;
  height: 30px;
  flex: none;
  margin-right: 15px;
  ${media.greaterThan('xs')`
  width: 30px;
  height: 35px;
  margin-right: 20px;
  `}
`;

export const LockedContent = styled.div`
  ${media.greaterThan('xs')`
    display: flex;
    align-items: center;
  `}
`;

export const LockedDescription = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 30px;
  ${media.greaterThan('xs')`
    font-size: 16px;
    font-weight: 500;
    margin: 0 15px 0 0;
  `}
`;

export const StyledLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  color: ${({theme}) => theme.colors.primary};
  border-bottom: ${({theme}) => `1px solid ${theme.colors.primary}`};
  ${media.greaterThan('xs')`
    font-weight: 500;
    flex: none;
    margin-right: 30px;
  `}
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
