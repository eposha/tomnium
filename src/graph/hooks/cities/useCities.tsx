import {useQuery} from '@apollo/client';
import {CitiesFilterInput} from 'src/graphql.schema';
import {GET_CITIES, IGetCitiesResponse} from 'src/graph/cities/cities';

export const useCities = (
  variables: {
    limit: number;
    filter: CitiesFilterInput;
  },
  setFunc?: any,
) => {
  const {data, loading, refetch} = useQuery<IGetCitiesResponse>(GET_CITIES, {
    variables,
    skip: !variables?.filter?.countryId,
  });

  return {
    cities: data?.cities.Cities || [],
    loading,
    refetch,
  };
};

export default useCities;
