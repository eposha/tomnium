import {useLazyQuery} from '@apollo/client';
import {IUserMeResponse, USER_ME_QUERY} from '@/query/user';
// import {getIsToken} from '@/helpers/getIsToken';
// import {useEffect} from 'react';

export const useCurrentUser = () => {
  const [
    getData,
    {
      loading,
      error,
      // data
    },
  ] = useLazyQuery<IUserMeResponse>(USER_ME_QUERY);
  // const isToken = getIsToken();

  // useEffect(() => {
  //   if (!isToken) return;
  //   getData();
  // }, [isToken]);

  return {
    // user: data?.me || null,
    loading,
    error,
    refetch: getData,
  };
};
