import {useQuery} from '@apollo/client';

import {IGetCourseByIdResponse, GET_COURSE} from '@/query/courses/course';

export const useGetCourse = (record: {
  id?: string | string[];
  slug?: string | string[];
}) => {
  const {data, loading} = useQuery<IGetCourseByIdResponse>(GET_COURSE, {
    variables: {record},
    fetchPolicy: 'network-only',
    skip: !record?.slug && !record?.id,
  });
  return {
    course: data?.course || null,
    loading,
  };
};
