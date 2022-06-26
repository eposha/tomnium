import {useQuery} from '@apollo/client';
import {
  IModuleByIdRequest,
  IModuleByIdResponse,
  MODULE,
} from '@/query/modules/getModule';
//
export const useModule = (record: {
  id?: string[] | string | undefined;
  slug?: string;
}) => {
  const {data, loading, refetch} = useQuery<
    IModuleByIdResponse,
    IModuleByIdRequest
  >(MODULE, {
    variables: {record},
    fetchPolicy: 'cache-first',
  });
  return {
    module: data?.module ?? {},
    loading,
    refetch,
  };
};
