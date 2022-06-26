import {gql} from '@apollo/client';

export const HomeworkFragment = gql`
  fragment HomeworkFragment on Homework {
    id
    title
    type
    status
    description
    createdAt
    updatedAt
  }
`;
