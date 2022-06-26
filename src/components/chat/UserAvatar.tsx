import {FC} from 'react';
import {
  Maybe,
  Message,
  MessageAvatarTheme,
  MessageTheme,
} from 'src/graphql.schema';

import {PrimaryAvatar} from '@/components/common/Avatar/Primary';
import {getNonOriginalImage} from '@/helpers/common';

import {AVATAR_THEME, AVATAR_REGALIA} from 'src/constants/chat';

import {AvatarWrapper, Avatar, UserStatus} from 'styles/chat/chat';

interface IUserAvatar {
  message: Maybe<Message>;
}

const UserAvatar: FC<IUserAvatar> = ({message}) => {
  const getUserStatus = (avatarTheme: MessageAvatarTheme) =>
    AVATAR_THEME[avatarTheme];

  const getUserRegalia = (regalia: MessageTheme) => AVATAR_REGALIA[regalia];

  console.log('status', message);

  return (
    <AvatarWrapper $isMy={message?.isMy}>
      <Avatar $isMy={message?.isMy}>
        <PrimaryAvatar
          size={40}
          src={getNonOriginalImage(
            //@ts-ignore
            message?.meta?.Author?.avatar,
          )}
          title={message?.meta?.Author?.fullName || 'Гость'}
        />
      </Avatar>

      <UserStatus $isMy={message?.isMy}>
        {!message?.meta?.avatarTheme ||
        message?.meta?.avatarTheme ==
          MessageAvatarTheme.MessageAvatarThemeDefault
          ? getUserRegalia(message?.theme || MessageTheme?.MessageThemeOrdinary)
          : getUserStatus(
              message?.meta?.avatarTheme ||
                MessageAvatarTheme.MessageAvatarThemeDefault,
            )}
      </UserStatus>
    </AvatarWrapper>
  );
};

export default UserAvatar;
