import {gql, useQuery} from '@apollo/client';

interface INextLessonFormAmountResponse {
  nextLessons: {id: string}[];
}

export const GET_NEXT_LESSONS_AMOUNT = gql`
  query nextLessons {
    nextLessons {
      id
    }
  }
`;

export const useGetNextLessonsForAmount = () => {
  const {data, loading} = useQuery<INextLessonFormAmountResponse>(
    GET_NEXT_LESSONS_AMOUNT,
  );
  return {
    nextLessonsLength: data?.nextLessons?.length ?? 0,
    loading,
  };
};
