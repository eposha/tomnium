import {useQuery} from '@apollo/client';

import {
  GET_QUIZ_BY_ID,
  IGetQuizByIdResponse,
} from '@/query/quizzes/getQuizById';

export const useGetQuizById = (variables: {id?: string | string[]}) => {
  const {data, loading} = useQuery<IGetQuizByIdResponse>(GET_QUIZ_BY_ID, {
    variables,
    skip: !variables.id,
  });
  return {
    quiz: data?.quizById || null,
    loading,
  };
};
