import NEXT_LESSONS from '@/query/lessons/getNextLessons';
import {useQuery} from '@apollo/client';

export const useGetNextLessons = () => {
 const {data, loading} = useQuery<any>(
  NEXT_LESSONS
 );
 return {
   nextLessons: data?.nextLessons || [],
   loading,
 };
};
