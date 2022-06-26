import styled from 'styled-components';

export const DiscountWrapper = styled.div`
  padding: 15px 22px;
  font-weight: 600;
  background-color: ${({theme}) => theme.colors.common.blueberry};
  border-radius: 5px;
  margin-bottom: 30px;
`;

export const DiscountText = styled.p<{fz: number}>`
  font-size: ${({fz}) => `${fz}px`};
  color: ${({theme}) => theme.colors.common.white};
  margin: 0 0 20px 0;
`;

export const DiscountButton = styled.a`
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.common.blueberry};
  background-color: ${({theme}) => theme.colors.common.white};
  padding: 3px 12px;
`;
