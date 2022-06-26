import ReactSelect from 'react-select';
import styled from 'styled-components';
import {media} from 'styles/media';
import {TColors} from 'styles/_variables';

interface ISelectProps {
  mode?: string;
  color?: TColors;
  margin?: string;
  fontSize?: string;
  isNote?: boolean;
  height?: string;
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  sidebar?: boolean;
}

export const StyledSelect = styled(ReactSelect)<ISelectProps>`
  cursor: pointer;
  font-size: ${({fontSize}) => fontSize ?? '14px'};
  width: ${({width}) => width};
  height: ${({height}) => height};
  ${({sidebar}) =>
    sidebar &&
    `
      width: 30%;
      height: 40px;
    `};

  .react-select__control {
    justify-content: center;
    border-radius: 5px;
    padding: 7px 10px;
    cursor: pointer;
    flex-wrap: nowrap;
    min-height: 30px;
    background-color: ${({mode}) => (mode === 'dark' ? '#1d1d1f' : '#fff')};
    height: 100%;
    width: 100%;
    ${({maxWidth}) => maxWidth && `max-width: ${maxWidth}`};
    ${({minWidth}) => minWidth && `min-width: ${minWidth}`};

    border: 1px solid
      ${({theme, mode}) =>
        mode === 'dark'
          ? theme.colors.common.whiteSmoke
          : theme.colors.common.blueLight};

    &:hover {
      border-color: ${({theme, mode}) =>
        mode === 'dark'
          ? theme.colors.common.white
          : theme.colors.common.blueberry};
    }

    &--menu-is-open {
      .react-select__dropdown-indicator {
        transform: rotate(180deg);
      }
    }

    &--is-focused {
      box-shadow: none;
    }

    ${({isNote}) =>
      isNote &&
      ` 
        background-color: transparent;
        border-color: #D3E2FF;
        padding: 15px 10px;
      `};

    ${({sidebar}) =>
      sidebar &&
      ` 
        background-color: transparent;
        border-color: #D3E2FF;
      `};
  }

  .react-select__value-container {
    padding: 0;
    margin-right: 5px;
    flex: unset;

    ${media.greaterThan('xs')`
      margin-right: 10px;
    `};
  }

  .react-select__single-value,
  .react-select__placeholder,
  .react-select__input-container {
    font-family: 'Gilroy-Semibold', sans-serif;
    padding: 0;
    margin: 0;
    color: ${({color, theme}) =>
      color ? theme.colors.common[color] : theme.colors.primary};
    font-weight: ${({mode}) => (mode === 'dark' ? 400 : 600)};

    ${({sidebar}) =>
      sidebar &&
      ` 
        color: #697077;
      `};
  }

  .react-select__option {
    cursor: pointer;
    text-align: left;
    overflow-wrap: break-word;

    &--is-focused {
      background-color: ${({theme}) => theme.colors.common.blueberryLight};
    }
    &--is-selected {
      background-color: ${({theme}) => theme.colors.common.blueberryMiddle};
    }
  }

  .react-select__clear-indicator {
    margin-right: 10px;
  }

  .react-select__indicator {
    padding: 0;
    width: 12px;
    height: 12px;

    path {
      stroke: ${({theme, color}) =>
        color ? theme.colors.common[color] : theme.colors.primary};
      ${({sidebar}) =>
        sidebar &&
        `
        stroke: #697077;
      `}
    }

    ${({isNote}) =>
      isNote &&
      `
        width: 20px;
        height: 20px;
      `}

    &s {
      ${({isNote}) =>
        isNote &&
        `
          margin-left: auto;
        `}
    }
  }

  .react-select__menu {
    z-index: 17;
    border-radius: 5px;
    margin: 5px 0 0;

    &-list {
      padding: 0;
      box-shadow: 0 0 15px 0 rgb(0 0 0 / 20%);
      border-radius: 5px;
    }
  }
`;

export const IconContainer = styled.div<{isNote?: boolean}>`
  margin-right: 10px;
  display: flex;
  ${({isNote}) =>
    isNote &&
    `
      margin-left: auto;
    `}
`;
