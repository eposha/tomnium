import {gql} from '@apollo/client';

export const LanguageFragment = gql`
  fragment LanguageFragment on Language {
    id
    name
    nativeName
    code
    index
  }
`;
