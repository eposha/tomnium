import {useLazyQuery} from '@apollo/client';

import {GET_MODULES, IGetModulesResponse} from '@/query/modules/getModules';

export const useGetLazyModules = () => {
  const [getModules, {data, loading}] =
    useLazyQuery<IGetModulesResponse>(GET_MODULES);

  return {
    modules: data?.modules || [],
    getModules,
    loading,
  };
};
