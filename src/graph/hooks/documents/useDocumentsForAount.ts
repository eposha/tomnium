import {useQuery} from '@apollo/client';

import {
  GET_DOCUMENTS_FOR_AMOUNT,
  IDocumentsForAmountResponse,
} from '@/query/documents/documentsForAmount';

export const useGetDocumentsForAmount = () => {
  const {data, loading} = useQuery<IDocumentsForAmountResponse>(
    GET_DOCUMENTS_FOR_AMOUNT,
    {
      variables: {
        limit: 10000,
      },
    },
  );

  return {
    documentsLength: data?.documents?.Documents?.length ?? 0,
    loading,
  };
};
