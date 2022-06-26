import {useMutation} from '@apollo/client';
import {PROFILE_UPDATE} from '@/mutations/user';
import {ProfileUpdateInput} from 'src/graphql.schema';
import {USER_ME_QUERY} from '@/query/user/me';
import {ORDER_CHECK_QUERY} from '@/query/payments';

export const useProfileUpdate = () => {
  const [setData, {loading, error}] = useMutation(PROFILE_UPDATE, {
    refetchQueries: [USER_ME_QUERY, ORDER_CHECK_QUERY],
  });

  const changeProfile = async (
    variables: ProfileUpdateInput,
    setFunc?: any,
  ): Promise<boolean> => {
    try {
      const {data} = await setData({variables: {record: variables}});
      if (!data?.profileUpdate?.fullName) {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
      return false;
    }
    if (setFunc) {
      setFunc();
    }
    return true;
  };
  return {
    changeProfile,
    loading,
    error,
  };
};
