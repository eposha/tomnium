import {gql} from '@apollo/client';
import {MediaFragment} from './media';

export const FeedbackFragment = gql`
  fragment FeedbackFragment on Feedback {
    id
    fullName
    regalia
    text
    avatar {
      ...MediaFragment
    }
  }
  ${MediaFragment}
`;
