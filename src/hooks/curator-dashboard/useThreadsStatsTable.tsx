import Link from 'next/link';
import {useMemo} from 'react';

import {IThread} from 'src/types';
import {ButtonLink} from 'styles/common/Button';
import {BtnWrapper} from 'styles/statistics-survey';

import {CellText} from 'styles/table';

interface IUseNPSStatsProps {
  threads: IThread[];
}

export const useThreadsStatsTable = ({threads}: IUseNPSStatsProps) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Курс',
        accessor: 'course',
        Cell: ({row}: any) => <CellText>{row.original.Course.title}</CellText>,
      },

      {
        Header: 'Поток',
        accessor: 'title',
        Cell: ({row}: any) => <CellText>{row.original.title}</CellText>,
      },

      {
        Header: () => <CellText align='center'>By Thread</CellText>,
        accessor: 'by-thread',
        Cell: ({row}: any) => (
          <CellText align='center'>
            <BtnWrapper>
              <Link
                href={`/curator-dashboard/statistics/surveys/${row.original?.Survey?.id}`}
                passHref>
                <ButtonLink $transparent>By Thread</ButtonLink>
              </Link>
            </BtnWrapper>
          </CellText>
        ),
      },
      {
        Header: () => <CellText align='center'>By Course</CellText>,
        accessor: 'by-course',
        Cell: ({row}: any) => (
          <CellText align='center'>
            <BtnWrapper>
              <Link
                href={`/curator-dashboard/statistics/surveys/${row.original?.Course?.Survey?.id}`}
                passHref>
                <ButtonLink $transparent>By Course</ButtonLink>
              </Link>
            </BtnWrapper>
          </CellText>
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
