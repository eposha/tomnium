import { GET_TICKETS} from '@/query/tickets/getMyTickets';
import { useQuery } from '@apollo/client';
import { MyTicketsFilterInput,Pagination, Ticket } from 'src/graphql.schema';

interface ITicketsMyResponse {
 ticketsMy: {
  Pagination: Pagination;
  Tickets: [Ticket] | undefined
 }
}

export const useMyTickets = (variables: {
 filter?: MyTicketsFilterInput;
 limit?: number;
 offset?: number
}) => {
 const { data, loading } = useQuery<ITicketsMyResponse>(GET_TICKETS, {
  variables
 });

 return {
  data,loading
 }

}