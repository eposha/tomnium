/* eslint-disable @typescript-eslint/ban-types */
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

const useBackRoute = (routePath?: string | null, isReplace?: boolean) => {
  const router = useRouter();
  const [pushCloseForm, setClosePushForm] = useState<Function | undefined>();

  useEffect(() => {
    if (routePath) {
      setClosePushForm(
        () => () =>
          isReplace ? router.replace(routePath) : router.push(routePath),
      );
      router.prefetch(routePath);
      return;
    }
    const isFromCurrentPage =
      typeof window !== 'undefined' && +window?.history?.state?.idx > 0;

    if (isFromCurrentPage) {
      setClosePushForm(() => () => router.back());
      return;
    }
    setClosePushForm(() => () => router.push('/'));
    router.prefetch('/');
  }, [isReplace, routePath, router]);

  return {backButtonPush: () => (pushCloseForm ? pushCloseForm() : null)};
};

export default useBackRoute;
