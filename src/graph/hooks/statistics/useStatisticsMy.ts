import {getIsToken} from '@/helpers/getIsToken';
import {
  GET_STATISTICS_MY,
  IStatisticsMyResponse,
} from '@/query/statistics/getStatisticsMy';
import {useQuery} from '@apollo/client';

export const useStatisticsMy = () => {
  const isToken = getIsToken();

  const {data, loading, error} = useQuery<IStatisticsMyResponse>(
    GET_STATISTICS_MY,
    {skip: !isToken, fetchPolicy: 'no-cache'},
  );

  return {
    statisticsMy: data?.statisticsMy || null,
    error,
    loading,
  };
};
