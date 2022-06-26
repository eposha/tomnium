import {useForm, SubmitHandler} from 'react-hook-form';
import {useMutation} from '@apollo/client';

import {
  GET_QUIZ_NEXT_QUESTION,
  IGetQuizNextQuestionRequest,
  IGetQuizNextQuestionResponse,
} from '@/mutations/quizzes/getQuizNextQuestion';
import {toPointerAnswerQuizQuestion} from '@/helpers/quiz';
import {NextRouter} from 'next/router';

export interface IQuizQuestionFormProps {
  answer: any;
  rate: number;
}

export const useAnswerQuestion = (params: {
  quizId?: string;
  router: NextRouter;
  quizType?: string;
}) => {
  const {quizId, router, quizType} = params;

  const [getQuestion, {data, loading}] = useMutation<
    IGetQuizNextQuestionResponse,
    IGetQuizNextQuestionRequest
  >(GET_QUIZ_NEXT_QUESTION);

  const {control, register, watch, handleSubmit} = useForm({
    defaultValues: {
      answer: [],
      rate: 0,
    },
  });

  const watchAnswer = watch('answer');

  const onSubmit: SubmitHandler<IQuizQuestionFormProps> = async (record) => {
    try {
      const res = await getQuestion({
        variables: {
          quizId,
          answer: {
            questionId: data?.quizNextQuestion?.id,
            optionIds: toPointerAnswerQuizQuestion({
              record,
              question: data?.quizNextQuestion,
            }),
          },
        },
      });

      if (!res.data?.quizNextQuestion) {
        router.push(`/quizzes/${quizId}/results?type=${quizType}`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    question: data?.quizNextQuestion ?? null,
    register,
    getQuestion,
    loading,
    control,
    watchAnswer,
  };
};
