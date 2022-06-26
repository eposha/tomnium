import {gql} from '@apollo/client';
import {HomeworkFragment} from './homework';

export const LessonFragment = gql`
  fragment LessonFragment on Lesson {
    id
    title
    description
    active
    availableByDate
    availabilityDate
    availableByPrevCompleted
    isAvailable
    rate
    completionRate
    createdAt
    updatedAt
    homeworksCount
    availableHomeworkCount
    UserLessonProgress {
      progress
      efficiency
    }
    Homework {
      ...HomeworkFragment
    }
  }
  ${HomeworkFragment}
`;
