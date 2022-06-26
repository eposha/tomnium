import {gql} from '@apollo/client';
import {LessonRateInput} from 'src/graphql.schema';

export interface ILessonRateRequest {
  record: LessonRateInput;
}

export const LESSON_RATE = gql`
  mutation lessonRate($record: LessonRateInput) {
    lessonRate(record: $record)
  }
`;
