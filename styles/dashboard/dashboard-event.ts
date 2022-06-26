import styled from 'styled-components';
import {media} from 'styles/media';
import Calendar from 'public/icons/Calendar.svg';

export const EventContainer = styled.article`
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.common.white};
  padding: 10px;

  ${media.greaterThan('lg')`
    padding: 25px;
  `}

  &:not(:last-child) {
    margin-bottom: 10px;

    ${media.greaterThan('lg')`
    padding: 25px;
    margin: 0;
  `}
  }
`;

export const EventPicture = styled.img.attrs(({src}) => ({
  src,
}))`
  width: 100%;
  border-radius: 5px;

  ${media.greaterThan('lg')`
    width: 230px;
    height: 131px;
    margin-right: 20px; 
  `}
`;

export const Container = styled.div<{mb?: number}>`
  margin-bottom: ${({mb}) => (mb ? `${mb}px` : '0')};
  position: relative;
`;

export const ConerLabel = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: 700;
  padding: 7.5px 10px;
  border-radius: 5px;
  color: ${({theme}) => theme.colors.common.white};
  background-color: ${({theme}) => theme.colors.common.red};
  top: -5px;
  left: -5px;
`;

export const Label = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 5px;
  color: ${({theme}) => theme.colors.common.white};
  background-color: ${({theme}) => theme.colors.common.blueLight};
  left: 5px;
  bottom: 10px;
`;
export const EventTimeText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.black};
  padding-left: 25px;
  margin: 0 0 10px 0;
  position: relative;

  ${media.greaterThan('lg')`
    margin: 0 0 20px 0;
  `}
`;

export const EventTime = styled.time``;

export const CalendarSVG = styled(Calendar)`
  position: absolute;
  width: 15px;
  height: 17px;
  top: 0;
  left: 0;
`;

export const EventTimezone = styled.span`
  color: ${({theme}) => theme.colors.common.blueberry};
  text-decoration: underline;
`;

export const EventParticipantText = styled.span<{fw?: number; pl?: number}>`
  font-size: 12px;
  font-weight: ${({fw}) => (fw ? `${fw}` : '400')};
  color: ${({theme}) => theme.colors.common.black};
  padding-left: ${({pl}) => (pl ? `${pl}px` : '0')};
`;

export const EventTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  height: 35px;
  margin: 0 0 15px 0;
  overflow: hidden;
`;

export const EventCreaterContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  margin: 0 0 15px 0;

  ${media.greaterThan('lg')`
    margin: 0;
  `}
`;

export const EventPhoto = styled.img.attrs(({src}) => ({
  src,
}))`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const EventCreaterTitle = styled.h4<{mb?: number}>`
  font-size: 12px;
  margin: 0 0 ${({mb}) => (mb ? `${mb}px` : 0)} 0;
`;

export const EventCreaterText = styled.p`
  font-size: 10px;
  color: ${({theme}) => theme.colors.common.greyDark};
  margin: 0;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.greaterThan('lg')`
  justify-content: center;
  `}
`;

export const EventButton = styled.a<{
  color: string;
  bgc: string;
  $display?: boolean;
}>`
  min-width: 135px;
  font-size: 14px;
  padding: 10px;
  text-align: center;
  border: 1px solid ${({theme}) => theme.colors.common.blueberry};
  border-radius: 5px;
  color: ${({theme, color}) => theme.colors.common[color]};
  background-color: ${({theme, bgc}) => theme.colors.common[bgc]};
  cursor: pointer;

  ${({$display}) => media.greaterThan('lg')`
    display: ${$display ? 'block' : 'none'};
  `}
`;

export const EventInfoContainer = styled.div<{jc?: boolean}>`
  display: flex;
  flex-direction: column;

  ${({jc}) => media.greaterThan('lg')`
    flex-direction: row;
    align-items: center;
    justify-content: ${jc ? 'space-between' : 'flex-start'}
  `}
`;

export const TimeContainer = styled.div<{mb?: number}>`
  display: flex;
  align-items: center;
  margin-bottom: ${({mb}) => (mb ? `${mb}px` : 0)};
`;

export const TimeText = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin: 0 5px 0 0;
`;

export const TimeLabel = styled.time`
  font-size: 12px;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: 20px;
  color: ${({theme}) => theme.colors.common.blueberry};
  background-color: ${({theme}) => theme.colors.common.blueberryLight};
`;

export const GridEventContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${media.greaterThan('md')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`};
`;
