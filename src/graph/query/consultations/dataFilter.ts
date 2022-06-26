import {IAuthor} from '@/types/author';
import {ICategory} from '@/types/category';
import {gql} from '@apollo/client';

export interface IDataFilterResponse {
  authors?: IAuthor[];
  categories?: ICategory[];
}

export const DATA_FILTER_QUERY = gql`
  query (
    $categoryFilter: CategoriesFilterInput
    $categorySort: CategoriesSortInput
    $authorFilter: AuthorsFilterInput
    $authorSort: AuthorsSortInput
  ) {
    authors(filter: $authorFilter, sort: $authorSort) {
      id
      fullName
    }
    categories(filter: $categoryFilter, sort: $categorySort) {
      displayName
      id
    }
  }
`;
