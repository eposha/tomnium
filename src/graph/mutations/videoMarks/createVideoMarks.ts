import {gql} from '@apollo/client';
import {UserVideoMarkCreateInput} from 'src/graphql.schema';

export interface ICreateMarkRequest {
  record: UserVideoMarkCreateInput;
}

export const CREATE_VIDEO_MARK = gql`
  mutation userVideoMarkCreate($record: UserVideoMarkCreateInput!) {
    userVideoMarkCreate(record: $record) {
      id
      videoId
      timing
      text
    }
  }
`;
