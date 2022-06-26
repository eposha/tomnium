import {useMutation} from '@apollo/client';
import {
  HOMEWORK_RESULT_CALCULATE,
  IHomeworkResultCalculateResponse,
  IHomeworkResultCalculateRequest,
} from '@/mutations/homeworks/homeworkResultCalculate';

export const useHomeworkResultCalculate = () => {
  const [homeworkResultCalculate, {loading}] = useMutation<
    IHomeworkResultCalculateResponse,
    IHomeworkResultCalculateRequest
  >(HOMEWORK_RESULT_CALCULATE);

  return {
    homeworkResultCalculate,
    loading,
  };
};
