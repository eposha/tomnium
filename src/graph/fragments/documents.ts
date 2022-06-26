import {gql} from '@apollo/client';
import {MediaFragment} from './media';

export const DocumentsFragment = gql`
  fragment DocumentsFragment on Document {
    id
    title
    description
    label
    chatCreated
    Course {
      id
      title
      description
      label
      studentsCount
      imageList {
        ...MediaFragment
      }
      learnDuration {
        years
        months
        weeks
        days
        hours
        minutes
        seconds
      }
      Threads {
        startSubmissionDate
      }
      Authors {
        id
        fullName
        regalia
        avatar {
          ...MediaFragment
        }
      }
    }
    durationLabel {
      years
      months
      weeks
      days
      hours
      minutes
      seconds
    }
    quizQuestionCount
    index
    type
    startDate
    publishDate
    externalVideoUrl
    active
    visibleUntil
    visibleSince
    seoTitle
    seoDescription
    isFavorite
    Author {
      fullName
      description
      avatar {
        ...MediaFragment
      }
      regalia
      type
      landingUrl
      index
    }
    imageList {
      ...MediaFragment
    }
  }
  ${MediaFragment}
`;
