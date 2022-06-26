import {gql} from '@apollo/client';

import {IQuizResult} from '@/types/quiz';
import {DocumentsFragment} from '@/fragments/documents';
import {CourseFragment} from '@/fragments/courses';
import {MediaFragment} from '@/fragments/media';

export interface IGetQuizResultResponse {
  quizResult: IQuizResult;
}

export const GET_QUIZ_RESULT = gql`
  query getQuizResult($quizId: String!) {
    quizResult(quizId: $quizId) {
      QuizRecommendationResults {
        id
        title
        description
        iconDisabled {
          ...MediaFragment
        }
        iconEnabled {
          ...MediaFragment
        }
        Recommendations {
          id
          text
        }
      }
      QuizRecommendedCourseResults {
        Course {
          ...CourseFragment
          imageList {
            ...MediaFragment
          }
          Threads {
            startSubmissionDate
            lessonsCount
          }
        }
      }
      QuizRecommendedDocumentResults {
        Document {
          ...DocumentsFragment
        }
      }
      QuizRecommendedConsultationResults {
        Consultation {
          id
          title
          description
          label
          duration
          image {
            ...MediaFragment
          }
          Categories {
            id
            displayName
          }
          Prices {
            withSale
            Currency {
              code
              id
            }
          }
          Languages {
            nativeName
            code
          }
        }
      }
    }
  }
  ${CourseFragment}
  ${DocumentsFragment}
  ${MediaFragment}
`;
