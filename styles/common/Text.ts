import styled, {css} from 'styled-components';
import {media} from 'styles/media';
import {TColors} from '../_variables';

interface IText {
  margin?: string;
  $title?: boolean;
  $description?: boolean;
  disabled?: boolean;
  jcb?: boolean;
  lineClamp?: number;
  fontSize?: string;
  fontWeight?: string;
  color?: TColors;
  className?: string;
  textAlign?: 'center' | 'left' | 'right' | 'justify';
  lineHeight?: string;
  isSub?: boolean;
  as?: keyof JSX.IntrinsicElements;
  txtColor?: string;
  isMed?: boolean;
  padding?: string;
}

const Title = css`
  font-size: 14px !important;
  line-height: 17px;
  color: ${({theme}) => theme.colors.text};
  ${media.greaterThan('xs')`
    font-size: 16px !important;
  `};
`;

const Description = css<{color?: TColors}>`
  line-height: 14px;
  color: ${({theme, color}) =>
    color ? theme.colors.common[color] : theme.colors.common.greyDark};
`;

const FreeHeader = css`
  ${media.greaterThan('md')`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `}
`;

const TitleMedium = css`
  font-family: 'Gilroy-Medium';
`;

interface ILineClamp {
  lineClamp?: number;
}

const LineClamp = ({lineClamp}: ILineClamp) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lineClamp};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  box-orient: vertical;
`;

const Text = styled.div<IText>`
  ${({$title}) => $title && Title};
  ${({$description}) => $description && Description};
  ${({lineClamp}) => !!lineClamp && LineClamp};
  ${({isMed}) => isMed && TitleMedium};
  ${({margin}) => margin && `margin: ${margin}`};
  ${({padding}) => padding && `padding: ${padding}`};
  font-weight: ${({fontWeight}) => fontWeight ?? '600'};
  font-size: ${({fontSize}) => (fontSize ? `${fontSize} !important` : '12px')};
  text-align: ${({textAlign}) => textAlign ?? 'left'};
  opacity: ${({disabled}) => (disabled ? 0.5 : 1)};
  line-height: ${({lineHeight}) => lineHeight ?? '110%'};
  color: ${({theme, color}) => color && theme.colors.common[color]};

  ${({isSub}) =>
    isSub &&
    `
    font-size: 14px!important;
    font-family: 'Gilroy-Semibold';
  `}

  ${({txtColor}) =>
    txtColor &&
    `
    color: ${txtColor};
  `}

  ${({jcb}) => jcb && FreeHeader};
`;

export default Text;
