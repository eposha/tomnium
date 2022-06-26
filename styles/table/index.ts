import styled from 'styled-components';
import {media} from 'styles/media';

import {TColors} from 'styles/_variables';

export const Wrapper = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  overflow-x: scroll;
  ${media.greaterThan('xs')`
    padding: 20px;
  `};
`;

export const Table = styled.table`
  border-spacing: 0;
  margin-bottom: 15px;
  width: 100%;
`;

export const Header = styled.table`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 15px;

  ${media.greaterThan('xs')`
    margin: 0 0 25px;
  `};
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin: 0;

  ${media.greaterThan('xs')`
    font-size: 18px;
  `};
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Head = styled.thead``;

export const Body = styled.tbody``;

export const Row = styled.tr``;

export const HeadCell = styled.th`
  border-top: 2px solid #eef9ff;
  border-bottom: 2px solid #eef9ff;
  padding: 10px;
  text-align: left;
  font-weight: 700;
  font-size: 14px;
  white-space: nowrap;

  ${media.greaterThan('xs')`
    padding: 10px 10px 15px;
    font-size: 16px;
  `};
`;

export const Cell = styled.td`
  padding: 10px;
  border-bottom: 2px solid #eef9ff;

  ${media.greaterThan('xs')`
    padding: 15px 10px;
  `};
`;

export const CellText = styled.span<{
  main?: boolean;
  secondary?: boolean;
  fontSize?: string;
  fontWeight?: string;
  color?: TColors;
  margin?: string;
  nowrap?: boolean;
  align?: 'left' | 'center' | 'right';
}>`
  display: block;

  ${({main}) =>
    main &&
    `
      font-weight: 700;
      margin-bottom: 12px;
    `};

  ${({secondary}) =>
    secondary &&
    `
      color: '#697077';
      font-size: 11px;
      font-weight: 400;
    `};

  margin: ${({margin}) => margin};
  font-weight: ${({fontWeight}) => fontWeight ?? '600'};
  font-size: ${({fontSize}) => fontSize ?? '14px'};
  color: ${({theme, color}) => color && theme.colors.common[color]};
  white-space: ${({nowrap}) => nowrap && 'nowrap'};
  text-align: ${({align}) => align};
`;

export const CellLink = styled.a`
  display: inline-block;
  font-size: 14px;
  color: #516ff6;
  text-decoration: underline;

  &:hover {
    color: #8bb3ff;
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
