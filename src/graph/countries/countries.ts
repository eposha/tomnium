import {gql} from '@apollo/client';

export interface IGetCountriesResponse {
  countries: {
    Countries: {
      id: number;
      name: string;
    }[];
  };
}

export const GET_COUNTRIES = gql`
  query {
    countries {
      Countries {
        id
        name
      }
    }
  }
`;
