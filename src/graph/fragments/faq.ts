import {gql} from '@apollo/client';

export const FaqFragment = gql`
  fragment FaqFragment on Faq {
    id
    title
    FaqOptions {
      id
      index
      title
      body
    }
  }
`;
