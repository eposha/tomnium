import {FC} from 'react';
import {useCookieSettings} from 'src/hooks';
import {useDirectories} from '@/graph-hooks/directories';
import {IPriceListTable} from '../index';

import Select from '@/components/common/Select';

import * as UI from 'styles/courses/course-price-list/table';

import {PriceListColumn} from './PriceListColumn';

export const Desktop: FC<IPriceListTable> = ({
  priceLists,
  priceListOptions,
  url,
}) => {
  const {settings, changeSettings} = useCookieSettings();
  const {directories, loading: loadingDirectories} = useDirectories();

  return (
    <>
      <UI.TableWrapper>
        <UI.TableColumn main>
          <UI.TableCell main>
            <UI.PropertyCellInner $isTitle></UI.PropertyCellInner>
          </UI.TableCell>
          {priceListOptions?.map((option) => (
            <UI.TableCell key={option.id} main>
              <UI.PropertyCellInner>{option.title}</UI.PropertyCellInner>
            </UI.TableCell>
          ))}
          <UI.TableCell main $isLast>
            <UI.PropertyCellInner $isTitle>
              <UI.PriceTitle>Цена</UI.PriceTitle>
              <Select
                options={directories?.Currencies}
                value={directories?.Currencies?.find(
                  (option) => option.id === settings?.currencyId,
                )}
                onChange={(value) => changeSettings('currencyId', value.id)}
                valueField='id'
                labelField='code'
                instanceId='currency-select'
                id='currency-select'
                width='100px'
                isLoading={loadingDirectories}
              />
            </UI.PropertyCellInner>
          </UI.TableCell>
        </UI.TableColumn>

        {priceLists?.map((list) => (
          <PriceListColumn
            key={list.id}
            list={list}
            priceListOptions={priceListOptions}
            priceListsLength={priceLists.length}
            settings={settings}
            url={url}
            currencies={directories?.Currencies}
          />
        ))}
      </UI.TableWrapper>
    </>
  );
};
