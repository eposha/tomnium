import ErrorPage from '@/components/errors/ErrorPage';
import {ReactElement} from 'react';

function NoAccess() {
  return <ErrorPage noAccess />;
}

NoAccess.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default NoAccess;
