import Link from 'next/link';
import {useRouter} from 'next/router';
import styled from 'styled-components';

const TabsList = styled.div`
  padding: 0 10px;
`;

const TabItem = styled.a<{isActive: boolean}>`
  padding: 10px 20px;
  display: inline-block;
  background-color: rgba(0, 116, 217, 0.1);
  font-weight: 600;
  font-size: 14px;

  &:first-child {
    border-radius: 5px 0 0 0;
  }
  &:last-child {
    border-radius: 0 5px 0 0;
  }

  ${({isActive}) =>
    isActive &&
    `
      background-color: white;
    `}
`;

const routes = [
  {
    title: 'ДЗ',
    path: '/curator-dashboard/statistics/homeworks',
  },
  {
    title: 'Студенты',
    path: '/curator-dashboard/statistics/students',
  },
  {
    title: 'NPS',
    path: '/curator-dashboard/statistics/nps',
  },
  {
    title: 'Квизы',
    path: '/curator-dashboard/statistics/surveys',
  },
];

const Tabs = () => {
  const {pathname} = useRouter();
  return (
    <TabsList>
      {routes.map(({title, path}) => (
        <Link href={path} key={path} passHref>
          <TabItem isActive={pathname === path}>{title}</TabItem>
        </Link>
      ))}
    </TabsList>
  );
};

export default Tabs;
