import {gql} from '@apollo/client';

export interface INextLessonResponse {
  nextLesson: {
    id: string;
  };
}

export interface INextLessonRequest {
  record: {id?: string[] | string};
}

export const GET_NEXT_LESSON = gql`
  query getNextLesson($record: StringIdOrSlug!) {
    nextLesson(record: $record) {
      id
    }
  }
`;
