import {useState} from 'react';
import {useRouter} from 'next/router';
import Select from '@/components/common/Select';

import {CuratorDashboardLayout} from '@/components/layout';
import {getOffset} from '@/helpers/common';

import {useHomeworksStatsTable} from 'src/hooks/curator-dashboard/useHomeworkStatsTable';
import {useGetHomeworksStatistics} from '@/graph-hooks/homeworkStatistics/useGetHomeworkStatistics';

import Table from '@/components/common/Table';
import StatisticsTabs from '@/components/curator-dashboard/StatisticsTabs';
import {Title, Header} from 'styles/table';

const homeworkStatsselectOptions = [
  {value: 'thread', label: 'Потоки'},
  {value: 'module', label: 'Модули'},
  {value: 'lesson', label: 'Уроки'},
];

const HomeworkStatisticsDashboard = () => {
  const {
    query: {offset},
    pathname,
    replace,
  } = useRouter();

  const [mainEntity, setMainEntity] = useState<{
    value: string;
    label: string;
  } | null>(homeworkStatsselectOptions[0]);

  const {entities, pagination} = useGetHomeworksStatistics({
    variables: {
      offset: getOffset({offset, limit: 10}),
    },
    mainEntity: mainEntity?.value,
  });

  const {columns, data} = useHomeworksStatsTable({
    entities,
    mainEntity: mainEntity?.value,
  });

  return (
    <CuratorDashboardLayout
      pageTitle='Статистика'
      sidebarProps={{withCourseSelect: true}}>
      <StatisticsTabs />
      <Table columns={columns} data={data} pagination={pagination}>
        <Header>
          <Title>Домашние задания</Title>
          <Select
            value={mainEntity}
            options={homeworkStatsselectOptions}
            onChange={(value: any) => {
              setMainEntity(value);
              replace(pathname, undefined, {shallow: true});
            }}
            labelField='label'
            isSearchable={false}
            isClearable={false}
          />
        </Header>
      </Table>
    </CuratorDashboardLayout>
  );
};

export default HomeworkStatisticsDashboard;
