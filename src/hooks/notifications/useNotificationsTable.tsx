import {FC} from 'react';
import {DATE_FORMAT} from '@/constants/common';
import {useGetParent} from '@/graph-hooks/notifications/useGetParent';
import {format} from 'date-fns';
import {useMemo} from 'react';
import {EntityName, Message} from 'src/graphql.schema';
import {
  handleGetParent,
  entityStartLink,
} from 'src/helpers/notifications/generateLink';
import {
  CellLink,
  CellText,
  // SupportNotificationTypeIcon,
  // PaymentNotificationTypeIcon,
  // NewMessageNotificationTypeIcon,
  // NewModuleNotificationTypeIcon,
  NewSuggestionNotificationTypeIcon,
  WithDot,
  // SupportNotificationStatusIcon,
} from 'styles/notifications/table';

//@ts-ignore
// const notificationType = {
//   support: <SupportNotificationTypeIcon />,
//   payment: <PaymentNotificationTypeIcon />,
//   newMessage: <NewMessageNotificationTypeIcon />,
//   newModule: <NewModuleNotificationTypeIcon />,
//   suggestion: <NewSuggestionNotificationTypeIcon />,
//   // support: <SupportNotificationStatusIcon />,
// };

interface ILinkToNotification {
  id: string;
  entityName: EntityName;
}

const LinkToNotification: FC<ILinkToNotification> = ({id, entityName}) => {
  const {getParent} = useGetParent();

  //@ts-ignore
  const isRender = entityName && entityStartLink[entityName];

  return isRender ? (
    <div style={{cursor: 'pointer'}}>
      <CellLink onClick={handleGetParent(id, entityName, getParent)}>
        Смотреть
      </CellLink>
    </div>
  ) : null;
};

export const useNotificationsTable = ({
  notifications,
}: {
  notifications: Message[];
}) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Тип',
        accessor: 'type',
        Cell: () => {
          return <NewSuggestionNotificationTypeIcon />;
        },
      },
      {
        Header: 'Дата',
        accessor: 'createdAt',
        Cell: ({row}: any) => {
          const {createdAt, updatedAt} = row.original;

          return (
            <div>
              <CellText margin='0 0 5px'>
                {format(new Date(updatedAt || createdAt), DATE_FORMAT.primary)}
              </CellText>

              <CellText secondary>
                {format(new Date(updatedAt || createdAt), DATE_FORMAT.time)}
              </CellText>
            </div>
          );
        },
      },
      {
        Header: 'Сообщение',
        accessor: 'body',
        Cell: ({row}: any) => {
          const {body} = row.original;

          return (
            <div style={{maxWidth: 480}}>
              <CellText main>Уведомление:</CellText>

              <CellText secondary lineClamp={3}>{`${body}`}</CellText>
            </div>
          );
        },
      },
      {
        Header: 'Действие',
        accessor: 'action',
        Cell: ({row}: any) => {
          const {meta} = row.original;
          const {Parent} = meta || {};
          const {entityName, id} = Parent || {};

          return <LinkToNotification entityName={entityName} id={id} />;
        },
      },
      {
        Header: 'Статус',
        accessor: 'isRead',
        Cell: ({row}: any) => {
          const {isRead} = row.original;

          return (
            <CellText align='right' nowrap margin={'0 20px 0 0'}>
              <WithDot fontSize='10px' $isDisabled={!!isRead}>
                {isRead ? 'Прочитано' : 'Не прочитано'}
              </WithDot>
            </CellText>
          );
        },
      },
    ],
    [],
  );
  const data = useMemo(() => notifications || [], [notifications]);

  return {
    data,
    columns,
  };
};
