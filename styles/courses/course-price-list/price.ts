import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 600;
  position: relative;
  white-space: nowrap;
  margin: 0 0 0 5px;
`;

export const Discount = styled.span`
  color: ${({theme}) => theme.colors.common.greyLight};
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  text-decoration: line-through;
  position: relative;
  top: -5px;
`;

export const Duration = styled.span`
  color: ${({theme}) => theme.colors.common.greyLight};
  display: inline-block;
  font-size: 10px;
  line-height: 11px;
  font-weight: 500;
`;
