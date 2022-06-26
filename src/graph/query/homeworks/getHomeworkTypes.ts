import { gql } from '@apollo/client';

export const GET_HOMEWORK_INFO = gql`
   query course($record: StringIdOrSlug!){
    course(record: $record){
       Authors {
        fullName
        regalia
        avatar {
         path
        }
      }
      OwnThread{
       id
       completionRate
       Modules {
          Lessons {
            id
            title
            Homework {
              type
            }
          }
        }
      }
    }
   }
`;
