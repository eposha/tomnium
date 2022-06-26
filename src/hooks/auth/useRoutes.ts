import {useRouter} from 'next/router';
import {useBackRoute} from 'src/helpers';

const useRoutes = () => {
  const router = useRouter();

  const {query} = router;

  const {fromMainPage} = query;

  const {backButtonPush} = useBackRoute();

  const handlePushLogin = (isPush?: boolean) =>
    router[isPush ? 'push' : 'replace'](
      fromMainPage ? '/auth/login?fromMainPage=true' : '/auth/login',
    );
  const handlePushRegister = () =>
    router.replace(
      fromMainPage ? '/auth/register?fromMainPage=true' : '/auth/register',
    );
  const handlePushReset = () =>
    router.replace(
      fromMainPage ? '/auth/reset?fromMainPage=true' : '/auth/reset',
    );

  return {
    handlePushRegister,
    handlePushReset,
    handlePushLogin,
    backButtonPush,
    query,
  };
};

export default useRoutes;
