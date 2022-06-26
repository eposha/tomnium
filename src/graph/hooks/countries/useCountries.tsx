import {useQuery} from '@apollo/client';

import {
  GET_COUNTRIES,
  IGetCountriesResponse,
} from 'src/graph/countries/countries';

export const useCountries = () => {
  const {data, loading, refetch} =
    useQuery<IGetCountriesResponse>(GET_COUNTRIES);

  return {
    countries: data?.countries.Countries || [],
    loading,
    refetch,
  };
};

export default useCountries;
