import {gql} from '@apollo/client';

export interface IGenerateUserResponse {
  generateUser: {
    token: string;
  };
}

export const GENERATE_USER = gql`
  mutation generateUser {
    generateUser {
      token
    }
  }
`;
