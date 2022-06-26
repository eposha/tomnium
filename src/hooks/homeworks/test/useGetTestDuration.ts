import {useEffect, useState} from 'react';
import {intervalToDuration} from 'date-fns';

export const useGetTestDuration = () => {
  const [duration, setDuration] = useState('');

  useEffect(() => {
    const homeworkMeta = JSON.parse(
      localStorage.getItem('homeworkTestMeta') || '{}',
    );

    if (homeworkMeta.startDate && homeworkMeta.endDate) {
      const res = intervalToDuration({
        start: new Date(homeworkMeta.startDate),
        end: new Date(homeworkMeta.endDate),
      });

      const diff = `${
        (res.minutes || 0) < 10 ? `0${res.minutes}` : res.minutes
      }:${(res.seconds || 0) < 10 ? `0${res.seconds}` : res.seconds}`;

      setDuration(diff);
    }
  }, []);

  return {duration};
};
