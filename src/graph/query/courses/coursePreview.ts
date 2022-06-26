import {gql} from '@apollo/client';

import {ICourse} from '@/types/courses';

import {CourseFragment} from '@/fragments/courses';
import {ContentBlockFragment} from '@/fragments/contentBlock';
import {LearnDurationFragment} from '@/fragments/learnDuration';
// import {GiftFragment} from '@/fragments/gift';
import {ThreadFragment} from '@/fragments/thread';
import {MediaFragment} from '@/fragments/media';
import {FeedbackFragment} from '@/fragments/feedback';
import {FaqFragment} from '@/fragments/faq';

export interface IGetCourseByIdResponse {
  coursePreview: ICourse;
}

export const GET_COURSE_PREVIEW = gql`
  query coursePreview($id: String!, $preview: CoursePreview!) {
    coursePreview(id: $id, preview: $preview) {
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
      Threads {
        ...ThreadFragment
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
  ${ThreadFragment}
  ${MediaFragment}
  ${FeedbackFragment}
  ${FaqFragment}
`;
