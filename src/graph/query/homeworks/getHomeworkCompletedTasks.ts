import {gql} from '@apollo/client';

export interface IHomeworkCompletedTaskResponse {
  homeworkTasks: {
    id: number;
    title: string;
    rate: number;
  }[];
}

export interface IHomeworkCompletedTaskRequest {
  id: string;
}

export const GET_HOMEWORK_COMPLETED_TASKS = gql`
  query homeworkTasks($homeworkId: String!) {
    homeworkTasks(homeworkId: $homeworkId) {
      id
      title
      rate
    }
  }
`;
