import {gql} from '@apollo/client';
import {HelpFormCreateInput} from 'src/graphql.schema';

export interface IHelpFormRequest {
  record: {
    fullName: string;
    email: string;
    phone: string;
    tariffId: number;
    message: string;
  };
}

export interface IHelpFormResponse {
  helpFormCreate: HelpFormCreateInput;
}

export const SEND_HELP_FORM = gql`
  mutation helpFormCreate($record: HelpFormCreateInput!) {
    helpFormCreate(record: $record)
  }
`;
