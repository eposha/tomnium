import {gql} from '@apollo/client';

import {IQuizRecommendationGroup} from '@/types/quiz';
import {MediaFragment} from '@/fragments/media';

export interface IGetGroupsResponse {
  quizQuestionOptionGroups: {
    QuizQuestionOptionGroups: IQuizRecommendationGroup[];
  };
}

export const GET_QUIZ_RECOMMENDATION_GROUPS = gql`
  query getQuizQuestionOptionGroups {
    quizQuestionOptionGroups {
      QuizQuestionOptionGroups {
        id
        title
        description
        iconEnabled {
          ...MediaFragment
        }
        iconDisabled {
          ...MediaFragment
        }
      }
    }
  }
  ${MediaFragment}
`;
