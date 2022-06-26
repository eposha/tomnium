import { gql } from '@apollo/client';
import { MyTicketsFilterInput } from 'src/graphql.schema';

export interface IGetTicketsRequest {
 filter?: MyTicketsFilterInput;
 limit?: number;
 offset?: number
}

export const GET_TICKETS = gql`
  query tickets ($filter: MyTicketsFilterInput, $limit: Int, $offset: Int) {
   ticketsMy (filter: $filter, limit: $limit, offset: $offset) {
     Tickets {
       id
       title
       body
       closed
     }
   }
  }
`