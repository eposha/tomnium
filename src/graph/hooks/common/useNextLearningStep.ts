import {
  INextStepRequest,
  INextStepResponse,
  NEXT_LEARNING_STEP,
} from '@/query/common/nextLearningStep';
import {useQuery} from '@apollo/client';

export const useNextLearningStep = (courseId?: string[] | string) => {
  const {data, loading} = useQuery<INextStepResponse, INextStepRequest>(
    NEXT_LEARNING_STEP,
    {variables: {courseId}},
  );

  return {
    nextStep: data?.nextLearningStep || null,
    loading,
  };
};
