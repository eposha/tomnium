import {FC} from 'react';
import {GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import {AUTOGENERATED_TOKEN_NAME, initApollo} from '@/lib/apolloClient';
import {setCookie, parseCookies} from 'nookies';

import {getNonOriginalImage} from '@/helpers/common';

import {IQuiz} from '@/types/quiz';
import {QuizType} from 'src/graphql.schema';

import {GET_QUIZ_BY_ID} from '@/query/quizzes/getQuizById';
import {useGetQuizById} from '@/graph-hooks/quizzes';
import {useUser, useGenerateUser} from '@/graph-hooks/user';

import {Media} from 'src/media-styles';
import Sidebar from 'src/components/common/Sidebar';
import {ContentBlock} from '@/components/content-block';

import * as UI from 'styles/quizzes/quiz-page';

interface IQuizPageProps {
  ssrQuiz: IQuiz;
}

const QuizPage: FC<IQuizPageProps> = ({ssrQuiz}) => {
  const router = useRouter();
  const {quizId} = router.query;

  const {user} = useUser();
  const {generateUser} = useGenerateUser();

  const {quiz, loading: loadingQuiz} = useGetQuizById({id: quizId});

  const renderQuizData = loadingQuiz ? ssrQuiz : quiz;

  const {imageList, imageWeb, QuizContent, type} = renderQuizData || {};

  const startQuiz = async () => {
    const cookies = parseCookies();

    if (
      !user &&
      type === QuizType.QuizTypeDiagnostics &&
      !cookies[AUTOGENERATED_TOKEN_NAME]
    ) {
      const {data} = await generateUser();
      if (data?.generateUser?.token) {
        setCookie(null, AUTOGENERATED_TOKEN_NAME, data?.generateUser.token, {
          path: '/',
        });
      }
    }

    router.replace(`/quizzes/${quizId}/start?type=${type}`);
  };

  return (
    <UI.Wrapper>
      <Media greaterThan='xs'>
        <Sidebar />
      </Media>

      <UI.Main>
        <Media at='xs'>
          <UI.Image
            src={
              getNonOriginalImage(imageList) ||
              '/images/quizzes/defaultQuiz_mob.jpg'
            }
            width={300}
            height={171}
            alt='Quiz image'
            layout='responsive'
            priority
          />
        </Media>
        <Media greaterThan='xs'>
          <UI.Image
            src={
              getNonOriginalImage(imageWeb) || '/images/quizzes/defaultQuiz.jpg'
            }
            width={980}
            height={350}
            alt='Quiz image'
            layout='responsive'
            priority
          />
        </Media>
        {QuizContent && (
          <UI.ContentBlockWrapper>
            <ContentBlock contentData={QuizContent} />
          </UI.ContentBlockWrapper>
        )}
        <UI.ButtonContainer>
          <UI.Button onClick={startQuiz}>Начать</UI.Button>
        </UI.ButtonContainer>
      </UI.Main>
    </UI.Wrapper>
  );
};

export default QuizPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    res,
    query: {quizId},
  } = ctx;
  const client = initApollo();

  const {
    data: {quizById},
  } = await client.query({
    query: GET_QUIZ_BY_ID,
    variables: {
      id: quizId,
    },
  });

  res.setHeader(
    'Cache-Control',
    `public, s-maxage=10, stale-while-revalidate=18000`,
  );

  return {
    props: {
      ssrQuiz: quizById,
    },
  };
};
