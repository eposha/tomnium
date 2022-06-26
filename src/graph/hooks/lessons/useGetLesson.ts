import {
  ILessonByIdResponse,
  ILessonByIdRequest,
  LESSON,
} from '@/query/lessons/getLesson';
import {useQuery} from '@apollo/client';

export const useGetLesson = (record: {
  id?: string[] | string | undefined;
  slug?: string;
}) => {
  const {data, loading, refetch} = useQuery<
    ILessonByIdResponse,
    ILessonByIdRequest
  >(LESSON, {
    variables: {record},
    fetchPolicy: 'network-only',
  });
  return {
    lesson: data?.lesson ?? {},
    loading,
    refetch,
  };
};
