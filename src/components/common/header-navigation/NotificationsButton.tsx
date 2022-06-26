import {FC, useEffect, useState, useCallback} from 'react';
import {useRouter} from 'next/router';
import {useClickOutside} from 'src/hooks';
import {Spinner} from 'src/UIcomponents';
import {DATE_FORMAT} from '@/constants/common';
import {formatDate} from '@/helpers/common';
import {useNotificationsStory} from '@/graph-hooks/notifications/useNotificationsStory';

import {IconButton} from 'styles/iconsButton';

import BellWhite from 'public/icons/BellWhiteSVG.svg';
import BellBlue from 'public/icons/BellPrimarySVG.svg';

import Link from 'next/link';

import {Media} from 'src/media-styles';
import * as UI from 'styles/navigation/notification-desktop';
import {useGetParent} from '@/graph-hooks/notifications/useGetParent';
import {
  handleGetParent,
  entityStartLink,
} from 'src/helpers/notifications/generateLink';
import {ISubscriptionResponse} from 'src/graph/subscription/notifications/notificationsSubscription';

const notificationType = {
  support: <UI.SupportNotificationTypeIcon />,
  payment: <UI.PaymentNotificationTypeIcon />,
  newMessage: <UI.NewMessageNotificationTypeIcon />,
  newModule: <UI.NewModuleNotificationTypeIcon />,
  suggestion: <UI.NewSuggestionNotificationTypeIcon />,
};

// const notificationTitle = {
//   support: 'Ответ от технической поддержки',
//   payment: 'Оплата',
//   newMessage: 'Новое сообщение',
//   newModule: 'Новый модуль',
//   suggestion: 'Специальное предложение',
// };

// const notifications: {
//   type: 'support' | 'payment' | 'newMessage' | 'newModule' | 'suggestion';
//   them: string;
//   message: string;
//   createdAt: Date;
// }[] = [
//   {
//     type: 'support',
//     createdAt: new Date(),
//     them: 'Новый пароль',
//     message:
//       'На ваш электронный адрес будет отправлено письмо с прямой ссылкой',
//   },
//   {
//     type: 'payment',
//     createdAt: new Date(),
//     them: 'Оплата курса',
//     message: 'Оплата в сумме ХХХ за продукт прошла успешно',
//   },
//   {
//     type: 'newMessage',
//     createdAt: new Date(),
//     them: 'Куратор',
//     message: `Вы получили новое сообщение
//     от куратора курса “Притяжение ON. Ты магнит для мужчин”.`,
//   },
//   {
//     type: 'newModule',
//     createdAt: new Date(),
//     them: 'Открыт новый модуль',
//     message: `Модуль ХХХХ курса ХХХХ теперь доступен к изучению`,
//   },
//   {
//     type: 'suggestion',
//     createdAt: new Date(),
//     them: 'Специальное предложение',
//     message: `Вы получили новую персональную скидку`,
//   },
// ];

interface INotificationsButton {
  notifications?: {id: string; title: string; isActive: boolean}[];
  loading?: boolean;
  subscriptionData?: ISubscriptionResponse;
}

