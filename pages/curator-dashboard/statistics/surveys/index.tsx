import {useThreadsStatsTable} from 'src/hooks/curator-dashboard/useThreadsStatsTable';
import {useGetStatsThreads} from '@/graph-hooks/threads/useGetThreads';

import Table from '@/components/common/Table';
import StatisticsTabs from '@/components/curator-dashboard/StatisticsTabs';
import {CuratorDashboardLayout} from '@/components/layout';
import {Title, Header} from 'styles/table';

const QuizesStatisticsDashboard = () => {
  const {threads, pagination} = useGetStatsThreads({
    variables: {
      filter: {
        published: true,
      },
    },
  });

  const {columns, data} = useThreadsStatsTable({
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

export default QuizesStatisticsDashboard;
