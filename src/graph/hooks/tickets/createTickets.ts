import { TICKET_CREATE } from '@/mutations/tickets/ticketCreate';
import { useMutation } from '@apollo/client';
export const useCreateTicket = () => {
 const [createTicket] = useMutation<any>(TICKET_CREATE);
 return {createTicket}
}