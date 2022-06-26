import styled from 'styled-components';
import StatusCheckedIcon from '@/public/icons/StatusCheckedSVG.svg';
import StatusIcon from '@/public/icons/StatusSVG.svg';
import ArrowIcon from '@/public/icons/ArrowRightSVG.svg';
import {media} from '../media';

export const HomeworkBlock = styled.a<{
  borderStyle: string;
  borderColor: string;
  backgroundColor: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 80px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  color: ${({theme}) => theme.colors.common.blueberry};

  border: ${({borderStyle, borderColor, theme}) =>
    `1px ${borderStyle} ${theme.colors.common[borderColor]}`};

  border-radius: 5px;
  background-color: ${({theme, backgroundColor}) =>
    theme.colors.common[backgroundColor] || 'transparent'};
  padding: 10px 70px 10px 40px;
  position: relative;

  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  ${media.greaterThan('md')`
    flex-direction: row;
    align-items: center;
    font-size: 16px;
    padding: 33px 90px 33px 60px;
  `}
`;

export const HomeworkText = styled.p<{color: string}>`
  max-width: 420px;
  color: ${({theme, color}) => theme.colors.common[color]};
  margin: 0 0 10px 0;

  ${media.greaterThan('md')`
    margin: 0;
  `}
`;

export const HomeworkStatus = styled.span<{color: string}>`
  color: ${({theme, color}) => theme.colors.common[color]};
`;

export const StatusCheckedIconSVG = styled(StatusCheckedIcon)`
  position: absolute;
  width: 17px;
  height: 17px;
  top: 10px;
  left: 10px;
  path {
    stroke: ${({theme}) => theme.colors.common.greyLight};
  }

  ${media.greaterThan('md')`
    top: 50%;
    left: 21px;
    transform: translateY(-50%);
  `}
`;

export const StatusIconSVG = styled(StatusIcon)`
  position: absolute;
  width: 17px;
  height: 17px;
  top: 10px;
  left: 10px;

  ${media.greaterThan('md')`
    top: 50%;
    left: 21px;
    transform: translateY(-50%);
  `}
`;

export const HomeworkButton = styled.a<{
  buttonBackground: string;
  buttonBorderColor?: string;
}>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  top: 10px;
  right: 10px;
  border-radius: 5px;
  background-color: ${({theme, buttonBackground}) =>
    theme.colors.common[buttonBackground]};
  border: ${({buttonBorderColor, theme}) =>
    buttonBorderColor && `1px solid ${theme.colors.common[buttonBorderColor]}`};

  ${media.greaterThan('md')`
    top: 50%;
    transform: translateY(-50%);
    `};
`;

export const ArrowIconSVG = styled(ArrowIcon)<{color: string}>`
  position: absolute;
  width: 5px;
  height: 10px;

  path {
    stroke: ${({theme, color}) => theme.colors.common[color]};
  }
`;
