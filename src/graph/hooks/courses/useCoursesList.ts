import {useQuery} from '@apollo/client';

import {
  COURSES_FOR_SELECT,
  COURSES_LIST,
  ICoursesListResponse,
} from '@/query/courses/coursesList';

export const useCoursesList = (variables: {
  filter: {
    categoryIds: string | string[] | undefined;
  };
  offset?: number | number[];
}) => {
  const {data, loading, refetch} = useQuery<ICoursesListResponse>(
    COURSES_LIST,
    {
      variables,
      fetchPolicy: 'network-only',
    },
  );
  return {
    courses: data?.courses,
    loading,
    refetch,
  };
};

export const useGetCoursesForSelect = (variables?: {
  offset?: number | number[];
}) => {
  const {data, loading} = useQuery<ICoursesListResponse>(COURSES_FOR_SELECT, {
    variables,
  });

  return {
    courses: data?.courses.Courses || [],
    pagintation: data?.courses.Pagination,
    loading,
  };
};
