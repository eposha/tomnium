import {gql} from '@apollo/client';

export const PROFILE_UPDATE = gql`
  mutation profileUpdate($record: ProfileUpdateInput!) {
    profileUpdate(record: $record) {
      fullName
    }
  }
`;
