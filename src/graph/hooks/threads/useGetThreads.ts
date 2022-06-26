import {useQuery} from '@apollo/client';

import {FcThreadsFilterInput, FcThreadsSortInput} from 'src/graphql.schema';

import {
  GET_THREADS,
  GET_THREADS_FOR_SELECT,
  GET_THREADS_STATS,
  GET_THREADS_STUDENTS_STATS,
  IGetThreadsResponse,
} from '@/query/threads/getThreads';

export const useGetThreadsForCurator = (props: {
  variables?: {
    offset?: number | number[];
    limit?: number | number[];
    filter?: FcThreadsFilterInput;
    sort?: FcThreadsSortInput;
  };
  variant?: 'forSelect' | 'forStudentsStats';
}) => {
  const {variables, variant} = props;

  const {data, loading} = useQuery<IGetThreadsResponse>(GET_THREADS, {
    variables,
    skip: !!variant,
  });

  const {data: dataForSelect, loading: loadingForSelect} =
    useQuery<IGetThreadsResponse>(GET_THREADS_FOR_SELECT, {
      variables,
      skip: variant !== 'forSelect',
    });

  const {data: dataStudentsStats, loading: loadingStudentsStats} =
    useQuery<IGetThreadsResponse>(GET_THREADS_STUDENTS_STATS, {
      variables,
      skip: variant !== 'forStudentsStats',
    });

  return {
    threads:
      data?.FCThreads.Threads ||
      dataForSelect?.FCThreads.Threads ||
      dataStudentsStats?.FCThreads.Threads ||
      [],
    pagination:
      data?.FCThreads.Pagination || dataForSelect?.FCThreads.Pagination,
    loading: loading || loadingForSelect || loadingStudentsStats,
  };
};

export const useGetStatsThreads = (props: {
  variables?: {
    offset?: number | number[];
    limit?: number | number[];
    filter?: FcThreadsFilterInput;
    sort?: FcThreadsSortInput;
  };
}) => {
  const {variables} = props;
  const {data, loading: loadingForSelect} =
    useQuery<IGetThreadsResponse>(GET_THREADS_STATS, {
      variables,
    });
  
  return {
    threads: data?.FCThreads.Threads || [],
    pagination: data?.FCThreads.Pagination,
  }
}

export const useGetThreads = (variables?: {
  offset?: number | number[];
  limit?: number | number[];
  filter?: FcThreadsFilterInput;
  sort?: FcThreadsSortInput;
}) => {
  const {data, loading} = useQuery<IGetThreadsResponse>(GET_THREADS, {
    variables,
  });

  return {
    threads: data?.FCThreads.Threads || [],
    pagination: data?.FCThreads.Pagination,
    loading,
  };
};
