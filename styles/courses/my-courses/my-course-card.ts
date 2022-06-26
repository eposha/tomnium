import styled from 'styled-components';
import {media} from 'styles/media';
import FileIcon from 'public/icons/FileSVG.svg';
import BookIcon from 'public/icons/BookSVG.svg';
import ClockIcon from 'public/icons/TimeSVG.svg';
import CheckIcon from 'public/icons/CheckedCircle.svg';

export const MyCourseCardWrapper = styled.article`
  padding: 10px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.common.white};
  margin-bottom: 20px;

  ${media.greaterThan('lg')`
    padding: 20px 30px 20px 20px;
  `}
`;

export const WhiteCard = styled.div`
    height: 700px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.common.white};
    margin-bottom: 20px;

    ${media.greaterThan('md')`
      height: 385px;
    `}
`

export const Image = styled.img.attrs(({src}) => ({src}))``;

export const MyCourseImage = styled(Image)`
  display: block;
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  height: 200px;

  ${media.greaterThan('lg')`
    width: 230px;
    height: 130px;
    margin-right: 20px;
  `}
`;

export const MyCourseLabel = styled.span`
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

export const MyCourseTag = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 5px;
  color: ${({theme}) => theme.colors.common.white};
  background-color: ${({theme}) => theme.colors.common.blueLight};
  bottom: 5px;
  left: 5px;
`;

export const StatsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const FileIconSVG = styled(FileIcon)`
  position: absolute;
  height: 17px;
  top: 0;
  left: 0;
`;

export const BookIconSVG = styled(BookIcon)`
  position: absolute;
  height: 17px;
  top: 0;
  left: 0;
`;

export const StatsText = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 700;
  padding-left: 25px;
  color: ${({theme}) => theme.colors.common.greyDark};
  margin: 0;
  position: relative;

  ${media.greaterThan('lg')`
    &:first-child {
      padding-left: 0;
    }
  `}
`;

export const StatsSmallText = styled.span`
  display: inline-block;
  color: inherit;
  font-weight: 500;
  padding-left: 5px;

  ${media.greaterThan('lg')`
    &:first-child {
      padding-left: 0;
    }
  `}
`;

export const Title = styled.h3<{size: number}>`
  font-size: ${({size}) => `${size}px`};
  font-weight: 600;
  margin: 0 0 10px 0;

  ${media.greaterThan('lg')`
    width: 100%;
    max-width: 320px;
  `}
`;

export const Text = styled.p<{mb?: number, ml?: number}>`
  font-size: 12px;
  color: ${({theme}) => theme.colors.common.greyDark};
  font-weight: 500;
  margin: 0 0 ${({mb}) => (mb ? `${mb}px` : 0)} ${({ml}) => (ml ? `${ml}px` : 0)};

  ${media.greaterThan('lg')`
    width: 100%;
    max-width: 320px;
  `}
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  margin-bottom: 15px;

  ${media.greaterThan('lg')`
    margin-bottom: 0;
  `}
`;

export const AuthorPhoto = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;

export const AuthorTitle = styled.h4`
  font-size: 12px;
  margin: 0 0 5px 0;
`;

export const AuthorText = styled.p`
  font-size: 10px;
  color: ${({theme}) => theme.colors.common.greyDark};
  margin: 0;
`;

export const Divider = styled.div<{mb?: number}>`
  width: 100%;
  height: 1px;
  background-color: ${({theme}) => theme.colors.common.whiteGrey};
  margin-bottom: ${({mb}) => (mb ? `${mb}px` : '15px')};
`;

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;

  ${media.greaterThan('lg')`
    width: 230px;
    flex-direction: column;
    margin-right: 20px;
  `}
`;

export const TagItem = styled.li`
  font-size: 10px;
  font-weight: 500;
  border-radius: 5px;
  color: ${({theme}) => theme.colors.common.blueberry};
  background-color: ${({theme}) => theme.colors.common.blueberryLight};
  padding: 4px 10px;

  ${media.greaterThan('lg')`
    width: fit-content;
  `}
`;

export const MyCourseLink = styled.a<{$isDisabled?: boolean}>`
  display: block;
  font-size: 12px;
  font-weight: 500;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.common.blueberry};
  opacity: ${({$isDisabled}) => $isDisabled ? '0.5' : '1'};
`;

export const MyCourseProgress = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.jordyBlue};
  margin: 0;
`;

export const ClockSVG = styled(ClockIcon)<{color?: string}>`
  width: 17px;
  height: 17px;
  margin-right: 6px;

  path {
    stroke: ${({theme, color}) =>
      color ? theme.colors.common[color] : theme.colors.common.blueberry};
  }

  ${media.greaterThan('lg')`
    margin-right: 12px;  
  `}
`;

export const ClockContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const InfoList = styled.ul``;

export const InfoItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const InfoItemLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 50%;
  color: ${({theme}) => theme.colors.common.blueberry};
  background-color: ${({theme}) => theme.colors.common.blueberryLight};
  margin-right: 5px;
`;

export const FooterContainer = styled.div<{mb?: number}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 ${({mb}) => (mb ? `${mb}px` : 0)} 0;

  ${media.greaterThan('lg')`
    margin-bottom: 0;
  `}
`;

export const FooterText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.blueberry};
`;

export const FooterLink = styled.a<{$isDisabled?: boolean}>`
  min-width: 135px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  border-radius: 5px;
  color: ${({theme}) => theme.colors.common.white};
  background-color: ${({theme}) => theme.colors.common.blueberry};
  padding: 10px;
  opacity: ${({ $isDisabled }) => $isDisabled ? '0.6' : '1'};
  pointer-events: ${({ $isDisabled }) => $isDisabled ? 'none' : 'unset'};

  ${media.greaterThan('lg')`
    width: 100%;
  `}
`;

export const CheckedSVG = styled(CheckIcon)`
  width: 17px;
  height: 17px;
  margin-right: 6px;
`;

export const InfoText = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
