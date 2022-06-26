import ErrorPage from '@/components/errors/ErrorPage';
import {ReactElement} from 'react';

const NotFound = () => {
  return <ErrorPage />;
};

NotFound.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default NotFound;
