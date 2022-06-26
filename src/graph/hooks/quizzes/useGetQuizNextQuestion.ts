import {useMutation} from '@apollo/client';

import {
  GET_QUIZ_NEXT_QUESTION,
  IGetQuizNextQuestionRequest,
  IGetQuizNextQuestionResponse,
} from '@/mutations/quizzes/getQuizNextQuestion';

export const useGetQuizNextQuestion = () => {
  const [getQuestion, {data, loading}] = useMutation<
    IGetQuizNextQuestionResponse,
    IGetQuizNextQuestionRequest
  >(GET_QUIZ_NEXT_QUESTION);

  return {
    question: data?.quizNextQuestion || null,
    getQuestion,
    loading,
  };
};
