import {useQuery} from '@apollo/client';

import {
  GET_HOMEWORK_TEST,
  IHomeworkTestResponse,
  IHomeworkTestRequest,
} from '@/query/homeworks/test/getHomeworkTest';

export const useGetHomeworkTest = (id?: string) => {
  const {data, loading} = useQuery<IHomeworkTestResponse, IHomeworkTestRequest>(
    GET_HOMEWORK_TEST,
    {
      skip: !id,
      variables: {id},
    },
  );

  return {
    homework: data?.homeworkById,
    loading,
  };
};
