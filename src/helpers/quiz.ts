import {QuizQuestionType} from 'src/graphql.schema';
import {IQuizQuestionFormProps} from '@/graph-hooks/quizzes/useAnswerQuestion';
import {IQuizQuestion} from '@/types/quiz';

export const toPointerAnswerQuizQuestion = (params: {
  record: IQuizQuestionFormProps;
  question?: IQuizQuestion;
}) => {
  const {record, question} = params;
  const {rate, answer} = record;

  const isRate = question?.type === QuizQuestionType.QuizQuestionTypeRate;

  if (isRate) {
    const optionBetweenRate = question?.QuizQuestionOptions?.find(
      ({RateDuration}) => RateDuration.from <= rate && RateDuration.to >= rate,
    );
    return [optionBetweenRate?.id];
  }

  return Array.isArray(answer) ? [...answer] : [answer];
};
