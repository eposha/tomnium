import {useRouter} from 'next/router';
import {format} from 'date-fns-tz';

const useDateFilter = () => {
  const router = useRouter();
  const {pathname, query} = router;

  const handleFilterRoute = (from: Date | null, to: Date | null) => {
    delete query.offset;

    if (from && to) {
      return router.replace({
        pathname,
        query: {
          from: format(from, 'yyyy-MM-dd'),
          to: format(to, 'yyyy-MM-dd'),
        },
      });
    }
    if (from) {
      return router.replace({
        pathname,
        query: {
          from: format(from, 'yyyy-MM-dd'),
        },
      });
    }
    if (to) {
      return router.replace({
        pathname,
        query: {
          to: format(to, 'yyyy-MM-dd'),
        },
      });
    }
  };

  return {handleFilterRoute};
};

export default useDateFilter;
