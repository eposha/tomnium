import {useRouter} from 'next/router';
import {getNewUrlWithQueryFromSelect, getOffset} from '@/helpers/common';

import {useGetHomeworksResults} from '@/graph-hooks/homeworkResults/useGetHomeworkResults';
import {useHomeworksResultsTable} from 'src/hooks/curator-dashboard/useHomeworksResults';

import Table from '@/components/common/Table';
import {CuratorDashboardLayout} from '@/components/layout';
import {Header} from 'styles/table';
import Select from '@/components/common/Select';

const HomeworksDashboard = () => {
  const router = useRouter();
  const {offset, threadId, onlyVip} = router.query;

  const {results, pagination} = useGetHomeworksResults({
    offset: getOffset({offset, limit: 10}),
    filter: {
      threadId: threadId as string,
      onlyVip: (onlyVip && onlyVip === 'true') as boolean,
    },
  });

  const {columns, data} = useHomeworksResultsTable({
    results,
  });

  return (
    <CuratorDashboardLayout
      pageTitle='Домашние задания'
      sidebarProps={{withThreadSelect: true}}>
      <Table columns={columns} data={data} pagination={pagination}>
        <Header>
          <Select
            options={[
              {
                label: 'Только Vip+',
                value: true,
              },
            ]}
            onChange={(value: any) => {
              router.replace(
                getNewUrlWithQueryFromSelect({
                  selectValue: value,
                  selectValueField: 'value',
                  queryFieldName: 'onlyVip',
                  type: 'boolean',
                  router,
                }),
              );
            }}
            isOptionSelected={(option: any) =>
              String(option?.value) === onlyVip
            }
            placeholder='Фильтр'
            minWidth='150px'
            isClearable
          />
        </Header>
      </Table>
    </CuratorDashboardLayout>
  );
};

export default HomeworksDashboard;
