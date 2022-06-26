import {useMutation} from '@apollo/client';

import {RESET_QUIZ, IResetQuizRequest} from '@/mutations/quizzes/resetQuiz';

export const useResetQuiz = () => {
  const [resetQuiz, {loading}] = useMutation<IResetQuizRequest>(RESET_QUIZ);

  return {
    resetQuiz,
    loading,
  };
};
