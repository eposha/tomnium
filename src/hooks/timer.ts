import {useEffect, useRef, useState} from 'react';
import {
  differenceInSeconds,
  intervalToDuration,
  isFuture,
  isPast,
} from 'date-fns';
import {utcToZonedTime} from 'date-fns-tz';

const getTimeToday = (timezone: string) => utcToZonedTime(new Date(), timezone);

export const useTimer = (
  startDate: Date | null,
  finishDate: Date | null,
  timezone?: string,
) => {
  const [seconds, setSeconds] = useState<null | number>(null);

  const interval = useRef<NodeJS.Timeout | undefined | number | null>();

  const tick = (date: Date, timezone: string) => () => {
    setSeconds(differenceInSeconds(date, getTimeToday(timezone)));
  };

  useEffect(() => {
    if (!startDate || !finishDate || !timezone) return;
    setSeconds(
      differenceInSeconds(
        isPast(startDate) ? finishDate : startDate,
        getTimeToday(timezone),
      ),
    );
  }, [startDate, finishDate, timezone]);

  useEffect(() => {
    if (!startDate || !timezone) return;
    if (interval.current || isPast(startDate)) return;
    interval.current = setInterval(tick(startDate, timezone), 1000);
  }, [startDate, timezone]);

  useEffect(() => {
    if (!startDate || !finishDate || !seconds || !timezone) return;
    if (seconds > 0 && isFuture(startDate)) return;
    clearInterval(interval.current as number);
    interval.current = setInterval(tick(finishDate, timezone), 1000);
  }, [seconds, startDate, finishDate, timezone]);

  useEffect(() => {
    return () => {
      clearInterval(interval.current as number);
    };
  }, []);

  useEffect(() => {
    if (!finishDate) return;
    if (!isPast(finishDate)) return;
    clearInterval(interval.current as number);
    interval.current = null;
  }, [seconds, finishDate]);

  const {days = 0} = intervalToDuration({
    start: 0,
    end: (seconds || 0) * 1000,
  });

  return {
    seconds,
    days,
  };
};
