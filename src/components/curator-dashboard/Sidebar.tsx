import {FC} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

import {sidebarRoutes} from '@/helpers/curator-dashboard';

import Sidebar from '@/components/common/Sidebar';
import ThreadSelect from './ThreadSelect';
import CourseSelect from './CourseSelect';
import * as UI from 'styles/curator-dashboard/sidebar';

interface ICuratorDashboardSidebarProps {
  sidebarProps?: {
    withThreadSelect?: boolean;
    withCourseSelect?: boolean;
  };
}

const CuratorDashboardSidebar: FC<ICuratorDashboardSidebarProps> = ({
  sidebarProps,
}) => {
  const {pathname} = useRouter();
  const {withCourseSelect, withThreadSelect} = sidebarProps || {};

  return (
    <Sidebar>
      {withThreadSelect && <ThreadSelect />}
      {withCourseSelect && <CourseSelect />}
      <UI.MenuList>
        {sidebarRoutes.map(({path, title, icon}) => (
          <Link href={`/curator-dashboard/${path}`} key={title} passHref>
            <UI.MenuItem $isActive={pathname.includes(path.split('/')[0])}>
              {icon}
              {title}
            </UI.MenuItem>
          </Link>
        ))}
      </UI.MenuList>
    </Sidebar>
  );
};

export default CuratorDashboardSidebar;
