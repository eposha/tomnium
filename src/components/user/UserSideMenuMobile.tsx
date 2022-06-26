import {FC, useEffect} from 'react';
import {useRouter} from 'next/router';

import Select from '../common/Select';
import {RoleName} from 'src/graphql.schema';

interface userProfileMenuListPropType {
  number?: number;
  Icon: any;
  role?: string;
}

export const userProfileMenuList = [
  {
    label: 'Мой профиль',
    value: '/user/',
  },
  {
    label: 'Безопасность',
    value: '/user/security/',
  },
  {
    label: 'Акции',
    value: '/user/sales/',
  },
  {
    label: 'Платежи',
    value: '/user/payments/',
  },
  {
    label: 'Покупки',
    value: '/user/purchases/',
  },
  {
    label: 'Кураторская',
    value: '/curator-dashboard/statistics/homeworks/',
  },
];

const UserSideMenuMobile: FC<userProfileMenuListPropType> = ({
  number = 0,
  Icon,
  role,
}) => {
  const router = useRouter();

  const handleRoute = (value: string) => router.push(value);
  const {RoleNameCurator} = RoleName;

  const renderProfileList =
    role && role === RoleNameCurator
      ? userProfileMenuList
      : userProfileMenuList.slice(0, -1);

  useEffect(() => {
    userProfileMenuList.forEach(({value}) => router.prefetch(value));
  }, []);

  return (
    <Select
      options={renderProfileList}
      value={userProfileMenuList[number]}
      onChange={(value) => {
        handleRoute(value.value);
      }}
      Icon={Icon}
      isNote
    />
  );
};

export default UserSideMenuMobile;
