import {gql} from '@apollo/client';

export const ConsultationFragment = gql`
  fragment ConsultationFragment on Consultation {
    id
    seoTitle
    seoDescription
    isFavorite
    image {
      path
      isOriginal
      width
    }

    Author {
      id
      fullName
      description
      regalia
      avatar {
        path
        width
        isOriginal
      }
      type
    }
    description
    label
    Categories {
      id
      displayName
    }
    Appointments {
      id
      startAt
      bookedByMe
      url
      active
    }
    duration
    Languages {
      nativeName
      code
    }
    ticketsCount
    title
    MeetingMethod {
      id
      name
      icon {
        path
        isOriginal
      }
    }
  }
`;
