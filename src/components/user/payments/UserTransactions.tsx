import Pagination from '@/components/common/pagination';
import {DATE_FORMAT} from '@/constants/common';
import {TRANSACTION_FAILURE, TRANSACTION_STATUS} from '@/constants/transaction';
import {formatDate} from '@/helpers/common';
import {IPagination} from '@/types/common';
import {ITransaction} from '@/types/transactions';
import {FC, Fragment, useState} from 'react';
import {Media} from 'src/media-styles';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {StyledDatePicker} from 'styles/datePicker/appointments';
import {TransactionDatePicker} from 'styles/datePicker/transactions';
import * as UI from 'styles/user/payments/payment-transactions';

interface IUserTransactionsProps {
  transactions: {
    Transactions: ITransaction[];
    Pagination: IPagination;
  } | null;
  handleFilterRoute: (
    from: Date | null,
    to: Date | null,
  ) => Promise<boolean> | undefined;
}

const UserTransactions: FC<IUserTransactionsProps> = ({
  transactions,
  handleFilterRoute,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <UI.TransactionsWrapper>
      <UI.BlockTitle>Транзакции</UI.BlockTitle>
      <UI.TransactionCalendarWrapper>
        <StyledDatePicker>
          <TransactionDatePicker>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                handleFilterRoute(date, endDate);
              }}
              dateFormat='dd.MM.yyyy'
            />
          </TransactionDatePicker>
        </StyledDatePicker>
        <UI.Dash />
        <StyledDatePicker>
          <TransactionDatePicker>
            <DatePicker
              selected={endDate}
              onChange={(date) => {
                setEndDate(date);
                handleFilterRoute(startDate, date);
              }}
              dateFormat='dd.MM.yyyy'
            />
          </TransactionDatePicker>
        </StyledDatePicker>
        <UI.CalendarSVG />
      </UI.TransactionCalendarWrapper>

      <Media lessThan='lg'>
        {transactions?.Transactions?.map(
          ({
            id,
            actualAmount,
            actualCurrency,
            status,
            createdAt,
            Order: {Products},
          }) => {
            const title = Products?.[0]?.title;
            const success = status !== TRANSACTION_FAILURE;
            const amount = actualAmount / 100;

            return (
              <Fragment key={id}>
                <UI.TransactionDate>
                  {formatDate(createdAt, DATE_FORMAT.primary)}
                </UI.TransactionDate>
                <UI.TransactionContainer>
                  <UI.Container>
                    <UI.ItemTitle>Продукт:</UI.ItemTitle>
                    <UI.ItemText>{title}</UI.ItemText>
                  </UI.Container>
                  <UI.ActionsContainer>
                    <UI.Time>{formatDate(createdAt, DATE_FORMAT.time)}</UI.Time>
                    <UI.Status success={success}>
                      {TRANSACTION_STATUS?.[status]}
                    </UI.Status>
                    <UI.Price>
                      {amount} {actualCurrency}
                    </UI.Price>
                  </UI.ActionsContainer>
                </UI.TransactionContainer>
              </Fragment>
            );
          },
        )}
      </Media>

      <Media greaterThan='md'>
        <UI.TransactionContainer>
          <UI.Container flex={60}>
            <UI.ItemTitle noMb>Дата</UI.ItemTitle>
          </UI.Container>
          <UI.Container flex={440}>
            <UI.ItemTitle noMb>Транзакция</UI.ItemTitle>
          </UI.Container>
          <UI.Container flex={70} align={'center'}>
            <UI.ItemTitle noMb>Статус</UI.ItemTitle>
          </UI.Container>
          <UI.Container flex={70} align={'right'}>
            <UI.ItemTitle noMb>Сумма</UI.ItemTitle>
          </UI.Container>
        </UI.TransactionContainer>
        {transactions?.Transactions?.map(
          ({
            id,
            actualAmount,
            actualCurrency,
            status,
            createdAt,
            Order: {Products},
          }) => {
            const title = Products?.[0]?.title;
            const success = status !== TRANSACTION_FAILURE;
            const amount = actualAmount / 100;

            return (
              <Fragment key={id}>
                <UI.TransactionContainer>
                  <UI.Container flex={60}>
                    <UI.ItemTitle noMb>
                      {formatDate(createdAt, DATE_FORMAT.primary)}
                    </UI.ItemTitle>
                    <UI.Time>{formatDate(createdAt, DATE_FORMAT.time)}</UI.Time>
                  </UI.Container>
                  <UI.Container flex={440}>
                    <UI.ItemTitle>Продукт:</UI.ItemTitle>
                    <UI.ItemText>{title}</UI.ItemText>
                  </UI.Container>
                  <UI.Container flex={70} align={'center'}>
                    <UI.Status success={success}>
                      {TRANSACTION_STATUS?.[status]}
                    </UI.Status>
                  </UI.Container>
                  <UI.Container flex={70} align={'right'}>
                    <UI.Price>
                      {amount} {actualCurrency}
                    </UI.Price>
                  </UI.Container>
                </UI.TransactionContainer>
              </Fragment>
            );
          },
        )}
      </Media>

      <Pagination pagination={transactions?.Pagination} />
    </UI.TransactionsWrapper>
  );
};

export default UserTransactions;
