import { GET_COURSE_AUTHOR } from "@/query/courses/courseAuthor";
import { IAuthor } from "@/types/author";
import { useQuery } from "@apollo/client";

export const useGetCourseAuthor = (record: {
 id?: string | undefined
}) => {
 const {data, loading} = useQuery<IAuthor[]>(GET_COURSE_AUTHOR, {
   variables: {record},
   fetchPolicy: 'network-only',
 });
 return {
   data,
   loading,
 };
};
