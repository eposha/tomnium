import {
  GET_VIDEO_MARKS,
  IGetVideoMarksResponse,
} from '@/query/videoMarks/getVideoMarks';
import {useQuery} from '@apollo/client';
import {UserVideoMarksFilterInput} from 'src/graphql.schema';

export const useGetVideoMarks = (variables: {
  offset?: number | number[];
  filter?: UserVideoMarksFilterInput;
  limit?: number | number[];
}) => {
  const {data, loading} = useQuery<IGetVideoMarksResponse>(GET_VIDEO_MARKS, {
    variables,
  });

  return {
    videoMarks: data?.userVideoMarks,
    loading,
  };
};
