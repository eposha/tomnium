import {gql} from '@apollo/client';


// export interface IGetThreadByIdResponse {
//   threadById: IThread;
// }

export const GET_STATISTIC_SURVEY = gql`
  query statisticsSurvey($id: String!) {
   surveyStatistics(id: $id) {
     id
     title
     description
     
     Users {
      id
      fullName
      }

     SurveyQuestions {
       id
       type
       title
       description
       numbersStatistics
       answersCount

       SurveyOptions {
        percent
        answersCount
        id
        title
      }

       SurveyQuestionResults {
         User {
           id
           fullName
         }
         id
         optionId
         freeAnswer
         numberAnswer
       }
     }
   }
  }
`;
