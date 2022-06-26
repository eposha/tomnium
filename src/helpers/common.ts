import {IPrice, IUser} from '@/types/index';
import {CoursePreview} from 'src/graphql.schema';
import {
  COURSE_MODE_TYPE,
  CURRENCY_CODE,
  CURRENCY_ICON_BY_CODE,
  CURRENCY_ICON_BY_ID,
} from 'src/constants/common';
import {
  format,
  formatDuration as _formatDuration,
  formatDistanceToNow,
  formatDistanceToNowStrict,
} from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import {IAppointment, IDuration} from '@/types/common';
import {IMedia} from '@/types/media';
import {FILE_URL} from 'src/constants/common';
import queryString from 'query-string';
import {NextRouter} from 'next/router';

export const formatDate = (
  date: Date | null | string | undefined,
  type: string,
) => {
  return date ? format(new Date(date), type) : null;
};

export const getDeclension = (forms: string[], val: number) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return forms[
    val % 100 > 4 && val % 100 < 20 ? 2 : cases[val % 10 < 5 ? val % 10 : 5]
  ];
};

export const getRandomInteger = (min: number, max: number) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const getNearestDate = (
  consultation: IAppointment[] | undefined | null,
) => {
  if (!consultation) return;
  return consultation.sort((a: any, b: any) => {
    const first = new Date(a.startAt);
    const second = new Date(b.startAt);
    return (first as any) - (second as any);
  });
};

export const getPrice = (price: number | undefined) => {
  if (Number.isInteger(price) && !!price) {
    return price % 100 == 0 ? Math.floor(price / 100) : price / 100;
  }
  return 0;
};

export const geNormalizeUrl = (url?: string | null) => {
  if (!url) return '#';
  return url.includes('http') ? url : '//' + url;
};

export const getSelectOptions = (
  labelField: string,
  valueField: string,
  arr?: any[] | null,
) => {
  return (arr || [])?.map((it) => ({
    label: it[labelField],
    value: it[valueField],
  }));
};

export const formatDuration = (duration?: IDuration) => {
  const greatestKey =
    duration &&
    Object.keys(duration)?.find(
      (key) => key !== '__typename' && (duration as any)[key],
    );

  return duration
    ? _formatDuration(duration as any, {
        locale: ruLocale,
        format: greatestKey ? [greatestKey] : undefined,
      })
    : null;
};

export const getDistanceToNow = (params: {
  date?: Date | null;
  unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year';
}) => {
  const {date, unit} = params;

  if (date) {
    return unit
      ? formatDistanceToNowStrict(new Date(date), {
          unit,
          locale: ruLocale,
          roundingMethod: 'ceil',
        })
      : formatDistanceToNow(new Date(date), {locale: ruLocale});
  }
  return '';
};

export const getNonOriginalImage = (images?: IMedia[] | null) => {
  const imagePath = images?.find((image) => !image.isOriginal)?.path;
  return imagePath ? FILE_URL + imagePath : '';
};

export const getOriginalImage = (images?: IMedia[] | null) => {
  const imagePath = images?.find((image) => image.isOriginal)?.path;
  return imagePath ? FILE_URL + imagePath : '';
};

export const isNonEmptyObject = (object?: Record<string, any> | null) =>
  object && Object.keys(object).length > 0;

export const isNonEmptyArray = (array?: any[] | null) =>
  array && array.length > 0;

export const getOffset = ({
  offset,
  limit,
}: {
  limit?: number | string | string[];
  offset?: number | string | string[];
}) =>
  offset && (limit ?? 10) ? (Number(offset) - 1) * Number(limit) : undefined;

export const getNewUrlWithQueryFromSelect = (props: {
  selectValue: Record<string, any>;
  selectValueField: string;
  queryFieldName: string;
  type?: string;
  router: NextRouter;
}) => {
  const {selectValue, type, selectValueField, queryFieldName, router} = props;
  const {query, asPath} = router;

  if (selectValue) {
    let newQueryString = '';

    if (type === 'boolean') {
      newQueryString = selectValue[selectValueField]
        ? `${queryFieldName}=true`
        : `${queryFieldName}=false`;
    } else {
      newQueryString = `${queryFieldName}=${selectValue[selectValueField]}`;
    }
    const newPath = queryString.exclude(asPath, [queryFieldName]);

    delete query[queryFieldName];
    const currentQuery = queryString.stringify(query);

    const newQuery = currentQuery ? `&${newQueryString}` : `?${newQueryString}`;

    return newPath + newQuery;
  } else {
    return queryString.exclude(asPath, [queryFieldName]);
  }
};

export const getSlugifiedUrl = (slugOrId: string | string[] | undefined) => {
  const UUID_REGEX =
    /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/;

  const isUuid =
    UUID_REGEX.test(String(slugOrId)) && String(slugOrId).length === 36;

  return isUuid ? {record: {id: slugOrId}} : {record: {slug: slugOrId}};
};

export const getCoursePagePreviewMode = (
  id: string | string[] | undefined,
  query: string | string[] | undefined,
) => {
  const isDefaultPreview =
    query === COURSE_MODE_TYPE.COURSE_PREVIEW_DEFAULT_THREAD;
  const isOwntPreview = query === COURSE_MODE_TYPE.COURSE_PREVIEW_OWN_THREAD;

  if (isDefaultPreview)
    return {id, preview: CoursePreview.CoursePreviewDefaultThread};
  if (isOwntPreview) return {id, preview: CoursePreview.CoursePreviewOwnThread};

  return getSlugifiedUrl(id);
};

export const getUserPrice = (user: IUser | null, prices?: IPrice[]) => {
  if (user?.Currency?.code && prices?.length) {
    return prices?.find(
      (price) => price?.Currency?.code === user?.Currency?.code,
    );
  }

  if (prices?.length) {
    return prices?.find((price) => price?.Currency?.code === CURRENCY_CODE.USD);
  }
};

export const getUserCurrency = (props: {
  currencyCode?: string;
  currencyId?: number;
}) => {
  const {currencyCode, currencyId} = props;

  if (currencyCode) {
    return (CURRENCY_ICON_BY_CODE as any)[currencyCode];
  }

  if (currencyId) {
    return (CURRENCY_ICON_BY_ID as any)[currencyId];
  }
};

export const filterFooterLinks = (
  links: {name: string; link: string}[] | undefined,
  filter: any,
) => links?.filter(({name, link}) => !!(filter?.[name] && link));

type IDeclension =
  | 'years'
  | 'months'
  | 'weeks'
  | 'days'
  | 'hours'
  | 'minutes'
  | 'seconds';

export const declensionDuration = (key: IDeclension, value: number) => {
  const durationsValue = {
    years: `${value} ${getDeclension(['год', 'года', 'лет'], value)} `,
    months: `${value} ${getDeclension(['месяц', 'месяца', 'месяцев'], value)} `,
    weeks: `${value} ${getDeclension(['неделя', 'недели', 'недель'], value)} `,
    days: `${value} ${getDeclension(['день', 'дня', 'дней'], value)} `,
    hours: `${value} ${getDeclension(['час', 'часа', 'часов'], value)} `,
    minutes: `${value} ${getDeclension(['минута', 'минуты', 'минут'], value)} `,
    seconds: `${value} ${getDeclension(
      ['секунда', 'секунды', 'секунд'],
      value,
    )}`,
  };

  return durationsValue[key];
};
