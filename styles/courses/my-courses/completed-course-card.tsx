import styled from 'styled-components';
import {media} from 'styles/media';
import ClockIcon from 'public/icons/TimeSVG.svg';
import DocumentIcon from 'public/icons/DocumentPDF.svg';
import FacebookIcon from 'public/icons/FaceBookSVG.svg';
import InstagramIcon from 'public/icons/InstaSVG.svg';
import ChainIcon from 'public/icons/ChainSVG.svg';

export const CompletedCourseWrapper = styled.article`
  padding: 10px;
  background-color: transparent;
  border: 1px solid ${({theme}) => theme.colors.common.blueberryLight};
  border-radius: 5px;
  margin: 0 0 20px 0;

  &:not(:last-child) {
    margin: 0 0 20px 0;
  }

  ${media.greaterThan('md')`
    padding: 20px 30px 20px 20px;
  `}
`;

export const ClockSVG = styled(ClockIcon)<{color?: string}>`
  width: 17px;
  height: 17px;
  margin-right: 6px;

  path {
    stroke: ${({theme, color}) =>
      color ? theme.colors.common[color] : theme.colors.common.blueberry};
  }
`;

export const Span = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.black};
  padding-top: 2px;
`;

export const Status = styled.span`
  width: 100px;
  text-align: center;
  font-size: 10px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.white};
  background-color: ${({theme}) => theme.colors.common.blueberry};
  border-radius: 20px;
  padding: 5px 10px;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 15px 0;

  ${media.greaterThan('lg')`
    margin-bottom: 20px;
  `}
`;

export const MenuWrapper = styled.div`
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.common.white};
  padding: 10px;
  margin: 0 0 20px 0;

  ${media.greaterThan('lg')`
    width: 320px;
    margin: 0;
  `}
`;

export const DocumentIconSVG = styled(DocumentIcon)`
  width: 25px;
  height: 28px;
  margin-right: 10px;
`;

export const MenuText = styled.span`
  max-width: 60px;
  font-size: 10px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.greyDark};
`;

export const MenuList = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  height: 30px;
  width: 30px;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const MenuLink = styled.a`
  display: block;
  height: 100%;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.common.whiteGrey};
  position: relative;
`;

export const FacebookIconSVG = styled(FacebookIcon)`
  position: absolute;
  height: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  path {
    fill: ${({theme}) => theme.colors.common.blueberry};
    fill-opacity: 1;
  }
`;

export const InstagramIconSVG = styled(InstagramIcon)`
  position: absolute;
  height: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  path {
    fill: ${({theme}) => theme.colors.common.blueberry};
    fill-opacity: 1;
  }
`;

export const ChainIconVG = styled(ChainIcon)`
  position: absolute;
  height: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
