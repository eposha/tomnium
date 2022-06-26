import {useQuery} from '@apollo/client';
import {
  CategoriesFilterInput,
  CategoriesSortInput,
  //   Category,
} from 'src/graphql.schema';
import {CATEGORY_TYPES} from '@/query/categories';

interface IFilterTypes {
  displayName: string;
  id: string;
}

interface ICategory {
  categories?: IFilterTypes[];
}

export const useCategoryTypes = (variables: {
  filter?: CategoriesFilterInput;
  sort?: CategoriesSortInput;
}) => {
  const {data, loading} = useQuery<ICategory>(CATEGORY_TYPES, {
    variables,
  });
  return {
    categories: data?.categories || [],
    loading,
  };
};

export default useCategoryTypes;
