import {useQuery} from '@apollo/client';

import {
  GET_HOMEWORKS_RESULTS,
  IHomeworkResultsResponse,
} from '@/query/homeworkResults/getHomeworksResults';

export const useGetHomeworksResults = (variables: {
  offset?: number | number[];
  limit?: number | number[];
  filter?: {
    threadId?: string | string[];
    onlyVip?: boolean;
  };
}) => {
  const {data, loading, refetch} = useQuery<IHomeworkResultsResponse>(
    GET_HOMEWORKS_RESULTS,
    {variables},
  );

  return {
    results: data?.homeworkResults?.HomeworkResults || [],
    pagination: data?.homeworkResults?.Pagination,
    loading,
    refetch,
  };
};
