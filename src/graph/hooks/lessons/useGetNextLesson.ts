import {
  GET_NEXT_LESSON,
  INextLessonRequest,
  INextLessonResponse,
} from '@/query/lessons/getNextLeson';
import {useQuery} from '@apollo/client';

export const useGetNextLesson = (record: {id?: string[] | string}) => {
  const {data, loading} = useQuery<INextLessonResponse, INextLessonRequest>(
    GET_NEXT_LESSON,
    {
      variables: {record},
    },
  );
  return {
    nextLesson: data?.nextLesson ?? null,
    loading,
  };
};
