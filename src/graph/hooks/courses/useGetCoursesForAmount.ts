import {useQuery} from '@apollo/client';

import {
  GET_COURSES_FOR_AMOUNT,
  ICoursesForAmountResponse,
} from '@/query/courses/coursesForAmount';

export const useGetCoursesForAmount = () => {
  const {data, loading} = useQuery<ICoursesForAmountResponse>(
    GET_COURSES_FOR_AMOUNT,
    {
      variables: {
        limit: 10000,
      },
    },
  );

  return {
    coursesLength: data?.courses?.Courses?.length ?? 0,
    loading,
  };
};
