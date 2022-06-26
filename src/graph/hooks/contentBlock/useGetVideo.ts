import {useQuery} from '@apollo/client';

import {IGetVideoResponse, GET_VIDEO} from '@/query/contentBlock/videoById';

export const useGetVideo = (id?: string) => {
  const {data, loading} = useQuery<IGetVideoResponse>(GET_VIDEO, {
    variables: {id},
    skip: !id,
  });
  return {
    video: data?.videoById || null,
    loading,
  };
};
