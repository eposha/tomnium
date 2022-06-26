import Currency from '@/public/icons/CurrencySVG.svg';
import styled from 'styled-components';
import {media} from '../media';

import {Button, Widget} from 'styles/common';

export const Container = styled.div<{flex?: boolean; centered?: boolean}>`
  display: ${({flex}) => (flex ? 'flex' : 'block')};
  align-items: ${({centered}) => (centered ? 'center' : 'unset')};
`;

export const PageWrapper = styled.div`
  margin-top: 20px;
  ${media.greaterThan('xs')`
    margin-top: 0;
  `};

  ${({theme}) => media.greaterThan('md')`
    padding: 0 40px 40px 40px;
    margin-top: 0;
    background-color: ${theme.colors.common.white};
  `};
`;

export const PurchasesContainer = styled.div`
  ${media.greaterThan('lg')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items:center;
`};
`;

export const PageTitleWrapper = styled.div`
  line-height: 1.2;
  background-color: ${({theme}) => theme.colors.common.white};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 15px 15px 10px;
  position: relative;

  ${media.greaterThan('md')`
    padding: 15px 0 10px;
  `};
`;

export const PageTitle = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.black};
  margin: 0 0 10px 0;

  ${media.greaterThan('md')`
    font-size: 28px;
  `};
`;

export const PageSubtitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.black};
  margin: 30px 0 20px 0;
`;

export const PageText = styled.p`
  max-width: 500px;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.greyDark};
  margin: 0;

  ${media.greaterThan('md')`
    font-size: 16px;
    margin: 0 0 10px 0;
  `};
`;

export const PageLink = styled.a`
  position: absolute;
  font-size: 10px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.blueberry};
  text-decoration: underline;
  top: 18px;
  right: 15px;
`;

export const PurchaseContainer = styled.article`
  background-color: ${({theme}) => theme.colors.common.white};
  border-radius: 5px;
  padding: 10px;
  position: relative;

  ${({theme}) => media.greaterThan('md')`
    padding: 15px;
    background-color: ${theme.colors.common.whiteGrey};
  `};

  &:not(:last-child) {
    margin-bottom: 20px;

    ${media.greaterThan('lg')`
    margin-bottom: 0;
`};
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;

  & > span {
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }

  ${media.greaterThan('md')`
    margin: 0 10px 0 0;
    width: 140px;
    height: 100px;
  `};
`;

export const PurchaseTitle = styled.h2`
  max-height: 30px;
  font-size: 14px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.black};
  margin: 0 0 10px 0;
  overflow: hidden;
  padding-right: 30px;
`;

export const PurchaseText = styled.p`
  max-height: 45px;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.greyDark};
  margin: 0 0 20px 0;
  overflow: hidden;

  ${media.greaterThan('md')`
    margin: 0;
  `};
`;

export const CurrencySVG = styled(Currency)`
  height: 18px;
  width: 18px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;

  ${media.greaterThan('md')`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `};
`;

export const PurchasePrice = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.black};
  padding-left: 25px;
  position: relative;
  margin-bottom: 20px;

  ${CurrencySVG} {
    position: absolute;
    left: 0;
  }

  ${media.greaterThan('md')`
    margin-bottom: 0;
  `};
`;

export const PurchaseButton = styled(Button)`
  width: 100%;
  ${media.greaterThan('md')`
    width: 160px;
  `};
`;

export const PurchaseMenu = styled.ul`
  position: absolute;
  display: flex;
  padding: 10px;
  top: 0;
  right: 5px;
  cursor: pointer;

  ${media.greaterThan('md')`
    top: 10px;
    right: 10px;
  `};
`;

export const PurchaseMenuItem = styled.li`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.common.jordyBlue};

  &:not(:last-child) {
    margin-right: 2px;
  }
`;

export const PurchaseMenuContainer = styled.div`
  position: absolute;
  min-width: 185px;
  top: 0;
  right: -5px;
  background-color: ${({theme}) => theme.colors.common.white};
  border-radius: 5px;
  padding: 15px 0;

  ${media.greaterThan('md')`
    top: 15px;
    right: 5px;
  `};
`;

export const PurchaseMenuText = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.jordyBlue};
  margin: 0;
  padding: 0 38px 0 15px;
`;

export const PurchaseMenuButton = styled.button<{color?: string}>`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.red};
  margin: 0;
  padding: 0 38px 0 15px;
`;

export const PurchaseMenuDivider = styled.div<{color?: string}>`
  width: 100%;
  height: 1px;
  margin: 10px 0;
  background-color: ${({theme, color}) =>
    color ? theme.colors.common[color] : theme.colors.common.whiteGrey};
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StatusContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  align-items: center;

  ${media.greaterThan('md')`
    margin-bottom: 5px;
  `};
`;

export const PurchaseStatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.greaterThan('md')`
    margin-bottom: 5px;
    flex-direction: row;
  `};
`;

export const PurchaseStatusText = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.greyDark};
  display: inline-block;
  margin-bottom: 5px;

  ${media.greaterThan('md')`
    margin: 0 5px 0 0;
  `};
`;

export const PurchaseStatusWidget = styled(Widget)`
  height: 20px;
  font-size: 12px;
  font-weight: 700;
  width: 100%;

  ${media.greaterThan('md')`
    width: auto;
  `};
`;
