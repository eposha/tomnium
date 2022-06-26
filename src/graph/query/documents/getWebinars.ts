import {gql} from '@apollo/client';

const GET_WEBINARS = gql`
  query getlive{
   liveWebinars{
     Documents{
       id
       title
       description
       startDate
       studentsCount
       imageWeb{
         path
         fileName
       }
     }
   }
  }
`;

export default GET_WEBINARS;
