import {useRouter} from 'next/router';

import {useThreadsTable} from 'src/hooks/curator-dashboard/useThreadsTable';
import {useGetThreads} from '@/graph-hooks/threads/useGetThreads';
import {getNewUrlWithQueryFromSelect} from '@/helpers/common';

import {CuratorDashboardLayout} from '@/components/layout';
import Table from '@/components/common/Table';
import Select from '@/components/common/Select';
import {Header} from 'styles/table';

const filterOptions = [
  {label: 'Активные', value: true},
  {label: 'Cкрытые', value: false},
];

const ThreadsDashboard = () => {
  const router = useRouter();
  const {offset, courseId, published} = router.query;

  const {threads, pagination} = useGetThreads({
    offset: offset ? (+offset - 1) * 10 : undefined,
    filter: {
      courseId: courseId as string,
      published: (published && published === 'true') as boolean,
    },
  });

  const {columns, data} = useThreadsTable({
    threads,
  });

  return (
    <CuratorDashboardLayout
      pageTitle='Все потоки'
      sidebarProps={{withCourseSelect: true}}>
      <Table columns={columns} data={data} pagination={pagination}>
        <Header>
          <Select
            value={filterOptions.find(
              (option) => String(option.value) === published,
            )}
            options={filterOptions}
            onChange={(value: any) => {
              router.replace(
                getNewUrlWithQueryFromSelect({
                  selectValue: value,
                  selectValueField: 'value',
                  queryFieldName: 'published',
                  type: 'boolean',
                  router,
                }),
              );
            }}
            placeholder='Фильтр'
            labelField='label'
            isClearable
          />
        </Header>
      </Table>
    </CuratorDashboardLayout>
  );
};

export default ThreadsDashboard;
