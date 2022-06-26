import styled from 'styled-components';
import {Button as CommonButton} from 'styles/common';

export const TableWrapper = styled.div`
  background: #ffffff;
  display: flex;
  max-width: 980px;
  border-radius: 5px;
  border: 1px solid #d3e2ff;
`;

export const TableColumn = styled.div<{
  main?: boolean;
  $isLarge?: boolean;
  $isSmall?: boolean;
  $isHighlight?: boolean;
  $isMedium?: boolean;
}>`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 185px;
  max-width: 220px;
  padding: 20px 0;
  flex-basis: 0;
  flex: 1;

  &:last-child {
    border-radius: 0 5px 5px 0;
  }

  :not(:last-child) {
    border-right: 1px solid #d3e2ff;
  }

  & > :first-child {
    border-bottom: 1px solid #d3e2ff;
  }

  & > :last-child {
    border-top: 1px solid #d3e2ff;
  }

  ${({main}) =>
    main &&
    `
      flex: 1;
      max-width: unset;
  `}

  ${({$isLarge}) =>
    $isLarge &&
    `
      min-width: 360px;
  `}
  
  ${({$isMedium}) =>
    $isMedium &&
    `
      min-width: 290px;
  `}

  ${({$isSmall}) =>
    $isSmall &&
    `
      min-width: unset;
  `}

  ${({$isHighlight}) =>
    $isHighlight &&
    `
     background-color: #F4F6FA; 
  `}
`;

export const TableCell = styled.div<{
  data?: boolean;
  main?: boolean;
  $isTitle?: boolean;
  $isLast?: boolean;
}>`
  padding: 5px;
  height: ${({$isLast}) => ($isLast ? '100px' : '70px')};
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #131415;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  text-align: center;

  &:nth-child(even):not(:last-child) {
    background-color: #f4f6fa;
  }

  ${({main}) =>
    main &&
    `
      text-align: left;
      justify-content: flex-start;
      padding-left: 20px
  `}

  ${({$isTitle}) =>
    $isTitle &&
    `
      font-size: 18px;
      color: #516FF6;
  `}
`;

export const PropertyCellInner = styled.div<{
  $isTitle?: boolean;
}>`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #697077;
  white-space: pre-line;

  ${({$isTitle}) =>
    $isTitle &&
    `
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #131415;
  `}
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: #131415;
  margin-bottom: 10px;

  &:last-child {
    margin: 0;
  }

  span {
    font-size: 10px;
    color: #697077;
  }

  &:before {
    content: '';
    width: 20px;
    height: 20px;
    background-image: url('/icons/DollarIcon.svg');
    background-size: contain;
    margin-right: 5px;
  }
`;

export const PriceTitle = styled.div`
  margin-bottom: 15px;
`;

export const PriceButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled(CommonButton)<{width?: string}>`
  width: ${({width}) => width};
  max-width: 160px;
`;
