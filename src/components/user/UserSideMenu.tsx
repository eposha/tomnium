import {useEffect} from 'react';
import {useRouter} from 'next/router';
import MyProfileSVG from 'public/icons/profile/MyProfileSVG.svg';
import NotificationSVG from 'public/icons/profile/NotificationSVG.svg';
import PaymentSVG from 'public/icons/profile/PaymentSVG.svg';
import PurchaseSVG from 'public/icons/profile/PurchaseSVG.svg';
import SecureSVG from 'public/icons/profile/SecureSVG.svg';
import MegaphoneSVG from 'public/icons/profile/MegaphoneSVG.svg';
import * as UI from 'styles/user/user-sidebar-menu';
import {RoleName} from 'src/graphql.schema';
import {useUser} from '@/graph-hooks/user';

export const userProfileMenuList = [
  {
    title: 'Мой профиль',
    href: '/user/',
    Icon: MyProfileSVG,
  },
  {
    title: 'Безопасность',
    href: '/user/security/',
    Icon: SecureSVG,
  },
  {
    title: 'Акции',
    href: '/user/sales/',
    Icon: NotificationSVG,
  },
  {
    title: 'Платежи',
    href: '/user/payments/',
    Icon: PaymentSVG,
  },
  {
    title: 'Покупки',
    href: '/user/purchases/',
    Icon: PurchaseSVG,
  },
  {
    title: 'Кураторская',
    href: '/curator-dashboard/statistics/homeworks/',
    Icon: MegaphoneSVG,
  },
];

const UserSideMenu = () => {
  const router = useRouter();
  const {pathname} = router;

  const handleRoute = (href: string) => () => router.push(href);
  const {user} = useUser();
  const role = user?.Role?.name;
  const {RoleNameCurator} = RoleName;
  const renderProfileList =
    role && role === RoleNameCurator
      ? userProfileMenuList
      : userProfileMenuList.slice(0, -1);

  useEffect(() => {
    userProfileMenuList.forEach(({href}) => router.prefetch(href));
  }, []);

  return (
    <UI.Wrapper>
      {renderProfileList.map(({title, href, Icon}) => (
        <UI.LinkItem
          key={title}
          onClick={handleRoute(href)}
          isActive={pathname + '/' === href}>
          <UI.IconWrapper isActive={pathname + '/' === href}>
            <Icon width={20} height={20} color={'red'} />
          </UI.IconWrapper>
          {title}
        </UI.LinkItem>
      ))}
    </UI.Wrapper>
  );
};

export default UserSideMenu;
