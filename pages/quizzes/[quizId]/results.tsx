import {GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import {addApolloState, initApollo} from '@/lib/apolloClient';

import {QuizType} from 'src/graphql.schema';
import {isNonEmptyArray} from '@/helpers/common';

import {GET_QUIZ_RESULT} from '@/query/quizzes/getQuizResult';
import {useGetQuizResult} from '@/graph-hooks/quizzes/useGetQuizResult';
import {useUser} from '@/graph-hooks/user';

import {Media} from 'src/media-styles';
import Sidebar from 'src/components/common/Sidebar';
import {CourseCard} from '@/components/courses';
import {ConsultationCard} from '@/components/consultations/Card';
import {DocumentCard} from '@/components/documents';
import {
  QuizCatalogResults,
  FullDiagnosticsResults,
  PartialDiagnosticsResults,
} from '@/components/quizzes/results';

import * as UI from 'styles/quizzes/results/quiz-results-page';

const QuizResultsPage = () => {
  const router = useRouter();
  const {quizId, type} = router.query;

  const {user} = useUser();
  const {quizResult} = useGetQuizResult({quizId});

  const {
    QuizRecommendationResults,
    QuizRecommendedConsultationResults,
    QuizRecommendedCourseResults,
    QuizRecommendedDocumentResults,
  } = quizResult || {};

  const activeGroups = QuizRecommendationResults?.map((item) => item.id);

  return (
    <UI.Wrapper $isPartial={!user}>
      {user && (
        <Media greaterThan='xs'>
          <Sidebar />
        </Media>
      )}
      <UI.Main>
        {type === QuizType.QuizTypeCatalog && (
          <QuizCatalogResults
            QuizRecommendationResults={QuizRecommendationResults}
          />
        )}

        {type === QuizType.QuizTypeDiagnostics &&
          (user ? (
            <FullDiagnosticsResults
              QuizRecommendationResults={QuizRecommendationResults}
              activeGroups={activeGroups}
            />
          ) : (
            <PartialDiagnosticsResults
              QuizRecommendationResults={QuizRecommendationResults}
              activeGroups={activeGroups}
            />
          ))}

        {isNonEmptyArray(QuizRecommendedCourseResults) && (
          <UI.Recommendations>
            <UI.RecommendationTitle>
              Основываясь на вашем результате диагностики вам будут полезны
              следующие курсы:
            </UI.RecommendationTitle>
            <UI.RecommendationDescription>
              Цель каждой диагностики - определить ключевые блоки, точки роста и
              слепые пятна. Узнав их, Основываясь на вашем результате
              диагностики вам будут полезны следующие курсы: Цель каждой
              диагностики - определить ключевые блоки, точки роста и слепые
              пятна. Узнав их, вы можете принять и жить дальше, годами сковывая
              себя свои возможности, а можете воспользоваться инструментом для
              их решения. Здесь мы предлагаем вам выбрать один из курсов,
              которые помогают освободиться от блоков и раскрыть потенциал своей
              жизни. вы можете принять и жить дальше, годами сковывая себя свои
              возможности, а можете воспользоваться инструментом для их решения.
              Здесь мы предлагаем вам выбрать один из курсов, которые помогают
              освободиться от блоков и раскрыть потенциал своей жизни.
            </UI.RecommendationDescription>

            {QuizRecommendedCourseResults?.slice(0, 3).map(({Course}) => (
              <CourseCard key={Course.id} course={Course} />
            ))}
          </UI.Recommendations>
        )}
        {isNonEmptyArray(QuizRecommendedConsultationResults) && (
          <UI.Recommendations>
            <UI.RecommendationTitle>
              Основываясь на вашем результате диагностики вам будут полезны
              следующие консультации:
            </UI.RecommendationTitle>
            <UI.RecommendationDescription>
              Цель каждой диагностики - определить ключевые блоки, точки роста и
              слепые пятна. Узнав их, Основываясь на вашем результате
              диагностики вам будут полезны следующие курсы: Цель каждой
              диагностики - определить ключевые блоки, точки роста и слепые
              пятна. Узнав их, вы можете принять и жить дальше, годами сковывая
              себя свои возможности, а можете воспользоваться инструментом для
              их решения. Здесь мы предлагаем вам выбрать один из курсов,
              которые помогают освободиться от блоков и раскрыть потенциал своей
              жизни. вы можете принять и жить дальше, годами сковывая себя свои
              возможности, а можете воспользоваться инструментом для их решения.
              Здесь мы предлагаем вам выбрать один из курсов, которые помогают
              освободиться от блоков и раскрыть потенциал своей жизни.
            </UI.RecommendationDescription>

            {QuizRecommendedConsultationResults?.slice(0, 3).map(
              ({Consultation}) => {
                const link = `/consultations/${Consultation.id}`;
                return (
                  <ConsultationCard
                    key={Consultation.id}
                    {...Consultation}
                    appointment={Consultation.Appointments?.[0]}
                    entityLink={link}
                    buyLink={link}
                  />
                );
              },
            )}
          </UI.Recommendations>
        )}
        {isNonEmptyArray(QuizRecommendedDocumentResults) && (
          <UI.Recommendations>
            <UI.RecommendationTitle>
              Основываясь на вашем результате диагностики вам будут полезны
              следующие документы:
            </UI.RecommendationTitle>
            <UI.RecommendationDescription>
              Цель каждой диагностики - определить ключевые блоки, точки роста и
              слепые пятна. Узнав их, Основываясь на вашем результате
              диагностики вам будут полезны следующие курсы: Цель каждой
              диагностики - определить ключевые блоки, точки роста и слепые
              пятна. Узнав их, вы можете принять и жить дальше, годами сковывая
              себя свои возможности, а можете воспользоваться инструментом для
              их решения. Здесь мы предлагаем вам выбрать один из курсов,
              которые помогают освободиться от блоков и раскрыть потенциал своей
              жизни. вы можете принять и жить дальше, годами сковывая себя свои
              возможности, а можете воспользоваться инструментом для их решения.
              Здесь мы предлагаем вам выбрать один из курсов, которые помогают
              освободиться от блоков и раскрыть потенциал своей жизни.
            </UI.RecommendationDescription>
            <UI.RecommendationsDocumentList>
              {QuizRecommendedDocumentResults?.slice(0, 3).map(({Document}) => (
                <DocumentCard key={Document.id} documentData={Document} />
              ))}
            </UI.RecommendationsDocumentList>
          </UI.Recommendations>
        )}
      </UI.Main>
    </UI.Wrapper>
  );
};

export default QuizResultsPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    query: {quizId},
  } = ctx;
  const client = initApollo(null, ctx);

  await client.query({
    query: GET_QUIZ_RESULT,
    variables: {
      quizId,
    },
  });

  return addApolloState(client, {
    props: {},
  });
};
