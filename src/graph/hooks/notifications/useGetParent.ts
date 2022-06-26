import {useLazyQuery} from '@apollo/client';
import {
  GET_PARENT,
  IGetParentResponse,
  IGetParentRequest,
} from '@/query/notifications/getParent';

export const useGetParent = () => {
  const [getParent, {loading, error, data}] = useLazyQuery<
    IGetParentResponse,
    IGetParentRequest
  >(GET_PARENT);

  return {
    getParent,
    parent: data?.entityGetParent || null,
    loading,
    error,
  };
};
