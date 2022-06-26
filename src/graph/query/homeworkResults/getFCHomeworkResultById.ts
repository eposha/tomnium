import {ContentBlockFragment} from '@/fragments/contentBlock';
import {MediaFragment} from '@/fragments/media';
import {IHomework} from '@/types/homework';
import {IUser} from '@/types/user';
import {gql} from '@apollo/client';
import {Scalars} from 'src/graphql.schema';

export interface IHomeworkResultsRequest {
  id: number;
}

export interface IHomeworkResultsResponse {
  FCHomeworkResultById: {
    id: number;
    score: number;
    content: Scalars['GraphQLJSON'];
    createdAt: Date;
    chatCreated: boolean;
    completed: boolean;
    Homework: IHomework;
    User: IUser;
  };
}

export const GET_FC_HOMEWORK_RESULT_BY_ID = gql`
  query FCHomeworkResultById($id: Int!) {
    FCHomeworkResultById(id: $id) {
      id
      score
      content
      createdAt
      chatCreated
      completed
      Homework {
        id
        title
        maxScore
        description
        HomeworkFluentContent {
          ...ContentBlockFragment
        }
        HomeworkContent {
          ...ContentBlockFragment
        }
      }
      User {
        id
        fullName
        phone
        email
        avatar {
          ...MediaFragment
        }
        Country {
          id
          name
        }
        City {
          id
          name
        }
        Language {
          id
          name
        }
        timezone
      }
    }
  }
  ${MediaFragment}
  ${ContentBlockFragment}
`;
