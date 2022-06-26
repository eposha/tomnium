import {useMutation} from '@apollo/client';
import {HomeworkResult, HomeworkResultUpdateInput} from 'src/graphql.schema';
import {HOMEWORK_RESULT_UPDATE} from 'src/graph/mutations/homeworks';

const useHomeworkResultUpdate = () => {
  const [
    onHomeworkResultUpdate,
    {
      data: homeworkResultUpdate,
      loading: loadingHomeworkResultUpdate,
      error: errorHomeworkResultUpdate,
    },
  ] = useMutation<
    {homeworkResultUpdate: HomeworkResult},
    {record: HomeworkResultUpdateInput}
  >(HOMEWORK_RESULT_UPDATE);

  const handleHomeworkResultUpdate = async (
    record: HomeworkResultUpdateInput,
  ): Promise<void> => {
    try {
      await onHomeworkResultUpdate({
        variables: {
          record,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleHomeworkResultUpdate,
    homeworkResultUpdate,
    loadingHomeworkResultUpdate,
    errorHomeworkResultUpdate,
  };
};

export default useHomeworkResultUpdate;
