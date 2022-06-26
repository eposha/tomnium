import {EntityName} from 'src/graphql.schema';
import {gql} from '@apollo/client';

export interface INextStepResponse {
  nextLearningStep: {
    entityName: EntityName;
    entityId: string;
  };
}

export interface INextStepRequest {
  courseId?: string[] | string;
}

export const NEXT_LEARNING_STEP = gql`
  query nextLearningStep($courseId: String!) {
    nextLearningStep(courseId: $courseId) {
      entityName
      entityId
    }
  }
`;
