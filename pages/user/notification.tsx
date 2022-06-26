import LinkButton from '@/components/notifications/buttons/LinkButton';
import NotificationBlock from '@/components/notifications/notification-block/NotificationBlock';
import UserSideMenuMobile from '@/components/user/UserSideMenuMobile';
import {UserLayout} from 'src/components/user';
import NotificationSVG from 'public/icons/profile/NotificationSVG.svg';
import {Media} from 'src/media-styles';
import {
  NotificationBlockWrapper,
  NotificationBlockInner,
  NotificationPromt,
  NotificationPageTitle,
} from 'styles/notifications/NotificationsSettings';

const Notification = () => {
  return (
    <UserLayout>
      <NotificationBlockWrapper>
        <Media at='xs'>
          <UserSideMenuMobile Icon={NotificationSVG} number={2} />
        </Media>
        <Media greaterThan='xs'>
          <NotificationPageTitle>Уведомления</NotificationPageTitle>
        </Media>
        <NotificationPromt>
          Выберите из списка уведомления, которые вы бы хотели получать на
          электронный ящий и на платформе
        </NotificationPromt>
        <NotificationBlockInner>
          <NotificationBlock
            title='E-mail'
            data='andreimiroshnichenkol@gmail.com'
            changeable='Изменить'
          />
          <NotificationBlock title='На платформе' />
          <NotificationBlock
            title='Whatsapp'
            data='+38 (067) 345 27 28'
            changeable='Отвязать'
          />
          <NotificationBlock
            title='Whatsapp'
            data='+38 (067) 345 27 28'
            changeable='Отвязать'
          />
        </NotificationBlockInner>
        <LinkButton text='Подключить Viber' />
      </NotificationBlockWrapper>
    </UserLayout>
  );
};

export default Notification;
