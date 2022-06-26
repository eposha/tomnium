import {FC} from 'react';

import * as UI from 'styles/toaster';

interface IToastNotificationText {
  message?: string;
}

const ToastNotificationText: FC<IToastNotificationText> = ({message}) => {
  return (
    <div>
      <UI.NotificationTitleWrapper>
        <UI.NotificationTitle>Уведомление</UI.NotificationTitle>
      </UI.NotificationTitleWrapper>

      {message && <UI.NotificationText>{message}</UI.NotificationText>}
    </div>
  );
};

export default ToastNotificationText;
