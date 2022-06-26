import styled from 'styled-components';
import {media} from 'styles/media';

export const Wrapper = styled.div`
  display: flex;
  padding: 0 0 30px;
  ${media.greaterThan('xs')`
    padding: 40px 0 80px;
  `};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export const CoursesListHeader = styled.div`
  display: flex;
  align-items: center;
  & > :first-child {
    margin-right: 15px;
  }
  margin-bottom: 10px;
  ${media.greaterThan('xs')`
    margin-bottom: 25px;
  `};
`;

export const CoursesCount = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 5px 10px;
  background-color: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12), 0px 0px 0px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
`;

export const CourseList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  ${media.greaterThan('xs')`
    margin-bottom: 65px;
  `};
`;

export const FAQ = styled.div`
  padding-top: 24px;
`;
