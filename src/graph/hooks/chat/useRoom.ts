import {useLazyQuery} from '@apollo/client';

import {ROOM} from '@/query/chat';
import {Room} from 'src/graphql.schema';

export interface IRoomResponse {
  room: Room;
}

const useMessages = () => {
  const [getRoom, {loading, error, data}] = useLazyQuery<IRoomResponse>(ROOM);
  return {
    getRoom,
    room: data?.room || {},
    loading,
    error,
  };
};

export default useMessages;
