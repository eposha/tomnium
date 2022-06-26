import {FC, useEffect} from 'react';
import {Media} from 'src/media-styles';
import {Sidebar} from '@/components/curator-dashboard';

import * as UI from 'styles/curator-dashboard/layout';
import {useUser} from '@/graph-hooks/user';
import {useRoutes} from 'src/hooks';
import {RoleName} from 'src/graphql.schema';

interface ICuratorDashboardLayout {
  pageTitle: string;
  sidebarProps?: {
    withThreadSelect?: boolean;
    withCourseSelect?: boolean;
  };
}

const CuratorDashboardLayout: FC<ICuratorDashboardLayout> = ({
  children,
  pageTitle,
  sidebarProps,
}) => {
  const {handlePushLogin, backButtonPush} = useRoutes();
  const {user, loading} = useUser();

  const isCurator = user && user?.Role?.name === RoleName.RoleNameCurator;

  useEffect(() => {
    if (!user && !loading) {
      handlePushLogin();
    }
    if (!isCurator) {
      backButtonPush();
    }
  }, [user]);

  return (
    <UI.Wrapper>
      {isCurator && (
        <>
          <Media greaterThan='xs'>
            <Sidebar sidebarProps={sidebarProps} />
          </Media>
          <UI.Main>
            {pageTitle && <UI.Title>{pageTitle}</UI.Title>}
            {children}
          </UI.Main>
        </>
      )}
    </UI.Wrapper>
  );
};

export default CuratorDashboardLayout;
