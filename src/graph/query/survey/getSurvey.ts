import {gql} from '@apollo/client';

export const GET_SURVEY = gql`
query survey ($threadId: String!){
 survey(threadId: $threadId) {
   id
   title
   description
   SurveyQuestions {
     id
     title
     description
     type
     SurveyOptions {
       id
       title
       index
       hasFluentAnswer
     }
   }
 }
}
`