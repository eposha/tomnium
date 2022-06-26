import SupportNotificationType from 'public/icons/SupportNotificationType.svg';
import PaymentNotificationType from 'public/icons/PaymentNotificationType.svg';
import NewMessageNotificationType from 'public/icons/NewMessageNotificationType.svg';
import NewModuleNotificationType from 'public/icons/NewModuleNotificationType.svg';
import NewSuggestionNotificationType from 'public/icons/NewSuggestionNotificationType.svg';
import SupportNotificationStatus from 'public/icons/SupportNotificationStatus.svg';

import styled from 'styled-components';
import {media} from 'styles/media';

import {TColors} from 'styles/_variables';

export const Wrapper = styled.div`
  margin-top: 15px;
`;

export const Table = styled.table`
  border-spacing: 0;
  width: 100%;
`;

export const Header = styled.table``;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Head = styled.thead`
  position: relative;
  height: 40px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: -20px;
    height: 1px;
    background: #d3e2ff;
    width: calc(100% + 40px);
  }
`;

export const Body = styled.tbody``;

export const Row = styled.tr``;

export const HeadCell = styled.th`
  text-align: start;
  font-size: 12px;
  line-height: 12px;
  color: #131415;

  &:last-child {
    text-align: end;
  }
`;

export const Cell = styled.td`
  padding: 20px 20px 20px 0;

  border-bottom: 1px solid #d3e2ff;

  &:last-child {
    padding-right: 0;
  }
`;

export const CellText = styled.span<{
  main?: boolean;
  secondary?: boolean;
  fontSize?: string;
  fontWeight?: string;
  color?: TColors;
  margin?: string;
  nowrap?: boolean;
  lineClamp?: number;
  align?: 'left' | 'center' | 'right';
}>`
  display: block;

  ${({lineClamp}) =>
    lineClamp &&
    `display: -webkit-box;
      -webkit-line-clamp: ${lineClamp};
      -webkit-box-orient: vertical;
      overflow: hidden;`};

  ${({main}) =>
    main &&
    `
      font-weight: 700;
      margin-bottom: 12px;
    `};

  ${({secondary}) =>
    secondary &&
    `
      color: #697077;
      font-size: 12px;
      font-weight: 400;
    `};

  margin: ${({margin}) => margin};
  font-weight: ${({fontWeight}) => fontWeight ?? '600'};
  font-size: ${({fontSize}) => fontSize ?? '12px'};
  color: ${({theme, color}) => color && theme.colors.common[color]};
  white-space: ${({nowrap}) => nowrap && 'nowrap'};
  text-align: ${({align}) => align};
`;

export const CellLink = styled.a`
  display: inline-block;
  font-size: 14px;
  color: #8bb3ff;
  text-decoration: underline;

  &:hover {
    color: #516ff6;
  }
`;

export const EmptyContainer = styled.td`
  padding: 20px;
  text-align: center;

  ${media.greaterThan('xs')`
    padding: 30px;
    font-size: 20px;
  `};
`;

export const SupportNotificationTypeIcon = styled(SupportNotificationType)`
  width: 20px;
  height: 20px;
`;

export const PaymentNotificationTypeIcon = styled(PaymentNotificationType)`
  width: 20px;
  height: 20px;
`;
export const NewMessageNotificationTypeIcon = styled(
  NewMessageNotificationType,
)`
  width: 20px;
  height: 20px;
`;
export const NewModuleNotificationTypeIcon = styled(NewModuleNotificationType)`
  width: 20px;
  height: 20px;
`;
export const NewSuggestionNotificationTypeIcon = styled(
  NewSuggestionNotificationType,
)`
  width: 20px;
  height: 20px;
`;
export const SupportNotificationStatusIcon = styled(SupportNotificationStatus)`
  width: 20px;
  height: 20px;
`;

export const WithDot = styled.div<{fontSize?: string; $isDisabled?: boolean}>`
  position: relative;
  ${({fontSize}) => fontSize && `font-size: ${fontSize}`};

  ${({$isDisabled}) => $isDisabled && `color: #BCBCBC`};

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: -15px;
    transform: translate(-50%, -50%);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({$isDisabled}) => ($isDisabled ? '#D3E2FF' : '#516ff6;')};
  }
`;
