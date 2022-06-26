import {FC} from 'react';
import {Button} from 'styles/common';
import {destroyCookie} from 'nookies';
import {COOKIES_TOKEN_NAME, DNA_TOKEN_FROM_ADMIN} from '@/lib/apolloClient';
import {useRouter} from 'next/router';

interface ILogOutBtn {
  txt: string;
}

const LogOutBtn: FC<ILogOutBtn> = ({txt}) => {
  const router = useRouter();
  const isDevRoute =
    process.env.NEXT_PUBLIC_REST_API_URL?.includes('lwi.lab325.com');

  const handleClick = () => {
    destroyCookie(null, COOKIES_TOKEN_NAME, {
      path: '/',
    });

    destroyCookie(null, DNA_TOKEN_FROM_ADMIN, {
      path: '/',
      domain: isDevRoute ? 'lwi.lab325.com' : 'womaninsight.com',
    });

    router.push('/');
  };
  return (
    <Button type='button' $dashed width={160} $label onClick={handleClick}>
      {txt}
    </Button>
  );
};

export default LogOutBtn;
