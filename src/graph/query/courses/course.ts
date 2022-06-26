import {gql} from '@apollo/client';

import {ICourse} from '@/types/courses';

import {CourseFragment} from '@/fragments/courses';
import {ContentBlockFragment} from '@/fragments/contentBlock';
import {LearnDurationFragment} from '@/fragments/learnDuration';
import {MediaFragment} from '@/fragments/media';
import {FeedbackFragment} from '@/fragments/feedback';
import {FaqFragment} from '@/fragments/faq';

export interface IGetCourseByIdResponse {
  course: ICourse;
}

export const GET_COURSE = gql`
  query course($record: StringIdOrSlug!) {
    course(record: $record) {
      ...CourseFragment
      totalModules
      totalHomeworks
      imageWeb {
        ...MediaFragment
      }
      imageMob {
        ...MediaFragment
      }
      CourseContent {
        ...ContentBlockFragment
      }
      learnDuration {
        ...LearnDurationFragment
      }
      CourseFeedbacks {
        ...FeedbackFragment
      }
      Faq {
        ...FaqFragment
      }
      Authors {
        id
        fullName
        regalia
        avatar {
          path
        }
      }
    }
  }
  ${CourseFragment}
  ${ContentBlockFragment}
  ${LearnDurationFragment}
  ${MediaFragment}
  ${FeedbackFragment}
  ${FaqFragment}
`;
