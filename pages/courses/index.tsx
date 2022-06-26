import {FC} from 'react';
import type {GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import {initApollo, addApolloState} from 'src/lib/apolloClient';

import {ICourse} from '@/types/courses';
import {CategoryEntityType} from 'src/graphql.schema';
import {FilterType} from '@/components/common/filter-list/FilterList';
import {COURSES_LIST} from '@/query/courses/coursesList';
import {CATEGORY_TYPES} from '@/query/categories';
import {useFilterList} from 'src/hooks';
import {useCategoryTypes} from '@/graph-hooks/categories';
import {useCoursesList} from '@/graph-hooks/courses/useCoursesList';

import {Media} from 'src/media-styles';
import FilterList from 'src/components/common/filter-list/FilterList';
import {AccordionItem} from 'src/components/common/AccordionItem';
import CourseCard from '@/components/courses/Card';
import {Text} from 'styles/common';
import Pagination from 'src/components/common/pagination';

import * as UI from 'styles/courses';
import {IPagination} from '@/types/common';
import {useFaqsFromDirectories} from '@/graph-hooks/faqs/useFaqsFromDirectories';
import {FAQ_TYPES} from '@/constants/faqs';
import {useFaqs} from '@/graph-hooks/faqs/useFaq';

interface ICoursesPageProps {
  ssrCourses: {
    Courses: ICourse[];
    Pagination: IPagination;
  };
}

const CoursesPage: FC<ICoursesPageProps> = ({ssrCourses}) => {
  const router = useRouter();
  const {
    query: {filterList, offset},
  } = router;

  const filter = {categoryIds: filterList};

  const {categories} = useCategoryTypes({
    filter: {type: CategoryEntityType.CategoryEntityTypeCourse},
  });

  const {handleFilterRoute} = useFilterList({
    filterList,
  });

  const {courses, loading} = useCoursesList({
    filter,
    offset: offset ? (+offset - 1) * 10 : undefined,
  });

  const filtersData = {
    type: 'primary' as FilterType,
    title: 'Категории',
    filterItems: categories,
    handleFilterRoute,
  };

  console.log('SSR courses', ssrCourses);

  const renderCoursesData = loading ? ssrCourses : courses;

  const {faqId} = useFaqsFromDirectories(FAQ_TYPES.FAQ_TYPE_COURSE);
  const {faqs} = useFaqs(faqId);

  return (
    <UI.Wrapper>
      <Media greaterThan={'xs'}>
        <FilterList filtersData={filtersData} filterList={filterList} />
      </Media>
      <UI.Main>
        <UI.CoursesListHeader>
          <Text fontSize='20px'>Все курсы</Text>
          <UI.CoursesCount>
            {renderCoursesData?.Pagination.total}
          </UI.CoursesCount>
        </UI.CoursesListHeader>
        <UI.CourseList>
          {renderCoursesData?.Courses?.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </UI.CourseList>
        {renderCoursesData && (
          <Pagination pagination={renderCoursesData?.Pagination} />
        )}
        {faqs && (
          <>
            <Text fontSize='20px'>Часто задаваемые вопросы</Text>
            <UI.FAQ>
              {faqs?.FaqOptions?.map((item, index) => (
                <AccordionItem item={item} key={`${item.title}_${index}`} />
              ))}
            </UI.FAQ>
          </>
        )}
      </UI.Main>
    </UI.Wrapper>
  );
};

export default CoursesPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    res,
    query: {filterList, offset},
  } = ctx;

  const variables = {
    filter: {
      categoryIds: filterList,
    },
    offset: offset ? (+offset - 1) * 10 : undefined,
  };

  const apolloClient = initApollo();
  // const apolloClient = initApollo(null,ctx);

  await apolloClient.query({
    query: CATEGORY_TYPES,
    variables: {filter: {type: CategoryEntityType.CategoryEntityTypeCourse}},
  });

  const {
    data: {courses},
  } = await apolloClient.query({
    query: COURSES_LIST,
    variables,
  });

  res.setHeader(
    'Cache-Control',
    `public, s-maxage=10, stale-while-revalidate=18000`,
  );
  return addApolloState(apolloClient, {
    props: {
      ssrCourses: courses,
    },
  });
};
