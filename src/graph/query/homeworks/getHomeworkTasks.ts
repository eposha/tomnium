import {HomeworkFragment} from 'src/graph/fragments/homework';
import {IHomeworkTypeTask} from '@/types/homework';
import {gql} from '@apollo/client';

export interface IHomeworkTaskResponse {
  homeworkById: IHomeworkTypeTask;
}

export interface IHomeworkTaskRequest {
  id: string;
}

export const GET_HOMEWORK_TASKS = gql`
  query homeworkById($id: String!) {
    homeworkById(id: $id) {
      ...HomeworkFragment
      HomeworkTasks {
        id
        title
        index
        rate
      }
    }
  }
  ${HomeworkFragment}
`;
