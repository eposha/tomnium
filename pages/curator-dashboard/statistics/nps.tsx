import {useRouter} from 'next/router';

import {getOffset} from '@/helpers/common';

import {useNPSStatsTable} from 'src/hooks/curator-dashboard/useNPSStatsTable';
import {useGetThreadsForCurator} from '@/graph-hooks/threads/useGetThreads';

import Table from '@/components/common/Table';
import StatisticsTabs from '@/components/curator-dashboard/StatisticsTabs';
import {CuratorDashboardLayout} from '@/components/layout';
import {Title, Header} from 'styles/table';

const NPSStatisticsDashboard = () => {
  const {
    query: {offset},
  } = useRouter();

  const {threads, pagination} = useGetThreadsForCurator({
    variables: {
      offset: getOffset({offset, limit: 10}),
    },
    variant: 'forStudentsStats',
  });

  const {columns, data} = useNPSStatsTable({
    threads,
  });

  return (
    <CuratorDashboardLayout pageTitle='Статистика'>
      <StatisticsTabs />
      <Table columns={columns} data={data} pagination={pagination}>
        <Header>
          <Title>NPS</Title>
        </Header>
      </Table>
    </CuratorDashboardLayout>
  );
};

export default NPSStatisticsDashboard;
