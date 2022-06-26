import {useCookieSettings} from '../useCookieSettings';
import {useEffect, useState} from 'react';
import {ICurrency} from '@/types/currency';

export const useCurrency = (options?: ICurrency[]) => {
  const {
    settings: {currencyId},
    changeSettings,
  } = useCookieSettings();
  const [currency, setCurrency] = useState<ICurrency | Record<string, any>>({});

  useEffect(() => {
    if (!options?.length) return;
    const val = options.find((it) => it.id === currencyId) ?? options[0];
    setCurrency(val);
  }, [options, currencyId]);

  const changeCurrency = (value: any) =>
    changeSettings('currencyId', value?.id);

  return {
    currency,
    changeCurrency,
  };
};
