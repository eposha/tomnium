import {HomeworkFragment} from 'src/graph/fragments/homework';
import {IHomework} from '@/types/homework';
import {gql} from '@apollo/client';
import {ContentBlockFragment} from '@/fragments/contentBlock';

export interface IHomeworkTestResponse {
  homeworkById: IHomework;
}

export interface IHomeworkTestRequest {
  id?: string;
}

export const GET_HOMEWORK_TEST = gql`
  query homeworkById($id: String!) {
    homeworkById(id: $id) {
      ...HomeworkFragment
      maxScore
      HomeworkContent {
        ...ContentBlockFragment
      }
      HomeworkTestQuestions {
        id
        title
        type
        HomeworkTestQuestionContent {
          ...ContentBlockFragment
        }
        HomeworkTestQuestionOptions {
          id
          title
          right
          clarification
        }
      }
    }
  }
  ${HomeworkFragment}
  ${ContentBlockFragment}
`;
