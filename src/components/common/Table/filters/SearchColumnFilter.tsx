import {FC, useState} from 'react';
import {useAsyncDebounce} from 'react-table';

interface ISearchFilterProps {
  column: {
    filterValue: string;
    preFilteredRows: any;
    setFilter: any;
  };
}

const SearchColumnFilter: FC<ISearchFilterProps> = ({
  column: {filterValue, setFilter},
}) => {
  const [value, setValue] = useState(filterValue);

  const onChange = useAsyncDebounce((valueDebounce: string) => {
    setFilter(valueDebounce.trim() ?? undefined);
  }, 250);

  return (
    <input
      type='text'
      value={value ?? ''}
      onChange={(e) => {
        const input = e.target.value;
        setValue(input);
        onChange(input);
      }}
    />
  );
};

export default SearchColumnFilter;
