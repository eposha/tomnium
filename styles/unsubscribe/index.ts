import {media} from '../media';

import styled, {css} from 'styled-components';
import {Button} from 'styles/common';

export const SubTitle = styled.div<{fontSize?: number}>`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #131415;
  margin-bottom: 7px;
  font-family: 'Gilroy-Semibold', sans-serif;

  ${media.greaterThan('sm')`
    font-size: 18px;
  `}
`;

export const AccordionTxt = styled.div<{mw?: number}>`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #697077;
  ${({mw}) => media.greaterThan('sm')`
    max-width: ${mw ? `${mw}px` : 'unset'};
  `}
`;

export const PageWrapper = styled.div`
  display: flex;
  padding: 20px 0 26px;

  ${media.greaterThan('sm')`
    padding: 30px 0 80px;
  `}
`;

export const PageInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  ${media.greaterThan('sm')`
    max-width: 980px;
    width: 100%;
  `}
`;

export const Wrapper = css`
  padding: 15px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const BlockWrapper = styled.div`
  ${Wrapper};
`;

export const ConfirmWrapper = styled.div`
  ${Wrapper};
  ${media.greaterThan('sm')`
    order: -1;
    padding: 30px;
    border-radius: 5px 5px 0 0;
  `}
`;

export const SupportWrapper = styled.div`
  ${Wrapper};
  ${media.greaterThan('sm')`
   display: flex;
   align-items: center;
   flex-direction: row-reverse;
   justify-content: flex-end;
   gap: 20px;
   margin-bottom: 40px;
   padding: 30px;
  `}
`;

export const SupportTextWrapper = styled.div`
  ${media.greaterThan('sm')`
   max-width: 400px;
   border-radius: 0 0 5px 5px;
 `}
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  ${media.greaterThan('sm')`
   gap: 0;
 `}
`;

export const ActionButton = styled(Button)`
  width: 100%;

  ${media.greaterThan('xs')`
    width: 160px;
  `}
`;

export const ButtonsWrapper = styled.div<{isWide?: boolean}>`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  margin-top: 10px;
  ${({isWide}) =>
    isWide &&
    `
      justify-content: space-between;
      margin: 15px 0;
  `}

  ${({isWide}) => media.greaterThan('sm')`
    display: flex;
    justify-content: ${isWide ? 'flex-start' : 'flex-end'};
    flex-direction: row-reverse;
    margin: 30px 0 0;
  `}

  & > .fresnel-container {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
`;

export const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FounderInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #f4f6fa;
  border: 1px solid #d3e2ff;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  margin: 6px 0 17px;

  ${media.greaterThan('sm')`
    width: 145px;
    flex-direction: column;
    padding: 20px 10px;
    margin: 0;
  `}
`;

export const ImgWrapper = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  ${media.greaterThan('sm')`
   width: 80px;
   height: 80px;
   min-width: 80px;
   min-height: 80px;
  `}
`;

export const FounderName = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  font-family: 'Gilroy-Semibold', sans-serif;
  color: #131415;

  ${media.greaterThan('sm')`
    text-align: center;
  `}
`;

export const FounderPosition = styled.div`
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;
  color: #697077;
  max-width: 125px;

  ${media.greaterThan('sm')`
    text-align: center;
    font-size: 9px;
  `}
`;

export const LinkBtn = styled.a<{name?: string}>`
  width: 100%;
  max-width: 130px;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d3e2ff;
  box-sizing: border-box;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #516ff6;
  align-self: center;
  margin: 0 auto;
  cursor: pointer;

  ${media.greaterThan('sm')`
    margin 15px 0 0;
    max-width: 160px;
  `}
`;
