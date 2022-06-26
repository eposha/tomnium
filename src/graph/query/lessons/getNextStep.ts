import {gql} from '@apollo/client';

export const GET_NEXT_STEP = gql`
  query nextLearningStep($courseId: String!) {
   nextLearningStep(courseId: $courseId) {
     entityName
     entityId
    }
  }
`;
