import {useMutation} from '@apollo/client';
import {HomeworkResult, HomeworkResultCreate} from 'src/graphql.schema';
import {HOMEWORK_RESULT_CREATE} from 'src/graph/mutations/homeworks';

const useHomeworkResultCreate = () => {
  const [
    onHomeworkResultCreate,
    {
      data: homeworkResultCreate,
      loading: loadingHomeworkResultCreate,
      error: errorHomeworkResultCreate,
    },
  ] = useMutation<
    {homeworkResultCreate: HomeworkResult},
    {record: HomeworkResultCreate}
  >(HOMEWORK_RESULT_CREATE);

  const handleHomeworkResultCreate = async (
    record: HomeworkResultCreate,
  ): Promise<void> => {
    try {
      await onHomeworkResultCreate({
        variables: {
          record,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleHomeworkResultCreate,
    homeworkResultCreate,
    loadingHomeworkResultCreate,
    errorHomeworkResultCreate,
  };
};

export default useHomeworkResultCreate;
