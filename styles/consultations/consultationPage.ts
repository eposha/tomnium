import styled from 'styled-components';
import {TColors} from '../_variables';
import {media} from 'styles/media';
import {Media} from 'src/media-styles';
import {BottomLabelCard, WrapperIcons} from './card';

export const WrapperPage = styled.div`
  display: flex;
  margin: 36px 0 83px 0;
  ${media.greaterThan('lg')`
        display: grid;
        grid-template-columns: 180px minmax(0, 980px);
        gap: 20px;`};

  ${media.lessThan('sm')`
      margin: 10px 0 26px 0;
   `};
`;

export const WrapperAside = styled.aside`
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 10px 20px rgba(88, 88, 88, 0.05);
  border-radius: 5px;
  background: ${({theme}) => theme.colors.common.white};
  width: 180px;
`;

export const UserBlock = styled.div`
  background: ${({theme}) => theme.colors.common.whiteGrey};
  border: 1px solid ${({theme}) => theme.colors.common.blueberryLight};
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px 20px 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerImage = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid ${({theme}) => theme.colors.common.white};
  box-shadow: 0 0 4px 2px rgba(149, 191, 240, 0.6);
  border-radius: 50%;
  overflow: hidden;
`;

export const UserBlockLink = styled.a<{
  color?: TColors;
  fontSize?: string;
  $isDisabled?: boolean;
}>`
  color: ${({theme, color}) =>
    color ? theme.colors.common[color] : theme.colors.common.blueLight};
  border: none;
  background: transparent;
  text-decoration: underline;
  font-weight: 600;
  font-size: ${({fontSize}) => fontSize || '10px'};
  line-height: 12px;
  ${({$isDisabled}) => $isDisabled && `opacity: 0.5`};
  cursor: pointer;
`;

export const WrapperCard = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  width: 100%;
  padding: 25px 20px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 150px 47fr 160px;
  grid-column-gap: 25px;
  z-index: 2;
  background: ${({theme}) => theme.colors.common.white};
  border-radius: 5px;
  position: relative;
  ${media.lessThan('sm')`
      grid-template-columns:1fr;
      grid-template-rows: repeat(3, auto);
      grid-row-gap: 20px;
      padding: 10px;
   `}
`;

export const InnerCardImage = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  ${media.lessThan('lg')`
     width: 130px;
     height: 130px;
     margin-right: 15px;
  `}
  flex-shrink: 0;
`;

export const WrapperCardImage = styled.div`
  display: flex;
  width: 100%;
`;

export const InnerContentCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const StyledMedia = styled(Media)<{width?: string}>`
  display: flex;
  ${({width}) => width && `width: ${width}`};
`;

export const InnerButtons = styled(WrapperIcons)`
  ${media.lessThan('sm')`
      display: grid;
      grid-template-columns:1fr 1fr;
      grid-column-gap: 10px;
   `}
`;

export const SubInnerButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > *:first-child {
    margin-bottom: 7px;
  }
  ${media.lessThan('sm')`
         & > *:first-child {
        margin-bottom: 0;
      }
   `}
`;

export const BottomLabel = styled(BottomLabelCard).attrs({type: 'primary'})`
  background: ${({theme}) => theme.colors.common.blueberryLight};
  color: ${({theme}) => theme.colors.primary};
  z-index: 1;
  height: auto;
  font-family: 'Gilroy-Medium';
`;

export const MainInnerPage = styled.div`
  width: 100%;
  max-width: 780px;
`;
