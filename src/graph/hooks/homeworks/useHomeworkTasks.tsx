import {
  GET_HOMEWORK_TASKS,
  IHomeworkTaskResponse,
} from '@/query/homeworks/getHomeworkTasks';
import {useQuery} from '@apollo/client';

export const useHomeworkTasks = (id: string[] | string | undefined) => {
  const {data, loading, refetch} = useQuery<IHomeworkTaskResponse>(
    GET_HOMEWORK_TASKS,
    {variables: {id}},
  );

  return {
    homework: data?.homeworkById || {},
    loading,
    refetch,
  };
};
