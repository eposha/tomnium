import { gql } from '@apollo/client';

export const TICKET_CREATE = gql`
mutation ticketCreate($record: TicketCreateInput!){
 ticketCreate(record: $record) {
   id
   title
 }
}
`