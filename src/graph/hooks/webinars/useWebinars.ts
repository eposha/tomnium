import GET_WEBINARS from '@/query/documents/getWebinars';
import { useQuery } from '@apollo/client';
export const useWebinars = () => {
 const { data, loading } = useQuery<any>(GET_WEBINARS);
 return {webinars: data?.liveWebinars?.Documents,loading}
}