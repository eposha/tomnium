import {gql} from '@apollo/client';

export const GiftFragment = gql`
  fragment GiftFragment on Gift {
    id
    title
    description
    tariffIds
    Document {
      id
    }
    Tariff {
      Product {
        Thread {
          id
          courseId
        }
        Consultation {
          id
        }
        Plan {
          id
        }
      }
    }
  }
`;
