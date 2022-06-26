import {HOMEWORK_TASK_RESULT_CREATE} from '@/mutations/homeworks/homeworkTaskResultCreate';
import {GET_HOMEWORK_COMPLETED_TASKS} from '@/query/homeworks/getHomeworkCompletedTasks';
import {useMutation} from '@apollo/client';

const useHomeworkTaskResultCreate = () => {
  const [onHomeworkTaskResultCreate] = useMutation<
    {homeworkTaskResultCreate: boolean},
    {taskId: number}
  >(HOMEWORK_TASK_RESULT_CREATE, {
    refetchQueries: [GET_HOMEWORK_COMPLETED_TASKS],
  });

  const handleTaskHomeworkResultCreate = async (
    taskId: number,
  ): Promise<void> => {
    try {
      await onHomeworkTaskResultCreate({
        variables: {
          taskId,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleTaskHomeworkResultCreate,
  };
};

export default useHomeworkTaskResultCreate;
