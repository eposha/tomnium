import {gql} from '@apollo/client';

export const GET_SURVEY_RESULTS = gql`
query surresults($surveyId: String!){
 surveyQuestionResults(surveyId: $surveyId){
   optionId
 }
}
`