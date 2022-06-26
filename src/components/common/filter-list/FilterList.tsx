import {ChangeEvent, FC, useEffect, useState} from 'react';
import {Text, Box} from 'styles/common';
import * as UI from 'styles/filter';

export type FilterType = 'primary' | 'type';
export interface IFilterItem<T> {
  displayName: T;
  id: T;
}

interface IFiltersData {
  type: FilterType;
  title: string;
  filterItems: IFilterItem<string>[];
  handleFilterRoute: (id: string) => unknown;
}

interface IFilter {
  filtersData: IFiltersData;
  filterList?: string | string[];
  isSearchInput?: boolean;
  isShowMoreButton?: boolean;
}

const initialItemsToShow = 8;

const FilterList: FC<IFilter> = ({
  filtersData,
  filterList,
  isSearchInput = false,
  isShowMoreButton = false,
}) => {
  const {type, title, filterItems, handleFilterRoute} = filtersData;
  const [itemsToShow, setItemsToShow] = useState<number>(
    isShowMoreButton ? initialItemsToShow : filterItems?.length,
  );
  const [isShowItems, setIsShowItems] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const val = isShowMoreButton
      ? initialItemsToShow
      : filterItems?.length || 0;
    setItemsToShow(val);
  }, [filterItems, isShowMoreButton]);

  const handleSearch = ({target}: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(target.value);
  };

  const getData = () => {
    return searchValue
      ? filterItems?.filter((item) =>
          item.displayName.toLowerCase().includes(searchValue.toLowerCase()),
        )
      : filterItems;
  };

  const handleShowMore = () => {
    const itemsToShow = isShowItems ? initialItemsToShow : filterItems?.length;
    setItemsToShow(itemsToShow);
    setIsShowItems((prev) => !prev);
  };

  return (
    <UI.FilterWrapper>
      <Text fontSize={'16px'} fontWeight={'500'}>
        {title}
      </Text>
      {isSearchInput && (
        <UI.SearchInput
          value={searchValue}
          onChange={handleSearch}
          placeholder={'Поиск'}
        />
      )}
      {getData()
        ?.slice(0, itemsToShow)
        ?.map(({displayName, id}) =>
          type === 'primary' ? (
            <UI.Label key={id}>
              <UI.Input
                type={'checkbox'}
                onChange={() => handleFilterRoute(id)}
                checked={!!filterList?.includes(id)}
              />
              <UI.Indicator />
              <Text>{displayName}</Text>
            </UI.Label>
          ) : // for different filter type
          null,
        )}
      {isShowMoreButton && (
        <UI.ButtonIsMoreItems onClick={handleShowMore}>
          {isShowItems ? 'Свернуть' : 'Смотреть еще'}
          <Box ml={'10px'} as={'span'} height={'12px'}>
            <UI.Arrow
              src={'/icons/ChevronDown.svg'}
              width={12}
              height={12}
              $isRotate={isShowItems}
            />
          </Box>
        </UI.ButtonIsMoreItems>
      )}
    </UI.FilterWrapper>
  );
};

export default FilterList;
