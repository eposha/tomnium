import {
  GET_ROOM_BY_ID,
  IGetRoomByIdRequest,
  IGetRoomByIdResponse,
} from '@/query/chat/getRoomById';
import {useQuery} from '@apollo/client';
import {EntityName} from 'src/graphql.schema';

export const useRoomById = (record: {
  entityId?: string;
  entityName?: EntityName;
}) => {
  const {data, loading, error} = useQuery<
    IGetRoomByIdResponse,
    IGetRoomByIdRequest
  >(GET_ROOM_BY_ID, {
    //@ts-ignore
    variables: {record},
    skip: !record.entityId || !record.entityName,
  });

  return {room: data?.room || null, loading, error};
};
