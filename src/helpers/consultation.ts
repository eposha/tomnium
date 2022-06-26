import {IPrice} from '@/types/price';
import {convertToLargeAmount} from './price';
import {CURRENCY_CODE, DEFAULT_CURRENCY_ID} from '@/constants/common';
import {IDataSelect, TLanguagesConsultation} from '@/types/consultation';
import {getSelectOptions} from '@/helpers/common';
import {ConsultationDuration} from 'src/graphql.schema';
import {CONSULTATION_DURATION} from '@/constants/consultation';
import {IAppointment, ISelectOption} from '@/types/common';
import {utcToZonedTime} from 'date-fns-tz';

export const getTextLabelCard = (
  isOwner?: boolean,
  isBooked?: boolean | null,
  ticketsCount?: number,
) => {
  if (isOwner && ticketsCount) {
    return `Куплено ${ticketsCount}`;
  }

  if (isBooked && !isOwner) {
    return `У вас уже забронирована консультация`;
  }

  if (ticketsCount && !isBooked && !isOwner) {
    return `У вас уже куплена, но еще не забронирована консультация`;
  }

  return null;
};

export const getTextPrice = ({
  isOwner,
  Prices,
  duration,
  ticketsCount,
  isBooked,
  userCurrencyCode = CURRENCY_CODE.USD,
}: {
  isBooked?: boolean | null;
  isOwner?: boolean;
  Prices?: IPrice[] | null;
  duration?: string;
  ticketsCount?: number;
  userCurrencyCode?: string;
}) => {
  if (!isOwner) {
    if (!Prices) {
      return '-';
    }
    const priceObj = Prices?.find(
      (it) => it.Currency.code === userCurrencyCode,
    );
    const price = convertToLargeAmount(priceObj?.withSale);
    const currencyCode = priceObj?.Currency?.code;

    return `${price} ${currencyCode} / ${duration}`;
  }
  if (isBooked) {
    return 'Забронировано';
  }
  if (ticketsCount) {
    return 'Куплено';
  }
};

export const getDataLanguageSelect = (
  languages?: TLanguagesConsultation,
  userLangCode?: string,
): IDataSelect => {
  const options = getSelectOptions('nativeName', 'code', languages);
  const optionWithUserLanguage = options?.find(
    (it) => it.value === userLangCode,
  );
  const defaultValue = optionWithUserLanguage || options?.[0];

  return {
    options,
    defaultValue,
  };
};

export const getDataPricesSelect = (
  prices?: IPrice[] | null,
  currencyId?: string | number,
  duration?: ConsultationDuration,
): IDataSelect => {
  const options = (prices || [])?.map((it) => ({
    label: `${convertToLargeAmount(it.withSale)} ${it.Currency.code} / ${
      CONSULTATION_DURATION[duration || '']
    }`,
    value: it.Currency.id,
  }));

  const defaultValue = options?.find(
    (it) => String(currencyId || DEFAULT_CURRENCY_ID) === String(it.value),
  );

  return {
    options,
    defaultValue,
  };
};

export const getInitDate = (
  timezone?: ISelectOption,
  queryAppointment?: IAppointment,
  defaultTime?: Date,
) => {
  if (!timezone?.value) return null;
  if (!queryAppointment) return defaultTime || null;
  return utcToZonedTime(queryAppointment.startAt, timezone.value as string);
};
