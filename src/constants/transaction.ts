import {TransactionStatus} from 'src/graphql.schema';

export const TRANSACTION_STATUS = {
  TRANSACTION_STATUS_APPROVED: 'Оплачено',
  TRANSACTION_STATUS_CREATED: 'Создано',
  TRANSACTION_STATUS_DECLINED: 'Отменено',
  TRANSACTION_STATUS_DUPLICATE: 'Дубликат',
  TRANSACTION_STATUS_EXPIRED: 'Устарело',
  TRANSACTION_STATUS_GIFT: 'Подарок',
  TRANSACTION_STATUS_IN_REVERSE_PROCESS: 'В процессе',
  TRANSACTION_STATUS_PENDING: 'Ожидает',
  TRANSACTION_STATUS_PROCESS: 'В процессе',
  TRANSACTION_STATUS_PURCHASE: 'Оплачено',
  TRANSACTION_STATUS_REVERSE: 'Возврат',
  TRANSACTION_STATUS_REVERSED: 'Возврат',
};

const {
  TransactionStatusDeclined,
  TransactionStatusDuplicate,
  TransactionStatusExpired,
  TransactionStatusReverse,
  TransactionStatusReversed,
} = TransactionStatus;

export const TRANSACTION_FAILURE =
  TransactionStatusDeclined ||
  TransactionStatusDuplicate ||
  TransactionStatusExpired ||
  TransactionStatusReverse ||
  TransactionStatusReversed;
