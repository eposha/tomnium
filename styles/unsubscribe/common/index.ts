import styled from 'styled-components';

import {media} from 'styles/media';

export const StepWrapper = styled.div<{isPad?: boolean}>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({isPad}) => (isPad ? '0' : '10px 0')};

  & > .fresnel-container {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    width: 100%;
  }

  ${media.greaterThan('sm')`
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 50px;
    padding: 30px 20px;

    & > .fresnel-container {
      justify-content: flex-start;
    }
  `}
`;

export const ButtonLink = styled.div`
  background: #ffffff;
  border-radius: 5px;
  border: 1px solid #d3e2ff;
  color: #8bb3ff;
  font-size: 14px;
  font-weight: 600;
  min-height: 40px;
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 17px;
  padding: 10px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;

  ${media.greaterThan('sm')`
    gap: 10px
  `}
`;

export const SubTitle = styled.div<{margin?: string}>`
  color: #131415;
  font-family: 'Gilroy-Semibold', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  margin: 0 0 15px 0;
  max-width: 470px;
  text-align: center;

  ${({margin}) =>
    margin &&
    `
    margin: ${margin};
  `}

  ${media.greaterThan('sm')`
    color: #131415;
    font-family: 'Gilroy-Medium', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin: 0 0 30px 0;
  `}
`;

export const StepInner = styled.div`
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 0 15px 15px;
  width: 100%;

  ${media.greaterThan('sm')`
    align-self: flex-start;
  `}
`;

export const ReasonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.greaterThan('sm')`
      max-width: 520px;
  `}
`;

export const ReasonItemInner = styled.div<{isLast?: boolean}>`
  padding: 15px 0;
  border-bottom: ${({isLast}) => (isLast ? 'none' : '1px solid #F4F6FA')};

  ${media.greaterThan('sm')`
  border: none;
`}
`;
export const TxtLink = styled.a`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  border-bottom: 1px solid;
  color: #8bb3ff;
  align-self: flex-end;
  cursor: pointer;
`;
export const ReasonsBlockTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #131415;
  font-family: 'Gilroy-Medium', sans-serif;
  padding-left: 15px;
`;
