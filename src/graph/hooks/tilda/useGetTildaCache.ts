import {request} from 'graphql-request';
import useSWR from 'swr';

const fetcher = async (query: string, variables: {alias: string}) =>
  await request(process.env.NEXT_PUBLIC_GRAPH_API_URL || '', query, variables);

export const useGetTildaCache = (variables: {alias?: string}) => {
  const {alias} = variables;
  const {data, error, mutate} = useSWR(
    alias ? [GET_TILDA_PAGE, variables] : null,
    fetcher,
    {
      dedupingInterval: 1000000000,
    },
  );

  return {
    tildaData: data?.tildaPage || null,
    loading: !data && !error,
    refetch: mutate,
  };
};

export default useGetTildaCache;

import {useQuery} from '@apollo/client';

import {GET_TILDA_PAGE} from '@/query/tilda/tildaPage';

export const useGetTildaData = (record: {tildaId?: string}) => {
  const {tildaId} = record;
  const {data, loading} = useQuery(GET_TILDA_PAGE, {
    variables: {alias: tildaId},
    skip: !tildaId,
  });
  return {
    tildaData: data?.tildaPage || null,
    loading,
  };
};
