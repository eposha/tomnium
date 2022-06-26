import {useQuery} from '@apollo/client';
import {IUserMeResponse, USER_ME_QUERY} from '@/query/user';
import {getIsToken} from '@/helpers/getIsToken';

export const useUser = () => {
  const {data, loading, refetch} = useQuery<IUserMeResponse>(USER_ME_QUERY, {
    skip: !getIsToken(),
  });

  return {user: data?.me || null, loading, userLoading: loading, refetch};
};
