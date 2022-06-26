import {gql} from '@apollo/client';

export const GET_COURSE_AUTHOR = gql`
  query courseAuthor($id: string) {
   course(record: {id: $id}) {
     Authors {
       regalia
       fullName
       avatar
   }
  }
}
`