import {gql} from '@apollo/client';

export interface IResetPasswordRequest {
  email?: string;
}

export const RESET_PASSWORD = gql`
  mutation passwordForgotRequest($email: String!) {
    passwordForgotRequest(email: $email) {
      token
    }
  }
`;
