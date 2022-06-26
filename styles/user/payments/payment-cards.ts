import styled from 'styled-components';
import {media} from 'styles/media';
import MasterCard from 'public/icons/MasterCard.svg';
import Visa from 'public/icons/Visa.svg';

export const CardsWrapper = styled.div`
  background-color: ${({theme}) => theme.colors.common.white};
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 30px;

  ${media.greaterThan('sm')`
    padding: 30px 30px 20px 30px;
    margin-bottom: 50px;
  `}
`;

export const BlockTitle = styled.h2<{mb: number}>`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
  color: ${({theme}) => theme.colors.common.black};
  margin: 0 0 25px 0;

  ${({mb}) => media.greaterThan('sm')`
    font-size: 20px;
    margin-bottom: ${`${mb}px`};
  `}
`;

export const BlockText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  color: ${({theme}) => theme.colors.common.greyDark};
  margin: 0 0 40px 0;
`;

export const CardContainer = styled.div`
  display: flex;
`;

export const Card = styled.div`
  width: 40px;
  height: 25px;
  background-color: ${({theme}) => theme.colors.common.blueberryLight};
  border-radius: 5px;
  padding: 4px 5px;
  margin-right: 8px;
`;

export const MasterCardSVG = styled(MasterCard)``;
export const VisaSVG = styled(Visa)`
  padding: 4px 0;
`;

export const CardWrapper = styled.div`
  & > * {
    margin-bottom: 30px;
  }
`;
export const CardData = styled.div`
  display: flex;
  align-items: center;
  min-width: 192px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: ${({theme}) => theme.colors.common.whiteGrey};
  }
`;

export const CardTitle = styled.h3<{isActive?: boolean}>`
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: ${({theme, isActive}) =>
    isActive ? theme.colors.common.black : theme.colors.common.greyDark};
  margin: 0;

  ${media.greaterThan('md')`
    font-size: 16px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.common.blueberry};
  `}
`;

export const DeleteButton = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.common.red};

  ${media.greaterThan('md')`
    padding: 5px;
    margin-top: 15px;
  `}
`;

export const CardSectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 15px;
`;

export const BigCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  width: 200px;
  height: 120px;
  padding: 22px 37px 10px 23px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.common.blueberryLight};
  transition: 0.1s ease-in;

  &:hover {
    background-color: ${({theme}) => theme.colors.common.blueberry};
  }

  &:hover ${CardTitle} {
    color: ${({theme}) => theme.colors.common.white};
  }
`;

export const BigMasterSVG = styled(MasterCard)`
  align-self: end;
  flex-basis: 23px;
`;
export const BigVisaSVG = styled(Visa)`
  align-self: end;
  flex-basis: 15px;
`;
