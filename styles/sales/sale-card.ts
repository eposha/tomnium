import styled, {css} from 'styled-components';
import {media} from 'styles/media';
import CurrencySVG from 'public/icons/CurrencySVG.svg';

const oneLinerEllipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const manyLinerEllipsis = css`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const SalePageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan('xs')`
  padding: 20px 0 15px;
  `};
`;

export const SaleCardContainer = styled.div<{imageWeb?: string}>`
  min-height: 375px;
  padding: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: ${({theme}) => theme.colors.common.white};
  border-radius: 5px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  ${({imageWeb}) => media.greaterThan('sm')`
      background-image: ${
        imageWeb ? `url(${imageWeb})` : `url('/images/courses/test2.jpg')`
      };
      padding: 30px;

      &:not(:last-child) {
        margin-bottom: 30px;
      }
    `};
`;

export const SaleImageWrapper = styled.div<{imageMob?: string}>`
  width: 100%;
  height: 160px;
  margin-bottom: 20px;
  background-image: ${({imageMob}) =>
    imageMob ? `url(${imageMob})` : `url('/images/courses/test2.jpg')`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  position: relative;
`;

export const SaleLabel = styled.span`
  ${oneLinerEllipsis};
  display: inline-block;
  max-width: 50%;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.2;
  padding: 7.5px 10px;
  color: ${({theme}) => theme.colors.common.white};
  background-color: ${({theme}) => theme.colors.common.red};
  border-radius: 5px;
  position: absolute;
  top: -15px;
  left: -15px;
`;

export const SaleLabelBig = styled.span`
  ${oneLinerEllipsis};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  color: ${({theme}) => theme.colors.common.white};
  border-radius: 5px;
  border: 1px solid ${({theme}) => theme.colors.common.white};
  background-color: transparent;
  margin-right: 10px;
  padding: 7.5px 10px;
`;

export const SaleTitle = styled.h2`
  ${oneLinerEllipsis};
  font-size: 12px;
  line-height: 1.2;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.black};
  margin-bottom: 10px;

  ${media.greaterThan('sm')`
    font-size: 28px;
    color: ${({theme}) => theme.colors.common.white};
    margin-bottom: 15px;
  `};
`;

export const SaleText = styled.p`
  ${manyLinerEllipsis};
  min-height: 45px;
  font-size: 12px;
  line-height: 1.2;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.greyDark};
  margin: 0 0 20px 0;

  ${media.greaterThan('sm')`
    color: ${({theme}) => theme.colors.common.white};
    opacity: .75;
    margin-bottom: 15px;
  `};
`;

export const SalePriceContainer = styled.div`
  ${oneLinerEllipsis};
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.black};
  padding-top: 10px;
  margin-bottom: 20px;

  ${media.greaterThan('sm')`
    margin-bottom: 10px;
  `};
`;

export const SalePriceCurrency = styled(CurrencySVG)`
  height: 17px;
  flex: 0 0 17px;
  margin-right: 6.5px;

  ${media.greaterThan('sm')`
    path {
      stroke: ${({theme}) => theme.colors.common.white};
    }
  `};
`;

export const SalePrice = styled.span`
  display: inline-block;
  max-width: 115px;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.black};
  position: relative;

  ${media.greaterThan('sm')`
    color: ${({theme}) => theme.colors.common.white};
  `};
`;

export const SaleOldPrice = styled.span`
  font-size: 12px;
  line-height: 1;
  font-weight: 700;
  top: -10px;
  right: 0;
  color: ${({theme}) => theme.colors.common.greyDark};
  position: absolute;

  ${media.greaterThan('sm')`
    color: ${({theme}) => theme.colors.common.white};
    opacity: .5;
  `};
`;

export const SaleFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const SaleButton = styled.a`
  ${oneLinerEllipsis}
  max-width: 110px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  color: ${({theme}) => theme.colors.common.white};
  background-color: ${({theme}) => theme.colors.common.blueberry};
  border-radius: 5px;
  padding: 10px;

  ${media.greaterThan('sm')`
    display: block;
    color: ${({theme}) => theme.colors.common.white};
    background-color: transparent;
    border: 1px solid ${({theme}) => theme.colors.common.white};
    max-width: 100%;
  `};
`;

export const SaleDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.greaterThan('sm')`
    border: 1px solid ${({theme}) => theme.colors.common.white};
    border-radius: 5px;
    display: inline-block;
    width: fit-content;
    padding-right: 10px;
    position: relative;
  `};
`;

export const SaleDateText = styled.span`
  display: inline-block;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.black};
  border-radius: 5px;
  padding: 10px;
  white-space: nowrap;

  ${media.greaterThan('sm')`
    color: ${({theme}) => theme.colors.common.white};
  `};
`;

export const SaleDateLabel = styled.span`
  display: inline-block;
  text-align: center;
  min-width: 65px;
  font-size: 12px;
  line-height: 1.2;
  font-weight: 700;
  color: ${({theme}) => theme.colors.common.blueberry};
  background-color: ${({theme}) => theme.colors.common.blueberryLight};
  border-radius: 20px;
  padding: 5px 10px;

  ${media.greaterThan('sm')`
    color: ${({theme}) => theme.colors.common.white};
    background-color: transparent;
    padding: 0;
    min-width: fit-content;
  `};
`;

export const Container = styled.div<{mb?: number}>`
  margin-bottom: ${({mb}) => (mb ? `${mb}px` : 0)};
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  min-height: 320px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  max-width: 515px;
  width: 100%;
`;

export const FlexEnd = styled.div`
  align-self: flex-end;
  max-width: 160px;
  width: 100%;
`;

export const SalePageTitle = styled.h2`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.black};
  margin: 0 0 20px 0;

  ${media.greaterThan('sm')`
  font-size: 20px;
  margin: 0 0 30px 0;
  `}
`;
