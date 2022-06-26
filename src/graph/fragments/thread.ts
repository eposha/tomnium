import {gql} from '@apollo/client';
import {GiftFragment} from './gift';
import {HomeworkFragment} from './homework';
import {LearnDurationFragment} from './learnDuration';
import {LessonFragment} from './lesson';
import {MediaFragment} from './media';
import {ModuleFragment} from './module';
import {ProductFragment} from './product';

export const ThreadFragment = gql`
  fragment ThreadFragment on Thread {
    id
    title
    description
    startSubmissionDate
    endSubmissionDate
    totalVideos
    totalAudios
    homeworksCount
    availableActions
    modulesCount
    lessonsCount
    freeTitle
    freeDescription
    freeImage {
      ...MediaFragment
    }
    image {
      ...MediaFragment
    }
    learnDuration {
      ...LearnDurationFragment
    }
    Authors {
      id
      fullName
      avatar {
        path
      }
      regalia
    }
    Product {
      ...ProductFragment
      Gifts {
        ...GiftFragment
      }
    }
    Modules {
      ...ModuleFragment
      Homework {
        ...HomeworkFragment
      }
      Lessons {
        ...LessonFragment
      }
    }
    MyTariff {
      id
    }
    UserThreadProgress {
      efficiency
      progress
    }
  }
  ${LearnDurationFragment}
  ${MediaFragment}
  ${ProductFragment}
  ${ModuleFragment}
  ${HomeworkFragment}
  ${LessonFragment}
  ${GiftFragment}
`;
