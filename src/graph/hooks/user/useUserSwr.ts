import {MeResponse} from 'src/graphql.schema';

import {request} from 'graphql-request';
import useSWR from 'swr';
import {ME_SWR} from '@/query/user/me';
import {getToken} from '@/helpers/getIsToken';

interface IUser {
  me: MeResponse;
}

const fetcher = async (query: string, token: string) =>
  await request(process.env.NEXT_PUBLIC_GRAPH_API_URL || '', query, null, {
    authorization: 'Bearer ' + token,
  });

export const useUserSwr = () => {
  const token = getToken();
  const {data, error, mutate} = useSWR<IUser>(
    token ? [ME_SWR, token] : null,
    fetcher,
    {
      dedupingInterval: 1000000000,
    },
  );

  return {
    user: data?.me,
    loading: !data && !error,
    refetch: mutate,
  };
};

export default useUserSwr;
