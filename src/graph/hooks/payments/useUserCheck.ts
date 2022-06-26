import {ApolloError, useLazyQuery} from '@apollo/client';
import {IUserCheckResponse, USER_CHECK_QUERY} from '@/query/payments/userCheck';

export interface IUseUserCheck {
  requiredPaymentFields: string[] | null;
  loading?: boolean;
  error?: ApolloError;
  checkUser: () => void;
}

export const useUserCheck = (): IUseUserCheck => {
  const [getData, {loading, error, data}] =
    useLazyQuery<IUserCheckResponse>(USER_CHECK_QUERY);
  return {
    checkUser: getData,
    requiredPaymentFields: data?.userCheck?.length ? data?.userCheck : null,
    loading,
    error,
  };
};
