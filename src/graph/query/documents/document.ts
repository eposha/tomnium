import {gql} from '@apollo/client';
import {MediaFragment} from '@/fragments/media';

const DOCUMENT_BY_ID = gql`
  query documentById($id: String!) {
    documentById(id: $id) {
      id
      title
      description
      label
      courseId
      chatCreated
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
      imageWeb {
        ...MediaFragment
      }
      imageMob {
        ...MediaFragment
      }
      imageList {
        ...MediaFragment
      }
      DocumentContents {
        id
        Language {
          id
          name
          nativeName
          code
          index
        }
        content
      }
      Author {
        id
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
      Categories {
        id
        name
        displayName
        type
        index
        isGeneral
      }
    }
  }
  ${MediaFragment}
`;

export default DOCUMENT_BY_ID;
