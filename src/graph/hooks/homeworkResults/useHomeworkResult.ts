import {useQuery} from '@apollo/client';

import {
  IGetHomeworkResultResponse,
  GET_HOMEWORK_RESULT,
} from '@/query/homeworkResults/getHomeworkResult';

import {
  GET_HOMEWORKS_TEST_RESULT,
  IHomeworkTestResultsResponse,
  IHomeworkTestResultsRequest,
} from '@/query/homeworkResults/getHomeworkResultById';

export const useHomeworkResult = (homeworkId?: string | string[]) => {
  const {data, loading, refetch} = useQuery<IGetHomeworkResultResponse>(
    GET_HOMEWORK_RESULT,
    {
      variables: {homeworkId},
      skip: !homeworkId,
    },
  );
  return {
    homeworkResult: data?.homeworkResult || null,
    loading,
    refetch,
  };
};

export const useHomeworkTestResult = (homeworkId?: string) => {
  const {data, loading} = useQuery<
    IHomeworkTestResultsResponse,
    IHomeworkTestResultsRequest
  >(GET_HOMEWORKS_TEST_RESULT, {
    variables: {homeworkId},
    skip: !homeworkId,
  });

  return {
    homeworkResult: data?.homeworkResult || null,
    loading,
  };
};
