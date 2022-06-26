import {gql} from '@apollo/client';

const CATEGORY_TYPES = gql`
  query categories($filter: CategoriesFilterInput, $sort: CategoriesSortInput) {
    categories(filter: $filter, sort: $sort) {
      displayName
      id
    }
  }
`;

export default CATEGORY_TYPES;
