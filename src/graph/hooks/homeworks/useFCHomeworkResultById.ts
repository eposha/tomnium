import {
  GET_FC_HOMEWORK_RESULT_BY_ID,
  IHomeworkResultsResponse,
} from '@/query/homeworkResults/getFCHomeworkResultById';
import {useQuery} from '@apollo/client';

export const useFCHomeworkResultById = (id: number) => {
  const {data, loading} = useQuery<IHomeworkResultsResponse>(
    GET_FC_HOMEWORK_RESULT_BY_ID,
    {
      variables: {id},
    },
  );
  return {
    homeworkResult: data?.FCHomeworkResultById || null,
    loading,
  };
};
