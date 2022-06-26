import {gql} from '@apollo/client';

export interface IChangePasswordRequest {
  currentPassword?: string;
  newPassword?: string;
}

export interface IChangePasswordResponse {
  passwordChange: {
    token: string;
  };
}

export const CHANGE_PASSWORD = gql`
  mutation passwordChange($currentPassword: String!, $newPassword: String!) {
    passwordChange(
      currentPassword: $currentPassword
      newPassword: $newPassword
    ) {
      token
    }
  }
`;

export interface IForgotPasswordResponse {
  passwordForgotConfirm: {
    token: string;
  };
}

export interface IForgotPasswordRequest {
  forgotToken?: string;
  newPassword?: string;
}

export const FORGOT_PASSWORD = gql`
  mutation passwordForgotConfirm($forgotToken: String!, $newPassword: String!) {
    passwordForgotConfirm(
      forgotToken: $forgotToken
      newPassword: $newPassword
    ) {
      token
    }
  }
`;
