import {gql} from '@apollo/client';

export interface IUserCheckResponse {
  userCheck: string[];
}

export const USER_CHECK_QUERY = gql`
  query userCheck {
    userCheck
  }
`;
