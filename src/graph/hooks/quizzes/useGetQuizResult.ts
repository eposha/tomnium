import {useQuery} from '@apollo/client';

import {
  GET_QUIZ_RESULT,
  IGetQuizResultResponse,
} from '@/query/quizzes/getQuizResult';

export const useGetQuizResult = (variables: {quizId?: string | string[]}) => {
  const {data, loading} = useQuery<IGetQuizResultResponse>(GET_QUIZ_RESULT, {
    variables,
    skip: !variables.quizId,
  });

  return {
    quizResult: data?.quizResult || null,
    loading,
  };
};
