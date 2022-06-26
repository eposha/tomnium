import {media} from 'styles/media';
import styled from 'styled-components';

export const InfoCardsWrapper = styled.div`
  display: flex;

  & > :not(:last-child) {
    margin-right: 10px;

    ${media.greaterThan('lg')`
      margin-right: 20px;
    `};
  }
`;

export const InfoCardContainer = styled.div`
  min-width: 145px;
  width: 100%;
  max-width: 220px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.common.white};
  padding: 20px;
`;

export const InfoCardContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 600;

  ${media.greaterThan('lg')`
      font-size: 16px;
    `};
`;

export const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid ${({theme}) => theme.colors.common.blueberryLight};
  margin-right: 10px;

  ${media.greaterThan('lg')`
      margin-right: 20px;
      width: 40px;
      height: 40px;
    `};
`;
