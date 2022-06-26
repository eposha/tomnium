import {Loader} from '@/components/common/Loader';
import {MyCourseCard} from '@/components/courses/my-courses';
import {getRandomInteger} from '@/helpers/common';
import {initApollo} from '@/lib/apolloClient';
import {GET_SALES} from '@/query/sales/getSales';
import {GetServerSideProps} from 'next';
import {FC} from 'react';
import {Lesson} from 'src/graphql.schema';
import {MainWrapper} from 'styles/consultations/page';
import {
  Box,
  ContentWrapper,
  Title,
  LoaderWrapper,
} from 'styles/courses/my-courses/common';
import SaleCard from '@/components/sales/SaleCard';
import {Fragment} from 'react';
import {useGetNextLessons} from '@/graph-hooks/lessons/useGetNextLessons';
import {PLUG_TYPE} from '@/constants/plug';
import CardPlug from '@/components/favourites/CardPlug';
import {Media} from 'src/media-styles';
import Sidebar from 'src/components/common/Sidebar';

interface IMyCoursesPage {
  ssrBanners: any;
}

const MyCoursesPage: FC<IMyCoursesPage> = ({ssrBanners}) => {
  const {nextLessons, loading} = useGetNextLessons();

  return (
    <MainWrapper>
      <Media greaterThan={'md'}>
        <Sidebar />
      </Media>

      <ContentWrapper>
        {ssrBanners.length > 0 && (
          <Box mbs={30} mbl={30}>
            <Fragment
              key={ssrBanners[getRandomInteger(0, ssrBanners.length - 1)].id}>
              <SaleCard
                banner={ssrBanners[getRandomInteger(0, ssrBanners.length - 1)]}
              />
            </Fragment>
          </Box>
        )}

        <Box mbs={30} mbl={80}>
          <Title>Мои курсы</Title>
          {loading ? (
            <LoaderWrapper>
              <Loader $isVisible={loading} />
            </LoaderWrapper>
          ) : nextLessons.length > 0 ? (
            nextLessons.map((Lesson: Lesson, index: number) => (
              <MyCourseCard
                key={index}
                lesson={Lesson}
                courseId={Lesson.Course?.id}
              />
            ))
          ) : (
            <CardPlug mh={170} card={PLUG_TYPE.course} />
          )}
        </Box>

        {/* Не удалять, просьба Романа */}

        {/* <Box mbs={20} mbl={35}>
          {completed.length && <Title>Пройденные курсы</Title>}
          {completed?.map((el) => (
            <CompletedCourseCard key={el} />
          ))}
        </Box> */}
        {/* <Box mbs={30} mbl={130}>
          <SectionTitle>Рекомендованные курсы для вас:</SectionTitle>
          <Media lessThan={'lg'}>
            <Carousel options={{slidesToScroll: 1, align: 'start'}} Dots={Dots}>
              <SlideContainer>
                {arr?.map((el) => (
                  <Slide key={el}>
                    <RecommendedCourseCard />
                  </Slide>
                ))}
              </SlideContainer>
            </Carousel>
          </Media>
          <Media greaterThan={'md'}>
            <Carousel options={{slidesToScroll: 1, align: 'start'}}>
              <SlideContainer>
                {arr?.map((el) => (
                  <Slide key={el}>
                    <RecommendedCourseCard />
                  </Slide>
                ))}
              </SlideContainer>
            </Carousel>
          </Media>
        </Box> */}
      </ContentWrapper>
    </MainWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const client = initApollo(null, ctx);

  let sales;

  try {
    sales = await client.query({
      query: GET_SALES,
    });
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      ssrBanners: sales?.data?.banners || [],
    },
  };
};

export default MyCoursesPage;
