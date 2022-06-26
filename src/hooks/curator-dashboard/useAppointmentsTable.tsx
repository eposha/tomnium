import {useMemo} from 'react';
// import Link from 'next/link';
import {format} from 'date-fns';

import {DATE_FORMAT} from 'src/constants';

import {IAppointment} from 'src/types';

import {CellLink, CellText} from 'styles/table';
import Link from 'next/link';

interface IUseAppointmentsFCTableProps {
  appointments: IAppointment[];
}

export const useAppointmentsFCTable = ({
  appointments,
}: IUseAppointmentsFCTableProps) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Дата',
        accessor: 'startAt',
        Cell: ({row}: any) => {
          const {startAt} = row.original;

          return (
            <CellText>
              {format(new Date(startAt), DATE_FORMAT.secondary)}
            </CellText>
          );
        },
      },
      {
        Header: 'Консультация',
        Cell: ({row}: any) => {
          const {title, id} = row.original.Consultation;

          return (
            <Link href={`/consultations/${id}`} passHref>
              <CellLink>{title}</CellLink>
            </Link>
          );
        },
      },
      {
        Header: 'Пользователь',
        Cell: ({row}: any) => {
          const {email, fullName} = row.original.User || {};
          return (
            <div>
              <CellText margin='0 0 5px'>{fullName}</CellText>

              <CellText>{email}</CellText>
            </div>
          );
        },
      },
      {
        Header: 'URL',
        Cell: ({row}) => {
          const {url} = row.original;
          return (
            <Link href={url ?? '#'} passHref>
              <CellLink>{url}</CellLink>
            </Link>
          );
        },
      },
      {
        Header: '',
        accessor: 'button',
        Cell: ({row}) => {
          const {id} = row.original;

          return (
            <CellText align='center'>
              <Link href={`/curator-dashboard/appointments/${id}`} passHref>
                <CellLink>Подробнее</CellLink>
              </Link>
            </CellText>
          );
        },
      },
    ],
    [],
  );
  const data = useMemo(() => appointments || [], [appointments]);

  return {
    data,
    columns,
  };
};
