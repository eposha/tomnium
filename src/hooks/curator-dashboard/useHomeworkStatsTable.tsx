import {useMemo} from 'react';

import {ILesson, IModule, IThread} from 'src/types';

import {CellLink, CellText} from 'styles/table';

interface IUseThreadsTableProps {
  entities: IThread[] | ILesson[] | IModule[];
  mainEntity?: string;
}

export const useHomeworksStatsTable = ({
  entities,
  mainEntity,
}: IUseThreadsTableProps) => {
  const columns = useMemo(
    () => [
      {
        Header: () => {
          switch (mainEntity) {
            case 'thread':
              return 'Поток';
            case 'module':
              return 'Модуль';
            case 'lesson':
              return 'Урок';
          }
        },
        accessor: 'title',
        Cell: ({row}: any) => <CellText>{row.original.title}</CellText>,
      },
      {
        Header: () => <CellText align='center'>Всего</CellText>,
        accessor: 'homeworksCount',
        Cell: ({row}: any) => (
          <CellText align='center'>{row.original.homeworksCount}</CellText>
        ),
      },
      {
        Header: () => <CellText align='center'>Доступные</CellText>,
        accessor: 'availableHomeworkCount',
        Cell: ({row}: any) => (
          <CellText align='center'>
            {row.original.availableHomeworkCount}
          </CellText>
        ),
      },
      {
        Header: () => <CellText align='center'>Выполненные</CellText>,
        accessor: 'submittedHomeworkCount',
        Cell: ({row}: any) => (
          <CellText align='center'>
            {row.original.submittedHomeworkCount}
          </CellText>
        ),
      },
      {
        Header: () => <CellText align='center'>Проверенные</CellText>,
        accessor: 'completedHomeworkCount',
        Cell: ({row}: any) => (
          <CellText align='center'>
            {row.original.completedHomeworkCount}
          </CellText>
        ),
      },

      {
        Header: () => <CellText align='center'>Непроверенные</CellText>,
        accessor: 'uncompletedHomeworkResultCount',
        Cell: ({row}: any) => (
          <CellText align='center'>
            <CellLink>{row.original.uncompletedHomeworkResultCount}</CellLink>
          </CellText>
        ),
      },
    ],
    [mainEntity],
  );
  const data = useMemo(() => entities || [], [entities]);

  return {
    data,
    columns,
  };
};
