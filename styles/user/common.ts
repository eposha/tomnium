import {media} from '../media';

import styled, {css} from 'styled-components';

export const CommonStyles = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const PageTitle = styled.h1`
  color: #131415;
  font-family: 'Gilroy-Medium', sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 33px;
  margin: 0;
  padding-left: 15px;
`;

export const PageWrapper = styled.div`
  ${CommonStyles};
  padding: 20px 0 15px;
  ${media.greaterThan('sm')`
    background: #FFFFFF;
    border-radius: 5px;
  `}
`;

export const BlockSubTitle = styled.div<{isSub?: boolean}>`
  color: #131415;
  flex: 1;
  font-family: 'Gilroy-Medium', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 21px;

  ${(isSub) => media.greaterThan('sm')`
    width: 100%;
    flex: unset;
    font-size: ${isSub ? '28px' : '20px'};
    line-height: ${isSub ? '33px' : '23px'};
  `}
`;
export const FormWrapper = styled.div`
  ${CommonStyles};
  background: #ffffff;
  border-radius: 5px;
  padding: 15px;
`;

export const FormInner = styled.form`
  ${CommonStyles};

  ${media.greaterThan('sm')`
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  `}
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;

  ${media.greaterThan('sm')`
    flex: 1;
  `}
`;

export const InputLabel = styled.label`
  color: #697077;
  font-family: 'Gilroy-Medium', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  padding-right: 5px;

  ${media.greaterThan('sm')`
   font-size: 16px;
   line-height: 19px;
  `}
`;

export const InputForm = styled.input<{$isError?: boolean}>`
  border-radius: 5px;
  border: 1px solid ${({$isError}) => ($isError ? '#E25241' : '#D3E2FF')};
  box-shadow: ${({$isError}) => ($isError ? '0px 0px  3px #E25241' : 'none')};
  box-sizing: border-box;
  min-width: 200px;
  outline: none;
  padding: 12px 10px;
  width: 100%;

  ${media.greaterThan('xs')`
   max-width: 280px;
 `}
`;
export const SbmtWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  ${media.greaterThan('xs')`
   width: 100%;
   justify-content: flex-start;
 `}
`;
export const BtnStyle = css`
  align-items: center;
  background: #516ff6;
  border-radius: 5px;
  color: #ffffff;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  justify-content: center;
  line-height: 140%;
  width: 135px;

  ${media.greaterThan('sm')`
    width: 160px;
  `}
`;

export const SbmtButton = styled.button`
  ${BtnStyle}
`;
export const SbmtBlock = styled.div`
  ${BtnStyle}
`;

export const BtnLink = styled.a<{name?: string}>`
  align-items: center;
  border-radius: 5px;
  border: 1px solid #d3e2ff;
  box-sizing: border-box;
  display: flex;
  justify-content: ${({name}) => (name ? 'flex-start' : 'center')};
  max-width: 270px;
  min-height: 60px;
  padding: 10px;
  width: 100%;
`;

export const BtnLinkInner = styled.div`
  align-items: center;
  color: rgba(0, 87, 255, 0.5);
  display: flex;
  font-family: 'Gilroy-Medium', sans-serif;
  font-size: 14px;
  font-weight: 600;
  gap: 10px;
  justify-content: center;
  line-height: 17px;
`;

export const BtnLinkImg = styled.div<{name?: string}>`
  width: ${({name}) => (name ? '40px' : '20px')};
  height: ${({name}) => (name ? '40px' : '20px')};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({name}) => (name ? '50%' : '3px')};
  }
`;

export const AuthorizedData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-family: 'Gilroy-Regular', sans-serif;
`;

export const AuthorizedName = styled.div`
  color: #131415;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
`;

export const AuthorizedSubData = styled.div`
  color: #516ff6;
  font-size: 10px;
  font-weight: 500;
  line-height: 120%;
`;

export const SubTxt = styled.div<{isSub?: boolean}>`
  color: #131415;
  flex: 1;
  font-family: 'Gilroy-Medium', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 21px;

  ${media.greaterThan('sm')`
    width: 100%;
    flex: unset;
    font-size: 20px;
    line-height: 23px;
  `}
`;
