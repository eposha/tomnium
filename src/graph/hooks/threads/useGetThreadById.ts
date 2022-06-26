import {useLazyQuery, useQuery} from '@apollo/client';

import {
  GET_THREAD_BY_ID,
  IGetThreadByIdResponse,
} from '@/query/threads/threadById';

export const useGetThreadById = (variables?: {id?: string | string[]}) => {
  const {data, loading, refetch} = useQuery<IGetThreadByIdResponse>(
    GET_THREAD_BY_ID,
    {
      variables,
      skip: !variables?.id,
    },
  );

  return {
    thread: data?.threadById || null,
    loading,
    refetch,
  };
};

export const useLazyGetThreadById = () => {
  const [getThread, {data, loading}] =
    useLazyQuery<IGetThreadByIdResponse>(GET_THREAD_BY_ID);

  return {
    thread: data?.threadById || null,
    loading,
    getThread,
  };
};
