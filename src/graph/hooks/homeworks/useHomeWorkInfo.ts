import { GET_HOMEWORK_INFO } from '@/query/homeworks/getHomeworkTypes';
import { useQuery } from '@apollo/client';

export const useHomeworkInfo = (courseId: string | undefined) => {
 const { data, loading } = useQuery(GET_HOMEWORK_INFO, {
  variables: {
    record: {id: courseId}
   },
   skip: !courseId
 })
  
  return {data, loading}
}