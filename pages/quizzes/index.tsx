import {FC} from 'react';
import type {GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import {initApollo, addApolloState} from '@/lib/apolloClient';

import {QuizType} from 'src/graphql.schema';
import {IQuiz} from '@/types/quiz';
import {IPagination} from '@/types/common';

import {GET_QUIZZES} from '@/query/quizzes/getQuizzes';
import {useGetQuizzes} from '@/graph-hooks/quizzes/useGetQuizzes';

import {Media} from 'src/media-styles';
import Pagination from 'src/components/common/pagination';
import {Text} from 'styles/common';
import QuizListSidebar from '@/components/quizzes/list/Sidebar';
import {DiagnosticsCard, CatalogCard} from '@/components/quizzes/list';

import * as UI from 'styles/quizzes/list';
import {useResetQuiz} from '@/graph-hooks/quizzes';

interface IQuizzesPageProps {
  ssrCatalogQuizzes: {
    Quizzes: IQuiz[];
    Pagination: IPagination;
  };
  ssrDiagnosticsQuizzes: {
    Quizzes: IQuiz[];
    Pagination: IPagination;
  };
}

const QuizzesPage: FC<IQuizzesPageProps> = ({
  ssrCatalogQuizzes,
  ssrDiagnosticsQuizzes,
}) => {
  const router = useRouter();
  const {
    query: {offset},
  } = router;

  const {resetQuiz} = useResetQuiz();

  const {quizzes: catalogQuizzes, loading: loadingCatalogQuizzes} =
    useGetQuizzes({
      offset: offset ? (+offset - 1) * 10 : undefined,
      filter: {
        type: QuizType.QuizTypeCatalog,
      },
    });

  const {quizzes: diagnosticsQuizzes, loading: loadingDianosticsQuizzes} =
    useGetQuizzes({
      offset: offset ? (+offset - 1) * 10 : undefined,
      filter: {
        type: QuizType.QuizTypeDiagnostics,
      },
    });

  const renderCatalogQuizzesData = loadingCatalogQuizzes
    ? ssrCatalogQuizzes
    : catalogQuizzes;

  const renderDiagnosticsQuizzesData = loadingDianosticsQuizzes
    ? ssrDiagnosticsQuizzes
    : diagnosticsQuizzes;

  return (
    <UI.Wrapper>
      <Media greaterThan={'xs'}>
        <QuizListSidebar />
      </Media>
      <UI.Main>
        <Media greaterThan='xs'>
          <UI.DiagnosticsQuizzesListHeader>
            Диагностика
          </UI.DiagnosticsQuizzesListHeader>
        </Media>
        <UI.DiagnosticsQuizzesList>
          {renderDiagnosticsQuizzesData?.Quizzes.map((quiz) => (
            <DiagnosticsCard key={quiz.id} quiz={quiz} />
          ))}
        </UI.DiagnosticsQuizzesList>
        {renderCatalogQuizzesData && (
          <UI.CatalogQuizzesContainer>
            <UI.CatalogQuizzesListHeader>
              <Text fontSize='20px'>Квизы</Text>
              <Text fontSize='14px'>
                Благодаря вашим ответам мы улучшаем качество аналитики по
                подбора курсов
              </Text>
            </UI.CatalogQuizzesListHeader>
            <UI.CatalogQuizzesList>
              {renderCatalogQuizzesData.Quizzes?.map((quiz) => (
                <CatalogCard quiz={quiz} key={quiz.id} resetQuiz={resetQuiz} />
              ))}
            </UI.CatalogQuizzesList>
            <Pagination pagination={renderCatalogQuizzesData.Pagination} />
          </UI.CatalogQuizzesContainer>
        )}
      </UI.Main>
    </UI.Wrapper>
  );
};

export default QuizzesPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    res,
    query: {offset},
  } = ctx;

  const apolloClient = initApollo();

  const {
    data: {quizzes: catalogQuizzes},
  } = await apolloClient.query({
    query: GET_QUIZZES,
    variables: {
      offset: offset ? (+offset - 1) * 10 : undefined,
      filter: {
        type: QuizType.QuizTypeCatalog,
      },
    },
  });

  const {
    data: {quizzes: diagnosticsQuizzes},
  } = await apolloClient.query({
    query: GET_QUIZZES,
    variables: {
      offset: offset ? (+offset - 1) * 10 : undefined,
      filter: {
        type: QuizType.QuizTypeDiagnostics,
      },
    },
  });

  res.setHeader(
    'Cache-Control',
    `public, s-maxage=10, stale-while-revalidate=18000`,
  );

  return addApolloState(apolloClient, {
    props: {
      ssrCatalogQuizzes: catalogQuizzes,
      ssrDiagnosticsQuizzes: diagnosticsQuizzes,
    },
  });
};
