import {useQuery} from '@apollo/client';

import {
  GET_THREADS_HOMEWORK_STATS,
  IGetThreadsResponse,
} from '@/query/threads/getThreads';

import {
  GET_MODULES_HOMEWORKS_STATS,
  IGetFCModulesResponse,
} from '@/query/modules/getModules';

import {
  GET_LESSONS_HOMEWORKS_STATS,
  IGetFCLessonsResponse,
} from '@/query/lessons/getLessons';

export const useGetHomeworksStatistics = (props: {
  variables: {
    offset?: number | number[];
    limit?: number | number[];
  };
  mainEntity?: string;
}) => {
  const {variables, mainEntity} = props;

  const {data: dataThreads, loading: loadingThreads} =
    useQuery<IGetThreadsResponse>(GET_THREADS_HOMEWORK_STATS, {
      variables,
      skip: mainEntity !== 'thread',
    });

  const {data: dataModules, loading: loadingModules} =
    useQuery<IGetFCModulesResponse>(GET_MODULES_HOMEWORKS_STATS, {
      variables,
      skip: mainEntity !== 'module',
    });

  const {data: dataLessons, loading: loadingLessons} =
    useQuery<IGetFCLessonsResponse>(GET_LESSONS_HOMEWORKS_STATS, {
      variables,
      skip: mainEntity !== 'lesson',
    });

  return {
    entities:
      dataThreads?.FCThreads.Threads ||
      dataModules?.FCModules.Modules ||
      dataLessons?.FCLessons.Lessons ||
      [],

    pagination:
      dataThreads?.FCThreads.Pagination ||
      dataModules?.FCModules.Pagination ||
      dataLessons?.FCLessons.Pagination,

    loading: loadingThreads || loadingModules || loadingLessons,
  };
};
