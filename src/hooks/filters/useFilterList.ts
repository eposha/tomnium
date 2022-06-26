import {useRouter} from 'next/router';
import {ParsedUrlQueryInput} from 'querystring';

const sortArray = (array: any[]) => {
  return array.sort((a: any, b: any) => {
    if (a === b) return 0;
    return a < b ? -1 : 1;
  });
};

const sortQuery = (
  object: {[s: string]: unknown} | ArrayLike<unknown>,
): string | ParsedUrlQueryInput | null | undefined => {
  //@ts-ignore
  const sortable: [string, string][] = Object.entries(object).sort(
    ([a], [b]) => {
      if (a === b) return 0;
      return a < b ? -1 : 1;
    },
  );

  return Object.fromEntries(sortable);
};

const useFilter = (params: {
  filterList?: string | string[];
  queryName?: string;
}) => {
  const router = useRouter();
  const {pathname, query} = router;

  const {filterList, queryName = 'filterList'} = params;

  const handleFilterRoute = (id: string) => {
    delete query.offset;
    if (filterList) {
      const copyList = Array.isArray(filterList)
        ? [...filterList]
        : [filterList];

      const findIndex = copyList.indexOf(id);

      if (findIndex > -1) {
        copyList.splice(findIndex, 1);
        const filterParams = sortArray(copyList);
        const newQuery = sortQuery({...query, [queryName]: filterParams});

        return router.replace({
          pathname,
          query: newQuery,
        });
      }

      const filterParams = sortArray([...copyList, id]);
      const newQuery = sortQuery({...query, [queryName]: filterParams});

      return router.replace({
        pathname,
        query: newQuery,
      });
    }
    const newQuery = sortQuery({...query, [queryName]: id});
    return router.replace({pathname, query: newQuery});
  };

  return {handleFilterRoute};
};

export default useFilter;
