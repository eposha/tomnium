import {MediaFragment} from '@/fragments/media';
import {gql} from '@apollo/client';

export const AuthorFragment = gql`
  fragment AuthorFragment on Author {
    id
    fullName
    regalia
    avatar {
      ...MediaFragment
    }
  }
  ${MediaFragment}
`;
