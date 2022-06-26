import {useEffect, useState} from 'react';
import {ISelectOption} from '@/types/common';

export const useSelect = (defaultValue?: ISelectOption) => {
  const [values, setValues] = useState<ISelectOption | undefined>(defaultValue);

  useEffect(() => {
    setValues(defaultValue);
  }, [defaultValue]);

  const onChangeSelect = (value: ISelectOption) => {
    setValues(value);
  };

  return {
    values,
    onChangeSelect,
  };
};
