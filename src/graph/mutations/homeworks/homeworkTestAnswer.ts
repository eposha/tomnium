import {gql} from '@apollo/client';

export const HOMEWORK_TEST_ANSWER = gql`
  mutation homeworkTestQuestionOptionCreate($optionId: Int!) {
    homeworkTestQuestionOptionCreate(optionId: $optionId)
  }
`;
