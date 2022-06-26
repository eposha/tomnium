import {useRouter} from 'next/router';
import {useGetThreadsForCurator} from '@/graph-hooks/threads/useGetThreads';

import Select from '@/components/common/Select';
import {getNewUrlWithQueryFromSelect} from '@/helpers/common';

const ThreadSelect = () => {
  const router = useRouter();
  const {threadId} = router.query;

  const {threads, loading} = useGetThreadsForCurator({variant: 'forSelect'});

  return (
    <Select
      value={threads.find((option) => option.id === threadId)}
      options={threads}
      onChange={(value: any) =>
        router.replace(
          getNewUrlWithQueryFromSelect({
            selectValue: value,
            selectValueField: 'id',
            queryFieldName: 'threadId',
            router,
          }),
        )
      }
      placeholder='Выбрать поток'
      isLoading={loading}
      isClearable
    />
  );
};

export default ThreadSelect;
