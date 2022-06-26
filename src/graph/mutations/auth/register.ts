import {gql} from '@apollo/client';

export interface IRegistrationRequest {
  fullName?: string;
  password?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  isResident?: boolean;
  primaryLanguageId?: number;
  timezone?: string;
  birthDate?: Date;
  currencyId?: number;
}

export interface IRegistrationResponse {
  registration: {
    token: string;
  };
}

export const REGISTRATION = gql`
  mutation registration(
    $fullName: String!
    $password: String!
    $phone: String!
    $email: String!
    $avatar: String
    $isResident: Boolean
    $primaryLanguageId: Int
    $timezone: String
    $birthDate: Date
    $currencyId: Int
  ) {
    registration(
      record: {
        fullName: $fullName
        password: $password
        phone: $phone
        email: $email
        avatar: $avatar
        isResident: $isResident
        primaryLanguageId: $primaryLanguageId
        timezone: $timezone
        birthDate: $birthDate
        currencyId: $currencyId
      }
    ) {
      token
    }
  }
`;

export interface IRegistrationLinksResponse {
  directories: {
    Settings: {
      privacyPolicy: string;
      termsOfUse: string;
      publicOffer: string;
    };
  };
}

export const REGISTRATION_LINKS = gql`
  query registrationLinks {
    directories {
      Settings {
        privacyPolicy
        termsOfUse
        publicOffer
      }
    }
  }
`;
