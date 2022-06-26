import {useMemo} from 'react';

import {IThread} from 'src/types';

import {CellText} from 'styles/table';

interface IUseNPSStatsProps {
  threads: IThread[];
}

export const useNPSStatsTable = ({threads}: IUseNPSStatsProps) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Поток',
        accessor: 'title',
        Cell: ({row}: any) => <CellText>{row.original.title}</CellText>,
      },

      {
        Header: () => <CellText align='center'>По потоку</CellText>,
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
