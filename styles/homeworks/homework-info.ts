import styled from 'styled-components';
import TimeSVG from 'public/icons/TimeSVG.svg';
import DocumentSVG from 'public/icons/DocumentSVG.svg';
import {media} from 'styles/media';

export const Info = styled.ul`
  display: flex;
  justify-content: space-between;
  min-height: 20px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 20px;

  ${media.greaterThan('md')`
    margin-bottom: 50px;
  `}
`;

export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 25px;
  position: relative;
  color: ${({theme}) => theme.colors.common.greyDark};
`;

export const InfoTimeSVG = styled(TimeSVG)`
  position: absolute;
  top: 0;
  left: 0;
  width: 17px;
  height: 17px;
`;

export const InfoDocumentSVG = styled(DocumentSVG)`
  position: absolute;
  top: 0;
  left: 0;
  width: 17px;
  height: 17px;
`;

export const InfoSubTitle = styled.span`
  color: ${({theme}) => theme.colors.common.greyDark};
`;
