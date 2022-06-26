import {format, intervalToDuration, isEqual} from 'date-fns';
import {getDeclension} from '@/helpers/common';
import {IInterval} from '@/types/common';

export const normalizeTime = (value: number | string | undefined) =>
  String(value).padStart(2, '0');

export const timeFormat = (function () {
  function num(val: number) {
    val = Math.floor(val);
    return val < 10 ? '0' + val : val;
  }

  return function (ms: number) {
    const sec = ms / 1000,
      hours = (sec / 3600) % 24,
      minutes = (sec / 60) % 60,
      seconds = sec % 60;
    return num(hours) + ':' + num(minutes) + ':' + num(seconds);
  };
})();

export const getRemainingTime = (days: number, allSeconds: number) => {
  if (days >= 1) {
    return `${days} ${getDeclension(['день', 'дня', 'дней'], days)}`;
  }

  const {hours, minutes, seconds} = intervalToDuration({
    start: 0,
    end: allSeconds * 1000,
  });

  return `${normalizeTime(hours)}:${normalizeTime(minutes)}:${normalizeTime(
    seconds,
  )}`;
};

export const getDateWithoutTime = (value: Date | string) => {
  const date = new Date(value);
  date.setHours(0, 0, 0, 0);
  return date;
};

export const getIsEqualDate = (
  leftDate: Date | string | null,
  rightDate: Date | string | null,
) => {
  if (!leftDate || !rightDate) return false;

  return isEqual(getDateWithoutTime(leftDate), getDateWithoutTime(rightDate));
};

export const normalizeDate = (
  date: Date | null,
  template: string,
  locale?: Locale,
) => {
  return date
    ? format(new Date(date), template, {
        locale,
      })
    : null;
};

export const getTime = (time: Date) => new Date(time).toString();

export const getSecondsFromInterval = (interval?: IInterval | null) => {
  const {hours, minutes, seconds} = interval || {};

  return (hours || 0) * 60 * 60 + (minutes || 0) * 60 + (seconds || 0);
};
