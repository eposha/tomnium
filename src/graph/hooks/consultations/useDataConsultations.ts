import {useQuery} from '@apollo/client';
import {
  CONSULTATIONS_QUERY,
  IConsultationsResponse,
} from '@/query/consultations';
import {ConsultationsFilterInput} from 'src/graphql.schema';

export const useDataConsultations = (variables: {
  filter: ConsultationsFilterInput;
  offset?: number | number[];
}) => {
  const {data, loading, refetch} = useQuery<IConsultationsResponse>(
    CONSULTATIONS_QUERY,
    {
      variables,
    },
  );

  return {
    consultations: data?.consultations,
    loading,
    refetch,
  };
};
