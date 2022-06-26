import {gql} from '@apollo/client';
import {Homework} from 'src/graphql.schema';

export interface IGetHomeworkByIdResponse {
  homeworkById: Homework;
}

export const GET_HOMEWORK_BY_ID = gql`
  query homeworkById($id: String!) {
    homeworkById(id: $id) {
      id
      index
      title
      description
      type
      status
      createdAt
      updatedAt
      # Module
      # Lesson
      HomeworkContent {
        id
        Language {
          id
          name
          nativeName
          code
          index
        }
        content
      }
      # HomeworkFluentContent {
      #   id
      #   Language {
      #     id
      #     name
      #     nativeName
      #     code
      #     index
      #   }
      #   content
      # }
      # HomeworkTestQuestions
      # HomeworkTasks
    }
  }
`;
