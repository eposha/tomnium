import {gql} from '@apollo/client';
import {Module} from 'src/graphql.schema';

export interface IModuleByIdResponse {
  module: Module;
}

export interface IModuleByIdRequest {
  record: {id?: string[] | string | undefined; slug?: string};
}

export const MODULE = gql`
  query getModule($record: StringIdOrSlug!) {
    module(record: $record) {
      id
      courseId
      title
      description
      courseId
      threadId
      index
      root
      active
      lessonsCount
      homeworksCount
      availableByDate
      availabilityDate
      isAvailable
      availableByPrevCompleted
      isFree
      UserModuleProgress {
        progress
        efficiency
      }
      ModuleContents {
        content
      }
      Homework {
        id
        title
        status
        type
      }
      Lessons {
        id
        title
        description
        isAvailable
        availableByDate
        availabilityDate
        UserLessonProgress {
          progress
          efficiency
        }
      }
    }
  }
`;
