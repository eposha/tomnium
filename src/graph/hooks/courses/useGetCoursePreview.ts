import {
  GET_COURSE_PREVIEW,
  IGetCourseByIdResponse,
} from '@/query/courses/coursePreview';
import {useQuery} from '@apollo/client';

export const useGetCoursePreview = (record: {
  id?: string | string[];
  preview?: string;
}) => {
  const {data, loading} = useQuery<IGetCourseByIdResponse>(GET_COURSE_PREVIEW, {
    variables: record,
    fetchPolicy: 'network-only',
    skip: !record?.preview,
  });
  return {
    coursePreview: data?.coursePreview || null,
    loading,
  };
};
