import {FC} from 'react';
import Link from 'next/link';
import Table from '@/components/notifications/NotificationsTable';

import {useNotificationsTable} from 'src/hooks/notifications/useNotificationsTable';
import {CellLink} from 'styles/table';

import * as UI from 'styles/notifications/notification-page';
import {Message} from 'src/graphql.schema';
import {IPagination} from '@/types/common';

const navTabs = [
  {
    title: 'Все',
    href: '/notifications',
  },

  // Будет добавлено позже
  // {
  //   title: 'Чат',
  //   href: '/notifications/chat',
  // },
  // {
  //   title: 'Курсы',
  //   href: '/notifications/courses',
  // },
  // {
  //   title: 'Оплата',
  //   href: '/notifications/payment',
  // },
  // {
  //   title: 'Реклама',
  //   href: '/notifications/advert',
  // },
];

interface INotificationsDesktop {
  notifications: Message[];
  Pagination?: IPagination;
  loadingStory: boolean;
  handleNotificationStory: () => Promise<void>;
}

const NotificationDesktop: FC<INotificationsDesktop> = ({
  notifications,
  Pagination,
  loadingStory,
  handleNotificationStory,
}) => {
  const {columns, data} = useNotificationsTable({
    notifications,
  });

  return (
    <UI.MainSection>
      <UI.NavigationWrapper>
        {navTabs.map(({title, href}) => (
          <Link key={href} href={href} passHref>
            <UI.NavCardWrapper>
              <UI.NavTabs>{title}</UI.NavTabs>
              <UI.Triangle />
            </UI.NavCardWrapper>
          </Link>
        ))}
        {/* Будет добавлено позже */}
        {/* <Link href={'/notifications/support'} passHref>
      <UI.NavCardWrapper>
        <UI.LastTriangle />
        <UI.NavTabs>Поддержка</UI.NavTabs>
      </UI.NavCardWrapper>
    </Link> */}
      </UI.NavigationWrapper>
      <UI.NotificationWrapper>
        {/* Будет позже */}
        {/* <UI.Filter>
      <UI.LeftSide>
        <UI.CalendarIcon />
        <UI.DatePickerWrapper>
          <UI.DatePicker
            selected={startDateStart}
            onChange={(date: Date) => setStartDateStart(date)}
            dateFormat='dd.MM.yyyy'
          />
        </UI.DatePickerWrapper>
        <UI.Decline>-</UI.Decline>
        <UI.DatePickerWrapper>
          <UI.DatePicker
            selected={startDateEnd}
            onChange={(date: Date) => setStartDateEnd(date)}
            dateFormat='dd.MM.yyyy'
          />
        </UI.DatePickerWrapper>
      </UI.LeftSide>

      <UI.RightSide>
        <UI.Actions>Отметить все как прочитанные</UI.Actions>
        <UI.Actions>Избранное</UI.Actions>
        <UI.SearchWrapper>
          <UI.Search placeholder='Поиск' />
          <UI.SearchIconWrapper>
            <UI.SearchIcon />
          </UI.SearchIconWrapper>
        </UI.SearchWrapper>
      </UI.RightSide>
    </UI.Filter> */}

        <div>
          <Table columns={columns} data={data} />
        </div>
        {(Pagination?.nextPageExists || loadingStory) && (
          <UI.AddMore onClick={handleNotificationStory}>
            <CellLink>{loadingStory ? 'Loading...' : 'Загрузить еще'}</CellLink>
          </UI.AddMore>
        )}
      </UI.NotificationWrapper>
    </UI.MainSection>
  );
};

export default NotificationDesktop;
