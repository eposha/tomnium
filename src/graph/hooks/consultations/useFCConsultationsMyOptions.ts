import {useQuery} from '@apollo/client';

import {
  GET_FC_CONSULTATIONS_MY_OPTIONS,
  IFCConsultationsMyOptionsResponse,
} from '@/query/consultations/FCConsultationsMyOptions';

export const useGetFCConsultationsMyOptions = () => {
  const {data, loading} = useQuery<IFCConsultationsMyOptionsResponse>(
    GET_FC_CONSULTATIONS_MY_OPTIONS,
    {
      fetchPolicy: 'cache-and-network',
    },
  );

  return {
    consultationsOptions: data?.FCConsultationsMy.Consultations ?? [],
    loading,
  };
};
