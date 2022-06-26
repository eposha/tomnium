import {ConsultationFragment} from '@/fragments/consultation';
import {CourseFragment} from '@/fragments/courses';
import {DocumentsFragment} from '@/fragments/documents';
import {ProductFragment} from '@/fragments/product';
import {gql} from '@apollo/client';

export const GET_FAVORITES = gql`
  query favorites {
    myFavorites {
      Documents {
        ...DocumentsFragment
      }
      Courses {
        ...CourseFragment
      }
      Consultations {
        ...ConsultationFragment
        Product {
          ...ProductFragment
        }
      }
    }
  }
  ${DocumentsFragment}
  ${CourseFragment}
  ${ConsultationFragment}
  ${ProductFragment}
`;
