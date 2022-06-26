import {Carousel} from '@/components/common/Carousel';
import {ProfileCard} from '@/components/common/profile';
import {ConsultationCard} from '@/components/consultations/Card';
import {CourseCard} from '@/components/courses';
import {DocumentCard} from '@/components/documents';
import CardPlug from '@/components/favourites/CardPlug';
import InfoCard from '@/components/favourites/InfoCard';
import {FAVORITE_TYPE} from '@/constants/common';
import {PLUG_TYPE} from '@/constants/plug';
import {useFavorites} from '@/graph-hooks/favorite';
import {useUser} from '@/graph-hooks/user';
import {initApollo} from '@/lib/apolloClient';
import {GET_FAVORITES} from '@/query/favorites/getFavorites';
import {IConsultation} from '@/types/consultation';
import {ICourse} from '@/types/courses';
import {IDocument} from '@/types/document';
import {GetServerSideProps, NextPage} from 'next';
import {Fragment} from 'react';
import {Media} from 'src/media-styles';
import {Box} from 'styles/common';
import {CourseList} from 'styles/courses';
import {CarouselDots} from 'styles/courses/course-details';
import {SlideContainer} from 'styles/courses/my-courses/common';
import {DocumentsWrapper} from 'styles/documents';
import {Container, PageWrapper, Section, Title} from 'styles/favourites';
import {InfoCardsWrapper} from 'styles/favourites/favourites-info-card';

interface FavouritesPagepRrops {
  ssrConsultations: IConsultation[];
  ssrCourses: ICourse[];
  ssrDocuments: IDocument[];
}

const FavouritesPage: NextPage<FavouritesPagepRrops> = ({
  ssrCourses,
  ssrDocuments,
  ssrConsultations,
}) => {
  const {user} = useUser();

  const {
    favoriteCourses,
    favoriteConsultations,
    favoriteDocuments,
    loading: loadingFavorites,
  } = useFavorites();

  const favoriteCoursesData: ICourse[] = loadingFavorites
    ? ssrCourses
    : favoriteCourses;

  const favoriteConsultationsData: IConsultation[] = loadingFavorites
    ? ssrConsultations
    : favoriteConsultations;

  const favoriteDocumentsData: IDocument[] = loadingFavorites
    ? ssrDocuments
    : favoriteDocuments;

  const favoriteInfoCards = [
    {
      title: FAVORITE_TYPE.FAVORITE_TYPE_COURSE,
      quantity: favoriteCoursesData?.length ?? 0,
    },
    {
      title: FAVORITE_TYPE.FAVORITE_TYPE_DOCUMENT,
      quantity: favoriteDocumentsData?.length ?? 0,
    },
    {
      title: FAVORITE_TYPE.FAVORITE_TYPE_CONSULTATION,
      quantity: favoriteConsultationsData?.length ?? 0,
    },
  ];

  return (
    <PageWrapper>
      <Media greaterThanOrEqual='lg'>
        <ProfileCard isPlain />
      </Media>
      <Container>
        <Section mb={20}>
          <Title>Избранные материалы</Title>

          <Media lessThan={'md'}>
            <Carousel
              options={{slidesToScroll: 1, align: 'start'}}
              Dots={CarouselDots}>
              <SlideContainer>
                {favoriteInfoCards?.map(({title, quantity}) => (
                  <Fragment key={title}>
                    <Box mr={'10px'}>
                      <InfoCard title={title} quantity={quantity} />
                    </Box>
                  </Fragment>
                ))}
              </SlideContainer>
            </Carousel>
          </Media>

          <Media greaterThanOrEqual={'md'}>
            <InfoCardsWrapper>
              {favoriteInfoCards?.map(({title, quantity}) => (
                <Fragment key={title}>
                  <InfoCard title={title} quantity={quantity} />
                </Fragment>
              ))}
            </InfoCardsWrapper>
          </Media>
        </Section>

        <Section>
          <Title>Курсы</Title>
          <CourseList>
            {!!favoriteCoursesData?.length ? (
              favoriteCoursesData?.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <CardPlug mh={170} card={PLUG_TYPE.course} />
            )}
          </CourseList>
        </Section>

        <Section>
          <Title>Материалы</Title>
          {!!favoriteDocumentsData?.length ? (
            <DocumentsWrapper>
              {favoriteDocumentsData.map((documentData) => (
                <DocumentCard
                  key={documentData.id}
                  documentData={documentData}
                />
              ))}
            </DocumentsWrapper>
          ) : (
            <CardPlug mh={170} card={PLUG_TYPE.document} />
          )}
        </Section>

        <Section>
          <Title>Консультации</Title>
          {!!favoriteConsultationsData?.length ? (
            favoriteConsultationsData?.map((it) => {
              const link = `/consultations/${it.id}`;
              return (
                <ConsultationCard
                  key={it.id}
                  {...it}
                  appointment={it.Appointments?.[0]}
                  entityLink={link}
                  buyLink={link}
                  currentCurrencyId={user?.Currency?.id}
                />
              );
            })
          ) : (
            <CardPlug mh={170} card={PLUG_TYPE.consultation} />
          )}
        </Section>
      </Container>
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apolloClient = initApollo(null, ctx);

  let favorites;

  try {
    favorites = await apolloClient.query({
      query: GET_FAVORITES,
    });
  } catch (e) {
    if (e instanceof Error && e.message === 'Not authenticated') {
      return {
        redirect: {
          destination: `/auth/login`,
          permanent: false,
        },
      };
    }

    return {
      redirect: {
        destination: `/500`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      ssrCourses: favorites?.data?.myFavorites?.Courses || [],
      ssrDocuments: favorites?.data?.myFavorites?.Documents || [],
      ssrConsultations: favorites?.data?.myFavorites?.Consultations || [],
    },
  };
};

export default FavouritesPage;
