import {useMemo} from 'react';
import Link from 'next/link';
import {format} from 'date-fns';

import {DATE_FORMAT, HOMEWORK_LINK_TYPES, HOMEWORK_TYPES} from 'src/constants';

import {IHomeworkResult} from 'src/types';

import {CellLink, CellText} from 'styles/table';
import {HomeworkType} from 'src/graphql.schema';

interface IUseHomeworksResultsTableProps {
  results: IHomeworkResult[];
}

export const useHomeworksResultsTable = ({
  results,
}: IUseHomeworksResultsTableProps) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Поток',
        Cell: ({row}: any) => {
          const {Module, Lesson} = row.original.Homework;
          const threadTitle =
            Module?.Thread.title || Lesson?.Module?.Thread.title || '-';

          return <CellText>{threadTitle}</CellText>;
        },
      },
      {
        Header: 'Дата',
        accessor: 'createdAt',
        Cell: ({row}: any) => {
          const {createdAt} = row.original;

          return (
            <div>
              <CellText margin='0 0 5px'>
                {format(new Date(createdAt), DATE_FORMAT.primary)}
              </CellText>

              <CellText secondary>
                {format(new Date(createdAt), DATE_FORMAT.time)}
              </CellText>
            </div>
          );
        },
      },
      {
        Header: 'ФИО',
        Cell: ({row}: any) => {
          const {User, Homework} = row.original;

          return (
            <div>
              <CellText main> {User?.fullName}</CellText>

              <CellText secondary>
                {
                  //@ts-ignore
                  HOMEWORK_TYPES[Homework?.type]
                }
              </CellText>
            </div>
          );
        },
      },
      {
        Header: 'Действие',
        Cell: ({row}: any) => {
          const {id, Homework} = row.original;
          //@ts-ignore
          const type = HOMEWORK_LINK_TYPES[Homework?.type];

          const {HomeworkTypeFluent} = HomeworkType;
          const isFluent = Homework?.type === HomeworkTypeFluent;

          return isFluent ? (
            <Link
              href={`/curator-dashboard/homeworks-results/${id}/${type}`}
              passHref>
              <CellLink>Смотреть</CellLink>
            </Link>
          ) : null;
        },
      },
      {
        Header: 'Статус',
        Cell: ({row}) => {
          const {completed, score} = row.original;

          return (
            <CellText>
              {completed ? <CellText>{score}</CellText> : 'Не проверено'}
            </CellText>
          );
        },
      },
    ],
    [],
  );
  const data = useMemo(() => results || [], [results]);

  return {
    data,
    columns,
  };
};
