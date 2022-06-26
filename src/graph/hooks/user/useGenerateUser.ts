import {useMutation} from '@apollo/client';

import {GENERATE_USER, IGenerateUserResponse} from '@/mutations/user';

export const useGenerateUser = () => {
  const [generateUser, {loading, error}] =
    useMutation<IGenerateUserResponse>(GENERATE_USER);

  return {
    generateUser,
    loading,
    error,
  };
};
