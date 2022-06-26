import {useRouter} from 'next/router';
import {useEffect} from 'react';

export const useRedirect = (path: string, windowWidth: number) => {
  const router = useRouter();
  const redirect = () => {
    router.push(path);
  };
  useEffect(() => {
    if (document.documentElement.clientWidth >= windowWidth) redirect();
  }, [windowWidth]);
};
