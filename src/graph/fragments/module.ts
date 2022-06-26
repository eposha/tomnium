import {gql} from '@apollo/client';

export const ModuleFragment = gql`
  fragment ModuleFragment on Module {
    id
    title
    description
    availableByDate
    availabilityDate
    isAvailable
    homeworksCount
    isFree
    completionRate
    lessonsCount
    completionRate
    UserModuleProgress {
      progress
      efficiency
    }
  }
`;
