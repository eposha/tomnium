import {gql} from '@apollo/client';

const NEXT_LESSONS = gql`
   query nextLessons {
    nextLessons {
      id
      title
      description

      Course {
        id
        title
        description
        lessonsCount
        totalHomeworks
        imageWeb {
          path
          fileName
        }
      }
    }
   }
`;

export default NEXT_LESSONS;
