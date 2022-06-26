import {useRouter} from 'next/router';

import {getOffset} from '@/helpers/common';

import {useStudentsStatsTable} from 'src/hooks/curator-dashboard/useStudentsStatsTable';
import {useGetThreadsForCurator} from '@/graph-hooks/threads/useGetThreads';

import Table from '@/components/common/Table';
import {CuratorDashboardLayout} from '@/components/layout';
import {Title, Header} from 'styles/table';

import StatisticsTabs from '@/components/curator-dashboard/StatisticsTabs';

const StudentsStatisticsDashboard = () => {
  const {
    query: {offset},
  } = useRouter();

  const {threads, pagination} = useGetThreadsForCurator({
    variables: {
      offset: getOffset({offset, limit: 10}),
    },
    variant: 'forStudentsStats',
  });

  const {columns, data} = useStudentsStatsTable({
    threads,
  });

  return (
    <CuratorDashboardLayout pageTitle='Статистика'>
      <StatisticsTabs />
      <Table columns={columns} data={data} pagination={pagination}>
        <Header>
          <Title>Студенты</Title>
        </Header>
      </Table>
    </CuratorDashboardLayout>
  );
};

export default StudentsStatisticsDashboard;
