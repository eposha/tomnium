import {useQuery} from '@apollo/client';
import {CONSULTATION_QUERY, IConsultationResponse} from '@/query/consultations';

export const useConsultation = (record: {id?: string; slug?: string}) => {
  const {data, loading, refetch} = useQuery<IConsultationResponse>(
    CONSULTATION_QUERY,
    {
      variables: {record},
      skip: !record.id && !record.slug,
    },
  );
  return {
    consultation: data?.consultation || null,
    loading,
    refetch,
  };
};
