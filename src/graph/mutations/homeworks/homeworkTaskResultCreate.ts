import {gql} from '@apollo/client';

export const HOMEWORK_TASK_RESULT_CREATE = gql`
  mutation homeworkTaskResultCreate($taskId: Int!) {
    homeworkTaskResultCreate(taskId: $taskId)
  }
`;
