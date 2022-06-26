import ROOM_ID from '@/query/chat/roomId';
import {useQuery} from '@apollo/client';
import {EntityName} from 'src/graphql.schema';

const useRoomId = (
  record: {
    entityId?: string;
    entityName: EntityName;
  },

  isOwnThread: boolean,
) => {
  const {data, loading} = useQuery<any>(ROOM_ID, {
    variables: {
      record: record,
    },
    skip: isOwnThread || !record.entityId,
  });

  return {data, loading};
};

export default useRoomId;
