import {FC, useMemo} from 'react';

interface ISelectColumnFilterProps {
  column: {
    filterValue: string;
    preFilteredRows: any;
    setFilter: any;
    id: string | number;
  };
}

const SelectColumnFilter: FC<ISelectColumnFilterProps> = ({
  column: {filterValue, setFilter, preFilteredRows, id},
}) => {
  const options = useMemo(() => {
    const options = new Set<any>();
    preFilteredRows.forEach((row: any) => {
      const data = row.values?.[id];
      if (Array.isArray(data)) {
        data?.forEach((it) => {
          options.add(it);
        });
      } else {
        options.add(data);
      }
    });

    return [...options.values()];
  }, [id, preFilteredRows]);

  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}>
      <option value=''>All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectColumnFilter;
