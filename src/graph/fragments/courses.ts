import {MediaFragment} from '@/fragments/media';
import {gql} from '@apollo/client';
import {ThreadFragment} from './thread';

export const CourseFragment = gql`
  fragment CourseFragment on Course {
    id
    title
    description
    label
    studentsCount
    isFavorite
    seoTitle
    seoDescription
    status
    slug
    imageList {
      ...MediaFragment
    }
    usersImages {
      ...MediaFragment
    }
    Threads {
      id
      title
      availableActions
    }
    DefaultThread {
      ...ThreadFragment
    }
    OwnThread {
      ...ThreadFragment
    }
  }
  ${MediaFragment}
  ${ThreadFragment}
`;
