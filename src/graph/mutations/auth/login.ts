import {gql} from '@apollo/client';

export interface ILoginRequest {
  email?: string;
  password?: string;
}

export interface ILoginResponse {
  login: {
    token: string;
  };
}

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
