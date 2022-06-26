import {Enums, Maybe} from 'src/graphql.schema';
import {DIRECTORIES_SWR} from '@/query/directories';
import {ILanguage} from '@/types/language';
import {ITimezone} from '@/types/timezone';
import {ICurrency} from '@/types/currency';
import {ISettings} from '@/types/settings';

import {request} from 'graphql-request';
import useSWR from 'swr';

interface IDirectories {
  directories: {
    Currencies?: ICurrency[];
    Enums?: Maybe<Enums>;
    Languages?: ILanguage[];
    Timezones?: ITimezone[];
    Settings: ISettings;
  };
}

const fetcher = async (query: string) =>
  await request({
    url: process.env.NEXT_PUBLIC_GRAPH_API_URL || '',
    document: query,
  });

export const useDirectories = () => {
  const {data, error, mutate} = useSWR<IDirectories>(DIRECTORIES_SWR, fetcher, {
    dedupingInterval: 1000000000,
  });

  return {
    directories: data?.directories,
    loading: !data && !error,
    refetch: mutate,
  };
};

export default useDirectories;
