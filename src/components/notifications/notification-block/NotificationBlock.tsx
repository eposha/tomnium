import {notifications} from '../notificationSettingData';
import * as UI from 'styles/notifications/NotificationsSettings';
import {FC} from 'react';
import SquareCheckbox from '@/components/common/checkbox/SquareCheckbox';

interface NotificationBlockPropType {
  title: string;
  data?: string;
  changeable?: string;
}

const NotificationBlock: FC<NotificationBlockPropType> = ({
  title,
  data,
  changeable,
}) => {
  return (
    <UI.NotificationBlock>
      <UI.BlockInfoWrapper>
        <UI.NotificationBlockTitle>{title}</UI.NotificationBlockTitle>
        {changeable && <UI.ChangeLink>{changeable}</UI.ChangeLink>}
        {data && <UI.NotificationBlockData>{data}</UI.NotificationBlockData>}
      </UI.BlockInfoWrapper>
      {notifications.map((elem) => {
        return (
          <UI.NotificationBlockItems key={elem}>
            <SquareCheckbox isNote>{elem}</SquareCheckbox>
          </UI.NotificationBlockItems>
        );
      })}
    </UI.NotificationBlock>
  );
};

export default NotificationBlock;
