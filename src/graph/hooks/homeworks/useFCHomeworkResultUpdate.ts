import {
  FC_HOMEWORK_RESULT_UPDATE,
  IFCHomeworkResultUpdateRequest,
  IFCHomeworkResultUpdateResponse,
} from '@/mutations/homeworks/homeworkResultFCUpdate';
import {GET_FC_HOMEWORK_RESULT_BY_ID} from '@/query/homeworkResults/getFCHomeworkResultById';
import {useMutation} from '@apollo/client';
import {useEffect} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

const useFCHomeworkResultUpdate = (params: {
  id?: number;
  score?: number;
  maxScore?: number;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors: validateErrors},
  } = useForm({
    defaultValues: {
      score: 0,
    },
  });

  const [onFCHomeworkResultUpdate, {loading}] = useMutation<
    IFCHomeworkResultUpdateResponse,
    IFCHomeworkResultUpdateRequest
  >(FC_HOMEWORK_RESULT_UPDATE, {
    refetchQueries: [GET_FC_HOMEWORK_RESULT_BY_ID],
  });

  const {id, score, maxScore} = params || {};

  useEffect(() => {
    if (params) {
      reset({
        score: score ? score : maxScore,
      });
    }
  }, [reset]);

  const onSubmit: SubmitHandler<{score: number}> = async (record) => {
    try {
      await onFCHomeworkResultUpdate({
        variables: {
          record: {score: Number(record.score), id, completed: true},
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    register,
    //@ts-ignore
    handleSubmit: handleSubmit(onSubmit),
    validateErrors,
    loading,
  };
};

export default useFCHomeworkResultUpdate;
