import {useLazyQuery, useQuery} from '@apollo/client';

import {ROOMS} from '@/query/chat';
import {RoomsResponse} from 'src/graphql.schema';

export interface IRoomResponse {
  rooms: RoomsResponse;
}

const useRooms = () => {
  const [getRooms, {loading, error, data}] = useLazyQuery<IRoomResponse>(ROOMS);
  return {
    getRooms,
    rooms: data?.rooms || {},
    loading,
    error,
  };
};

export const useGetRooms = (variables: {
  limit?: number,
  offset?: number
}) => {
  const { data, loading } = useQuery<IRoomResponse>(ROOMS, {
    variables
  });
  return {data,loading};
};

export default useRooms;
