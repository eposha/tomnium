import {FC, useState} from 'react';
import {SelectInput} from 'styles/user/userProfile';
import React from 'react';
import useCities from '@/graph-hooks/cities/useCities';

interface SelectPropsType {
  selectData: any;
  isEdit?: boolean;
  id?: number;
  onChangeFunc?: any;
  inpRef?: any;
}

const SelectElem: FC<SelectPropsType> = ({
  selectData,
  id,
  onChangeFunc,
  // inpRef,
}) => {
  const [cities, setCities] = useState([]);

  useCities({limit: 10, filter: {countryId: id}}, (data: any) => {
    setCities(
      data.cities.Cities.map((elem: any) => ({
        label: elem.name,
        value: elem.id,
      })),
    );
  });

  return (
    <SelectInput
      options={cities}
      onChange={(e) => {
        if (!!e[0]) {
          onChangeFunc((e[0] as any).value);
        }
      }}
      value={selectData}
      // ref={inpRef}
      placeholder='Select'
      // required
    />
  );
};

export default SelectElem;
