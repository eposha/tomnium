import { gql } from '@apollo/client';
export const USER_SURVEY_RESULT = gql`
  query FCSurveyQuestionResults($surveyId: String!, $userId: String!) {
   FCSurveyQuestionResults(
     surveyId: $surveyId,
     userId: $userId
   ) {
     SurveyQuestion {
       id
      type
       title
       description
     }
     questionId
     freeAnswer
     numberAnswer
     optionId
     SurveyOption {
       id
       title
     }
   }
  }
`