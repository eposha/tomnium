import {
  GET_HOMEWORK_COMPLETED_TASKS,
  IHomeworkCompletedTaskResponse,
} from '@/query/homeworks/getHomeworkCompletedTasks';
import {useQuery} from '@apollo/client';

export const useHomeworkCompletedTasks = (
  homeworkId: string[] | string | undefined,
) => {
  const {data, loading, refetch} = useQuery<IHomeworkCompletedTaskResponse>(
    GET_HOMEWORK_COMPLETED_TASKS,
    {variables: {homeworkId}},
  );

  return {
    completedTasks: data?.homeworkTasks || [],
    loading,
    refetch,
  };
};
