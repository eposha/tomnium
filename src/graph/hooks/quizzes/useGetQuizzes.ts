import {GET_QUIZZES, IGetQuizzesResponse} from '@/query/quizzes/getQuizzes';
import {useQuery} from '@apollo/client';
import {QuizzesFilterInput} from 'src/graphql.schema';

export const useGetQuizzes = (variables: {
  offset?: number | number[];
  filter?: QuizzesFilterInput;
}) => {
  const {data, loading} = useQuery<IGetQuizzesResponse>(GET_QUIZZES, {
    variables,
  });

  return {
    quizzes: data?.quizzes,
    loading,
  };
};
