import {gql} from '@apollo/client';
import {LanguageFragment} from './language';

export const ContentBlockFragment = gql`
  fragment ContentBlockFragment on Content {
    id
    Language {
      ...LanguageFragment
    }
    content
  }
  ${LanguageFragment}
`;
