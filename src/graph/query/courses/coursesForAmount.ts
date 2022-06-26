import {gql} from '@apollo/client';

export interface ICoursesForAmountResponse {
  courses: {
    Courses: {id: string}[];
  };
}

export const GET_COURSES_FOR_AMOUNT = gql`
  query courses($limit: Int) {
    courses(limit: $limit) {
      Courses {
        id
      }
    }
  }
`;
