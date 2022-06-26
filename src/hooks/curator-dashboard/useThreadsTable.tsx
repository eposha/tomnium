import {useMemo} from 'react';
import {format} from 'date-fns';

import {DATE_FORMAT} from 'src/constants';

import {IThread} from 'src/types';

import {CellText} from 'styles/table';

interface IUseThreadsTableProps {
  threads: IThread[];
}

export const useThreadsTable = ({threads}: IUseThreadsTableProps) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Цена',
        Cell: ({row}: any) => {
          const {price} = row.original.Product || {};

          return <CellText align='center'>{price || '-'}</CellText>;
        },
      },
      {
        Header: 'Дата',
        Cell: ({row}: any) => {
          const {startSubmissionDate, endSubmissionDate} = row.original;

          return (
            <CellText nowrap>
              {format(new Date(startSubmissionDate), DATE_FORMAT.primary)} -{' '}
              {format(new Date(endSubmissionDate), DATE_FORMAT.primary)}
            </CellText>
          );
        },
      },
      {
        Header: 'Информация',
        Cell: ({row}: any) => {
          const {title, studentsCount} = row.original;

          return (
            <div>
              <CellText main>{title}</CellText>

              <CellText secondary>Студентов: {studentsCount}</CellText>
            </div>
          );
        },
      },
      {
        Header: 'Статус ДЗ',
        Cell: ({row}: any) => {
          const {homeworksCount, completedHomeworkCount} = row.original;

          return (
            <CellText align='center'>
              {completedHomeworkCount}/{homeworksCount}
            </CellText>
          );
        },
      },
      {
        Header: 'Статус',
        Cell: ({row}: any) => {
          const {published} = row.original;

          return <CellText>{published ? 'Активный' : 'Скрытый'}</CellText>;
        },
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