const NotificationsButton: FC<INotificationsButton> = ({
  loading,
  subscriptionData,
}) => {
  const limitValue = 6;
  const router = useRouter();
  // const [openOptions, setOpenOptions] = useState(false);
  const [isNewNotifications, setIsNewNotification] = useState(
    !!subscriptionData,
  );

  const {ref, isVisible, setIsVisible} = useClickOutside(false);

  const handleOpenModal = (isOpen: boolean) => () => setIsVisible(isOpen);

  const {getParent} = useGetParent();

  const handleRouteToEntity = useCallback(
    (meta) => () => {
      if (!meta?.Parent) return;
      const {id, entityName} = meta.Parent;

      //@ts-ignore
      const isRender = entityName && entityStartLink[entityName];
      if (!isRender) return;

      handleGetParent(id, entityName, getParent)();
    },
    [getParent],
  );

  const {notifications, getNotificationStory} = useNotificationsStory({
    limitValue,
    isNotLoading: !isVisible,
  });

  // const handleOpenOptions = (isOpen: boolean) => () => setOpenOptions(isOpen);

  const isNotification = !!notifications?.Messages?.length;

  useEffect(() => {
    setIsVisible(false);
  }, [router.asPath, setIsVisible]);

  useEffect(() => {
    if (!isVisible) {
      setIsNewNotification(false);
      // setOpenOptions(false);
    }
  }, [isVisible]);

  useEffect(() => {
    if (subscriptionData?.pushNotificationSubscription) {
      getNotificationStory({
        variables: {
          limit: limitValue,
        },
      });
      setIsNewNotification(true);
    }
  }, [subscriptionData]);

  return (
    <IconButton
      margin={'0 15px 0 0'}
      desktopMargin={'0 10px 0 0'}
      $isActive={isVisible}>
      <UI.NotificationBell
        $isNewNotification={isNewNotifications}
        ref={ref}
        onClick={handleOpenModal(true)}>
        {isVisible && <BellWhite width={16} height={16} alt='bell' />}
        {!isVisible && <BellBlue width={16} height={16} alt='bell' />}
        {isVisible && (
          <>
            {/* {openOptions && (
              <UI.NotificationsConfig greaterThan={'xs'}>
                <UI.NotificationSubtitleWrapper padding={'0'}>
                  <UI.NotificationSubtitle>Уведомления</UI.NotificationSubtitle>
                  <UI.NotificationOptions
                    onClick={handleOpenOptions(!openOptions)}>
                    <UI.DotesOptions />
                  </UI.NotificationOptions>
                </UI.NotificationSubtitleWrapper>

                <UI.DotesOption $firstChild>
                  <UI.SuccessSvgIcon width={20} height={20} />
                  Отметить все как прочитанные
                </UI.DotesOption>
                <UI.DotesOption>
                  {' '}
                  <UI.RemoveSvgIcon width={20} height={20} />
                  Очистить все уведомления
                </UI.DotesOption>
                <UI.DotesOption>
                  <UI.SupportSvgIcon width={20} height={20} />
                  Настроить уведомления
                </UI.DotesOption>
              </UI.NotificationsConfig>
            )} */}
            <UI.NotificationPopup>
              <Media greaterThan={'xs'}>
                <UI.NotificationSubtitleWrapper>
                  <UI.NotificationSubtitle>Уведомления</UI.NotificationSubtitle>
                  {/* <UI.NotificationOptions
                    onClick={handleOpenOptions(!openOptions)}>
                    <UI.DotesOptions />
                  </UI.NotificationOptions> */}
                </UI.NotificationSubtitleWrapper>
              </Media>

              {loading && (
                <UI.EmptyNotificationItem>
                  <Spinner primary />
                </UI.EmptyNotificationItem>
              )}
              {notifications?.Messages?.map(
                ({id, createdAt, updatedAt, body, isRead, meta}) => (
                  <UI.NotificationItemWrapper
                    key={createdAt + body + id}
                    onClick={handleRouteToEntity(meta)}>
                    <UI.NotificationItemHeader>
                      <UI.NotificationTitleWrapper>
                        {notificationType.suggestion}
                        <UI.NotificationTitle>
                          {/* {notificationTitle[type]} */}
                          Уведомление
                        </UI.NotificationTitle>
                      </UI.NotificationTitleWrapper>

                      <UI.NotificationTimeWrapper>
                        <UI.NotificationTime>
                          {formatDate(
                            updatedAt || createdAt,
                            DATE_FORMAT.primary,
                          )}
                        </UI.NotificationTime>
                        {!isRead && <UI.NotificationTimePoint />}
                      </UI.NotificationTimeWrapper>
                    </UI.NotificationItemHeader>

                    {/* <UI.NotificationText>{them}</UI.NotificationText> */}

                    <UI.NotificationText>{body}</UI.NotificationText>
                  </UI.NotificationItemWrapper>
                ),
              )}
              {!loading && !isNotification && (
                <UI.EmptyNotificationItem>
                  У вас нет новых сообщений
                </UI.EmptyNotificationItem>
              )}
              <Link href='/notifications' passHref>
                <UI.AllNotifications>
                  Смотреть все уведомления
                </UI.AllNotifications>
              </Link>
            </UI.NotificationPopup>
          </>
        )}
      </UI.NotificationBell>
    </IconButton>
  );
};

export default NotificationsButton;
