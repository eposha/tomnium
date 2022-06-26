import HomeworksIcon from 'public/icons/BookSVG.svg';
import ThreadsIcon from 'public/icons/FileSVG.svg';
import StatisticsIcon from 'public/icons/ChartSVG.svg';
import Appointments from 'public/icons/profile/MyProfileSVG.svg';

export const sidebarRoutes = [
  {
    path: 'homeworks-results',
    title: 'Домашние задания',
    icon: <HomeworksIcon width={20} height={20} />,
  },
  {
    path: 'statistics/homeworks',
    title: 'Статистика',
    icon: <StatisticsIcon width={20} height={20} />,
  },
  {
    path: 'threads',
    title: 'Все потоки',
    icon: <ThreadsIcon width={20} height={20} />,
  },
  {
    path: 'appointments',
    title: 'Мои Консультации',
    icon: <Appointments width={20} height={20} />,
  },
];
