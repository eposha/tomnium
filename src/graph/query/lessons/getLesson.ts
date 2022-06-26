import {gql} from '@apollo/client';
import {Lesson} from 'src/graphql.schema';

export interface ILessonByIdResponse {
  lesson: Lesson;
}

export interface ILessonByIdRequest {
  record: {id?: string[] | string | undefined; slug?: string};
}

export const LESSON = gql`
  query getLesson($record: StringIdOrSlug!) {
    lesson(record: $record) {
      id
      title
      description
      rate
      LessonContents {
        id
        content
      }
      Homework {
        id
        title
        description
        type
        status
      }
    }
  }
`;
