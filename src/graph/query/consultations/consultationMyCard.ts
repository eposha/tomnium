import { gql } from '@apollo/client';
export const CONSULTATION_MY_CARD = gql`
 query consultationMy{
  consultationsMy{
    Consultant{
      fullName
      avatar{
        path
      }
    }
    Appointments{
      id
      startAt
      consultationId
    }
  }
 }
`