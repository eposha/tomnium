import {FC, useEffect} from 'react';
import {GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import {initApollo} from '@/lib/apolloClient';

import {IQuizQuestion} from '@/types/quiz';
import {QuizQuestionType} from 'src/graphql.schema';

import {GET_QUIZ_NEXT_QUESTION} from '@/mutations/quizzes/getQuizNextQuestion';
import {useAnswerQuestion} from '@/graph-hooks/quizzes/useAnswerQuestion';

import {Media} from 'src/media-styles';
import Sidebar from 'src/components/common/Sidebar';
import {ContentBlock} from '@/components/content-block';
import RadioButton from '@/components/common/RadioButton';
import SquareCheckbox from '@/components/common/checkbox/SquareCheckbox';
import RangeSlider from '@/components/common/RangeSlider/Slider';

import * as UI from 'styles/quizzes/quiz-question-page';

interface IQuizPageProps {
  ssrQuestion: IQuizQuestion;
}

const QuizPage: FC<IQuizPageProps> = () => {
  const router = useRouter();
  const {quizId, type} = router.query;

  const {control, getQuestion, question, register, onSubmit, watchAnswer} =
    useAnswerQuestion({
      quizId: quizId as string,
      quizType: type as string,
      router,
    });

  useEffect(() => {
    if (quizId) {
      getQuestion({
        variables: {quizId},
      }).then(
        ({data}) =>
          !data?.quizNextQuestion &&
          router.push(`/quizzes/${quizId}/results?type=${type}`),
      );
    }
  }, [quizId]);

  const renderQuestionData = question;

  const {
    title,
    QuizQuestionContent,
    QuizQuestionOptions,
    type: quizQuestionType,
    number,
    Quiz,
  } = renderQuestionData || {};

  const isBool = quizQuestionType === QuizQuestionType.QuizQuestionTypeBool;
  const isOne = quizQuestionType === QuizQuestionType.QuizQuestionTypeSelectOne;
  const isRate = quizQuestionType === QuizQuestionType.QuizQuestionTypeRate;
  const isMultiple =
    quizQuestionType === QuizQuestionType.QuizQuestionTypeSelectMulti;

  const marks =
    isRate &&
    QuizQuestionOptions?.reduce((acc, option) => {
      const key = (option.RateDuration?.from + option.RateDuration?.to) / 2;
      acc[key] = option.title;
      return acc;
    }, {} as Record<number, any>);

  const questionCount = Quiz?.questionCount ?? 0;

  return (
    <UI.Wrapper>
      <Media greaterThan='xs'>
        <Sidebar />
      </Media>

      <UI.Main>
        <UI.QuestionTitle>{title}</UI.QuestionTitle>
        {QuizQuestionContent && (
          <UI.ContentBlockWrapper>
            <ContentBlock contentData={QuizQuestionContent} />
          </UI.ContentBlockWrapper>
        )}
        <form onSubmit={onSubmit}>
          <UI.OptionsContainer $isBool={isBool}>
            {(isBool || isOne) &&
              QuizQuestionOptions?.map((option) => (
                <RadioButton
                  key={option.id}
                  label={option.title}
                  register={register}
                  name='answer'
                  value={option.id}
                />
              ))}
            {isMultiple &&
              QuizQuestionOptions?.map((option) => (
                <SquareCheckbox
                  key={option.id}
                  register={register}
                  name='answer'
                  value={option.id}>
                  {option.title}
                </SquareCheckbox>
              ))}
            {isRate && (
              <RangeSlider marks={marks || {}} control={control} name='rate' />
            )}
          </UI.OptionsContainer>

          <UI.ButtonContainer>
            <Media greaterThan='xs'>
              <UI.ProgressWrapper>
                <UI.Counter>
                  <b>Вопрос</b> № {Number(number) + 1}
                </UI.Counter>
                <UI.ProgressBar>
                  <UI.ProgressBarInner
                    progress={
                      ((Number(number) + 1) / (questionCount + 2)) * 100
                    }
                  />
                </UI.ProgressBar>
              </UI.ProgressWrapper>
            </Media>

            <UI.Button onSubmit={onSubmit} $isDisabled={!watchAnswer}>
              Следующий
            </UI.Button>
          </UI.ButtonContainer>

          <Media at='xs'>
            <UI.CounterWrapper>
              <UI.Counter>
                <b>Вопросы:</b> № {Number(number) + 1} / {questionCount + 1}
              </UI.Counter>
            </UI.CounterWrapper>
          </Media>
        </form>
      </UI.Main>
    </UI.Wrapper>
  );
};

export default QuizPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    query: {quizId, type},
  } = ctx;
  const client = initApollo(null, ctx);

  const {data} = await client.mutate({
    mutation: GET_QUIZ_NEXT_QUESTION,
    variables: {
      quizId,
    },
  });

  if (!data.quizNextQuestion) {
    return {
      redirect: {
        destination: `/quizzes/${quizId}/results?type=${type}`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
