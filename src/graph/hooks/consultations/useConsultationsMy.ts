import {
  CONSULTATIONS_MY_QUERY,
  IConsultationsMyResponse,
} from '@/query/consultations';
import {getIsToken} from '@/helpers/getIsToken';
import {useQuery} from '@apollo/client';
import { CONSULTATION_MY_CARD } from '@/query/consultations/consultationMyCard';

export const useConsultationsMy = (isCard=false) => {
  const isToken = getIsToken();
  const {data, loading, error} = useQuery<IConsultationsMyResponse>(
    isCard ? CONSULTATION_MY_CARD : CONSULTATIONS_MY_QUERY,
    {skip: !isToken, fetchPolicy: 'no-cache'},
  );

  return {
    consultationsMy: data?.consultationsMy || [],
    error,
    loading,
  };
};
