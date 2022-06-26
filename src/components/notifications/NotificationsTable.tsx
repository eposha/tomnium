import {FC, useMemo} from 'react';
import {useTable, Column, useFilters} from 'react-table';

import {IPagination} from '@/types/common';

import Pagination from '@/components/common/pagination';

import * as UI from 'styles/notifications/table';
import {isNonEmptyArray} from '@/helpers/common';

interface ITableProps {
  columns: Column<any>[];
  data: any[];
  pagination?: IPagination;
}

const Table: FC<ITableProps> = ({columns, data = [], pagination, children}) => {
  const defaultColumn = useMemo(
    () => ({
      Filter: () => null,
    }),
    [],
  );

  const {getTableProps, getTableBodyProps, headerGroups, prepareRow, rows} =
    useTable(
      {
        columns,
        data,
        defaultColumn,
        autoResetHiddenColumns: false,
        autoResetFilters: false,
      },
      useFilters,
    );

  return (
    <UI.Wrapper>
      {children}
      <UI.Table {...getTableProps()}>
        <UI.Head>
          {headerGroups.map((headerGroup) => {
            const {key, ...restHeaderGroupProps} =
              headerGroup.getHeaderGroupProps();
            return (
              <UI.Row key={key} {...restHeaderGroupProps}>
                {headerGroup.headers.map((column) => {
                  const {key, ...restColumn} = column.getHeaderProps();
                  return (
                    <UI.HeadCell key={key} {...restColumn}>
                      {column.render('Header')}
                      <div>
                        {column.canFilter ? column.render('Filter') : null}
                      </div>
                    </UI.HeadCell>
                  );
                })}
              </UI.Row>
            );
          })}
        </UI.Head>
        <UI.Body {...getTableBodyProps()}>
          {isNonEmptyArray(rows) ? (
            rows.map((row) => {
              prepareRow(row);
              const {key, ...restRowProps} = row.getRowProps();
              return (
                <UI.Row key={key} {...restRowProps}>
                  {row.cells.map((cell) => {
                    const {key, ...restCellProps} = cell.getCellProps();
                    return (
                      <UI.Cell key={key} {...restCellProps}>
                        {cell.render('Cell')}
                      </UI.Cell>
                    );
                  })}
                </UI.Row>
              );
            })
          ) : (
            <UI.Row>
              <UI.EmptyContainer
                colSpan={headerGroups?.[0]?.headers?.length || 0}>
                No data
              </UI.EmptyContainer>
            </UI.Row>
          )}
        </UI.Body>
      </UI.Table>

      {pagination && (
        <UI.PaginationWrapper>
          <Pagination pagination={pagination} activeBg='#CCCCCC' />
        </UI.PaginationWrapper>
      )}
    </UI.Wrapper>
  );
};

export default Table;
