import styled from 'styled-components';
import Select from 'react-dropdown-select';
import {TColors} from '../_variables';
import {media} from '../media';

export const InnerSelect = styled.div<{
  width?: string;
  height?: string;
  maxWidth?: string;
  sidebar?: boolean;
}>`
  ${({maxWidth}) => maxWidth && `max-width: ${maxWidth}`};
  width: ${({width,sidebar}) => sidebar ? '30%' : width || '100%'};
  height: ${({ height }) => height || 'auto'};
  min-width: 80px;
  & > div {
    height: ${({height}) => height || 'auto'};
  }
`;

export const DateSelect = styled(Select).attrs({className: 'primary-select'})<{
  mode?: 'dark' | 'light';
  fontSize?: string;
  sidebar?: boolean;
  isNote?: boolean;
}>`
  &.primary-select {
    outline: none;
    line-height: 14px;
    position: relative;
    background-color: transparent;
    border: 1px solid
      ${({theme, mode, sidebar}) =>
        sidebar ? '#D3E2FF' : mode === 'dark'
        ? theme.colors.common.whiteSmoke
        : theme.colors.common.blueLight};
    padding: ${({isNote}) => isNote ? '15px 10px' : '7px 10px'};
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    font-size: ${({ fontSize }) => fontSize || '14px'};
    ${({ isNote }) => isNote && `
      border: 1px solid #D3E2FF;
    `}
    height: 100%;
  }
  &.react-dropdown-select {
    &:focus-within,
    &:hover {
      box-shadow: none;
    }
  }
  & .react-dropdown-select-dropdown {
    border-radius: 5px;
    z-index: 16;
    border: none;
    box-shadow: 0 0 15px 0 rgb(0 0 0 / 20%);
    .react-dropdown-select-item {
      padding: 10px;
      box-sizing: border-box;
      font-size: ${({fontSize}) => fontSize || '14px'};
      &.react-dropdown-select-item-selected {
        background: ${({theme}) => theme.colors.common.blueberryMiddle};
      }
    }
  }
`;

export const ContValue = styled.div<{ isNote?: boolean }>`
  display: flex;
  align-items: ${({ isNote }) => isNote ? 'center' : 'flex-start'};
  justify-content: center;
  border: none;
  width: 100%;
`;

export const InnerValue = styled.div<{
  color?: TColors;
  margin?: string;
  textAlign?: 'center' | 'right' | 'left';
  lineClamp?: number;
  mode?: 'dark' | 'light';
  fontSize?: string;
  sidebar?: boolean;
  isNote?: boolean;
}>`
  color: ${({color, theme, sidebar}) =>
    sidebar ? '#697077' : color ? theme.colors.common[color] : theme.colors.primary};
  font-weight: ${({mode}) => (mode === 'dark' ? 400 : 600)};
  font-size: ${({fontSize}) => fontSize || '14px'};
  text-align: ${({textAlign}) => textAlign || 'left'};
  margin: ${({margin}) => margin};
  ${({isNote}) => media.lessThan('sm')` 
    font-size: ${isNote ? '14px' : '12px'};
  `};
  word-break: break-all;
  overflow-wrap: break-word;
  hyphens: auto;
  display: ${({isNote}) => isNote ? 'flex' : '-webkit-box'};
  -webkit-line-clamp: ${({lineClamp}) => lineClamp || 0};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
  justify-content: center;
  ${({ isNote }) => isNote && `
  flex: 1;
  gap: 10px;
  `
}
`;
