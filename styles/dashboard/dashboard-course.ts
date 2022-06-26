import styled from 'styled-components';
import {media} from 'styles/media';
import Exclamantory from 'public/icons/Exclamatory.svg';

export const CourseWrapper = styled.div`
  display: grid;

  gap: 10px;

  ${media.greaterThan('md')`
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  `}
`;

export const CourseContainer = styled.article`
  background-color: ${({theme}) => theme.colors.common.white};
  border-radius: 5px;
  padding: 10px;
`;

export const FlexCourse = styled.div<{ mb?: number; align?: string; jc?: string}>`
  display: flex;
  justify-content: ${({jc}) => jc || 'space-between'};
  align-items: ${({align}) => (align ? align : 'start')};
  margin-bottom: ${({mb}) => (mb ? `${mb}px` : 0)};
`;

export const CourseText = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.greyDark};
  margin: 0;
`;

export const CourseNumber = styled.span``;

export const Label = styled.span`
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.common.white};
  background-color: ${({theme}) => theme.colors.common.jordyBlue};
  border-radius: 5px;
  padding: 4px 10px;

  ${media.greaterThan('md')`
    visibility: hidden;
  `}
`;

export const CourseTitle = styled.h3`
  height: 35px;
  font-size: 16px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.black};
  margin: 0 0 10px 0;
  overflow: hidden;

  ${media.greaterThan('lg')`
    margin: 0 0 20px 0;
  `}
`;

export const CourseButton = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.blueberry};
`;

export const ExclamantorySVG = styled(Exclamantory)`
  display: block;
  width: 13px;
  height: 13px;
  margin-right: 6px;
`;

export const Flex = styled.div`
  display: flex;
`;

export const CourseImage = styled.img.attrs(({src}) => ({src}))`
  display: block;
  width: 100%;
`;

export const CourseImageLabel = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.common.white};
  background-color: ${({theme}) => theme.colors.common.blueLight};
  border-radius: 5px;
  padding: 4px 10px;
  left: 10px;
  bottom: 10px;
`;
