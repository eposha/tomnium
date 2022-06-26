import {gql} from '@apollo/client';

export interface IGetCitiesResponse {
  cities: {
    Cities: {
      id: number;
      name: string;
    }[];
  };
}

export const GET_CITIES = gql`
  query GetCities($limit: Int, $filter: CitiesFilterInput) {
    cities(limit: $limit, filter: $filter) {
      Cities {
        id
        name
      }
    }
  }
`;
