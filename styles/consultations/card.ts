import styled, {StyledProps, css} from 'styled-components';
import Image from 'next/image';
import {Box, Button, Card, Widget} from 'styles/common';
import {media} from 'styles/media';

export const InnerFlex = styled.div<{
  justifyContent?: 'flex-start' | 'space-between';
}>`
  display: flex;
  justify-content: ${({justifyContent}) => justifyContent || 'flex-start'};
`;

export const MainWrapperCard = styled.div`
  margin-bottom: 10px;
  width: 100%;
  ${media.greaterThan('xl')`
      margin-bottom: 20px;
  `}
`;

export const DesktopCardWrapper = styled.div`
  background: ${({theme}) => theme.colors.common.white};
  border-radius: 5px;
  box-sizing: border-box;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 115px 48fr 17fr 17fr;
  padding: 20px;
  position: relative;
  z-index: 10;
`;

export const MobileCardWrapper = styled(Card)`
  margin-bottom: 0;
  z-index: 10;
`;

export const CustomImage = styled(Image)`
  border-radius: 5px;
  flex-shrink: 0;
  position: relative;
`;

export const DataIcons = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 13px;
  ${media.greaterThan('xs')`
      gap: 30px;
  `}
`;

export const WrapperIcons = styled.div<{
  margin?: string;
  width?: string;
  isDataIcons?: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({margin}) => margin && `margin: ${margin}`};
  ${({width}) => width && `width: ${width}`};
  box-sizing: border-box;
  ${({isDataIcons}) => isDataIcons && DataIcons}
`;

export const InnerIcon = styled.div<{width?: string}>`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  font-size: 12px;
  & > *:first-child {
    margin-right: 12px !important;
    flex-shrink: 0;
  }
  ${({width}) => width && `width: ${width}`};
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  width: 100%;

  & > * {
    width: 100%;
  }
`;

export const ButtonLink = styled(Button)<{
  colorLink?: 'primary' | 'secondary';
}>`
  padding: 0;
  & > a {
    // @ts-ignore
    color: ${({theme, colorLink = 'primary'}) =>
      colorLink === 'primary'
        ? theme.colors.common.white
        : theme.colors.common.blueberry};
    text-decoration: none;
    padding: 10px;
    width: 100%;
    height: 100%;
  }
`;

export const Label = styled(Widget)`
  position: absolute;
  top: -5px;
  left: -5px;
  z-index: 2;
  font-size: 12px;
  background-color: ${({theme}) => theme.colors.secondary};
  color: ${({theme}) => theme.colors.common.white};
  font-weight: 700;
  padding: 7px 10px;
`;

type TTypeLabel = 'primary' | 'secondary' | 'tertiary';

const getStylesBottomLabel = ({
  theme,
  type,
}: StyledProps<{type: TTypeLabel}>) => {
  switch (type) {
    case 'primary':
      return {
        background: theme.colors.common.blueberry,
        color: theme.colors.common.white,
        width: '100%',
        zIndex: 7,
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '12px',
        fontWeight: 600,
        padding: '10px 20px 5px 20px',
        top: '-5px',
      };
    case 'secondary':
      return {
        background: theme.colors.common.blueberryMiddle,
        width: 'calc(100% + 30px)',
        zIndex: 6,
        height: '20px',
        top: 0,
      };
    case 'tertiary':
      return {
        background: theme.colors.common.blueberryLight,
        width: 'calc(100% - 80px)',
        zIndex: 5,
        height: '35px',
        top: '-5px',
      };
    default:
      return {background: theme.colors.common.blueberry, width: '100%'};
  }
};

export const BottomLabelCard = styled.div<{type: TTypeLabel}>`
  ${getStylesBottomLabel};
  border-radius: 0 0 5px 5px;
  position: relative;
  margin-right: 0;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
`;

export const InnerImage = styled(Box)`
  position: relative;
  flex-shrink: 0;
`;

export const ContainerFlex = styled(InnerFlex)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  & > * {
    margin-bottom: 0;
  }
`;
