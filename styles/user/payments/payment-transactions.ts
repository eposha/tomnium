import styled from 'styled-components';
import {media} from 'styles/media';
import Calendar from 'public/icons/Calendar.svg';

export const TransactionsWrapper = styled.div`
  padding: 15px 15px 20px 15px;
  margin-bottom: 30px;
  background-color: ${({theme}) => theme.colors.common.white};

  ${media.greaterThan('sm')`
    padding: 30px 20px;
    margin-bottom: 50px;
  `}
`;

export const BlockTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
  color: ${({theme}) => theme.colors.common.black};
  margin: 0 0 15px 0;

  ${media.greaterThan('sm')`
    font-size: 20px;
    margin: 0 0 20px 0;
  `}
`;

export const TransactionCalendarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
  position: relative;
  margin-bottom: 15px;
`;

export const CalendarSVG = styled(Calendar)`
  position: absolute;
  height: 20px;
  width: 20px;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

export const TransactionCalendar = styled.button`
  color: ${({theme}) => theme.colors.common.blueberry};
  border: 1px solid ${({theme}) => theme.colors.common.blueberryLight};
  border-radius: 5px;
  padding: 8px 12px;
`;

export const Dash = styled.span`
  display: inline-block;
  height: 1px;
  width: 5px;
  margin: 0 10px;
  border: 1px solid ${({theme}) => theme.colors.common.blueberryLight};
`;

export const TransactionDate = styled.span`
  display: inline-block;
  font-size: 10px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.blueberry};
  margin-bottom: 10px;
`;

export const TransactionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 25px;
  min-height: 80px;

  ${media.lessThan('lg')`
    &:not(:last-child) {
      border-bottom: 1px solid ${({theme}) =>
        theme.colors.common.blueberryLight};
  }
  `}

  ${media.greaterThan('lg')`
    min-height: 40px;
    border-top: 1px solid ${({theme}) => theme.colors.common.blueberryLight};
    border-bottom: none;
    padding: 0 10px;
  `}
`;

export const Container = styled.div<{flex?: number; align?: string}>`
  ${({flex, align}) => media.greaterThan('lg')`
  flex: 1 1 ${flex ? `${flex}px` : '100%'};
  text-align: ${align ? align : 'left'};
`}
`;

export const ActionsContainer = styled.div`
  text-align: right;
  & > * {
    margin-bottom: 10px;
  }
`;

export const ItemTitle = styled.span<{noMb?: boolean}>`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.black};
  margin-bottom: ${({noMb}) => (noMb ? 0 : '10px')};
`;

export const ItemText = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.greyDark};
  margin: 0 0 10px 0;
`;

export const Time = styled.time`
  display: block;
  font-size: 10px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.common.greyDark};
`;

export const Status = styled.span<{success: boolean}>`
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme, success}) =>
    success ? theme.colors.common.blueberry : theme.colors.common.red};
`;

export const Price = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.common.blueberry};
`;
