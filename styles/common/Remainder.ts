import styled from 'styled-components';
import {media} from 'styles/media';
import CommonButton from 'styles/common/Button';

export const RemainderBlock = styled.div`
  display: flex;
  padding: 20px 10px;
  font-size: 12px;
  line-height: 1.2;
  border-radius: 0 0 5px 5px;
  background-color: ${({theme}) => theme.colors.common.white};
  width: 100vw;
  position: relative;
  left: -10px;

  ${media.greaterThan('xs')`
    padding: 40px 50px 40px 30px;
    width: auto;
    left: unset
  `}
`;

export const MainBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  ${media.greaterThan('xs')`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  `}
`;

export const NumLabel = styled.span`
  font-size: 7px;
  font-weight: 600;
  line-height: 2.2;
  text-align: center;
  min-width: 15px;
  height: 15px;
  color: ${({theme}) => theme.colors.common.blueberry};
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.common.blueberryLight};
  margin: 0 10px 0 0;

  ${media.greaterThan('xs')`
    font-size: 12px;
    width: 30px;
    height: 30px;
    margin: 0 20px 0 0;
    line-height: 2.5;
    color: ${({theme}) => theme.colors.common.blueLight};
    background-color: ${({theme}) => theme.colors.common.whiteGrey};
  `}
`;

export const InfoContainer = styled.div`
  max-width: 420px;
  flex: 1;
  ${media.greaterThan('xs')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}
`;

export const Title = styled.h3`
  margin: 0 0 10px 0;
  color: ${({theme}) => theme.colors.common.black};

  ${media.greaterThan('xs')`
    font-size: 16px;
  `}
`;

export const Text = styled.p`
  margin: 0 0 20px 0;
  color: ${({theme}) => theme.colors.common.greyDark};

  ${media.greaterThan('xs')`
    margin: 0;
    font-weight: 500;
  `}
`;

export const LabelContainer = styled.div`
  margin-bottom: 20px;
  ${media.greaterThan('xs')`
     display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0;
  `}
`;

export const LabelLink = styled.a`
  display: inline-block;
  border-radius: 5px;
  padding: 4px 10px;
  color: ${({theme}) => theme.colors.common.blueberry};
  background-color: ${({theme}) => theme.colors.common.blueberryLight};

  ${media.greaterThan('xs')`
   text-align: center;
   &:not(:last-child) {
   margin-bottom: 5px;
 }
 `}

  ${media.lessThan('sm')`
    &:not(:last-child) {
    margin-right: 5px;
 `}
`;

export const Button = styled(CommonButton)`
  min-width: 135px;

  ${media.greaterThan('xs')`
    min-width: 160px;
  `};
`;

export const Date = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.black};

  ${media.greaterThan('xs')`
    margin-bottom: 20px;
  `}
`;
