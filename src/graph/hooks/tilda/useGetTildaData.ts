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
