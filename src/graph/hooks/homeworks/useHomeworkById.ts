import {useQuery} from '@apollo/client';

import {
  IGetHomeworkByIdResponse,
  GET_HOMEWORK_BY_ID,
} from '@/query/homeworks/homeworkById';

export const useHomeworkById = (id?: string | string[]) => {
  const {data, loading} = useQuery<IGetHomeworkByIdResponse>(
    GET_HOMEWORK_BY_ID,
    {
      variables: {id},
      skip: !id,
    },
  );
  return {
    homework: data?.homeworkById || null,
    loading,
  };
};
