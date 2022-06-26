import {useMemo} from 'react';

import {IThread} from 'src/types';

import {CellText} from 'styles/table';

interface IUseStudentsStatsProps {
  threads: IThread[];
}

export const useStudentsStatsTable = ({threads}: IUseStudentsStatsProps) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Поток',
        accessor: 'title',
        Cell: ({row}: any) => <CellText>{row.original.title}</CellText>,
      },
      {
        Header: () => <CellText align='center'>Всего</CellText>,
        accessor: 'studentsCount',
        Cell: ({row}: any) => (
          <CellText align='center'>{row.original.studentsCount}</CellText>
        ),
      },
      {
        Header: () => <CellText align='center'>Завершили</CellText>,
        accessor: 'studentsCompletedCount',
        Cell: ({row}: any) => (
          <CellText align='center'>
            {row.original.studentsCompletedCount}
          </CellText>
        ),
      },
      {
        Header: () => <CellText align='center'>COR</CellText>,
        accessor: 'completionRate',
        Cell: ({row}: any) => (
          <CellText align='center'>{row.original.completionRate}%</CellText>
        ),
      },
    ],
    [],
  );
  const data = useMemo(() => threads || [], [threads]);

  return {
    data,
    columns,
  };
};
