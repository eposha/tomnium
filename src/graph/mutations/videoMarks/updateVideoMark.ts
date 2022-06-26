import {gql} from '@apollo/client';
import {UserVideoMarkUpdateInput} from 'src/graphql.schema';

export interface IUpdateMarkRequest {
  record: UserVideoMarkUpdateInput;
}

export const UPDATE_VIDEO_MARK = gql`
  mutation userVideoMarkUpdate($record: UserVideoMarkUpdateInput!) {
    userVideoMarkUpdate(record: $record) {
      id
      text
    }
  }
`;
