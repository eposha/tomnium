import {useUser} from '@/graph-hooks/user';
import {getNonOriginalImage} from '@/helpers/common';
import * as UI from 'styles/dashboard/dashboard-user';

const UserWidget = () => {
  const {user} = useUser();
  const {avatar, Subscription} = user || {};

  return (
    <UI.FixedBox>
      <UI.AvatarWrapper>
        <UI.Avatar
          src={getNonOriginalImage(avatar) || '/user/NoAvatar.svg'}
          alt='user avatar'
          width={50}
          height={50}
          layout='fixed'
          objectFit='cover'
        />
      </UI.AvatarWrapper>

      <UI.StatusLabel>
        {user
          ? Subscription?.Plan.shortTitle ?? 'Гостевой доступ'
          : 'Нет доступа'}
      </UI.StatusLabel>
    </UI.FixedBox>
  );
};

export default UserWidget;
