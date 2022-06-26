import {Text} from 'styles/common';
import * as UI from 'styles/courses/course-page';
import Link from 'next/link';
import {FC} from 'react';
import {Room} from 'src/graphql.schema';
import {CHAT_TYPES} from '@/constants/chat';

interface IChat {
  rooms?: [Room] | any;
}

const Chat: FC<IChat> = ({rooms}) => {
  return (
    <UI.ChatList>
      {rooms?.map((room: Room, index: number) => (
        <Link
          href={`/chat/${room?.meta?.Parent?.id}/${
            CHAT_TYPES[
              room?.meta?.Parent?.entityName as keyof typeof CHAT_TYPES
            ]
          }`}
          key={index}
          passHref>
          <UI.ChatItem>
            <UI.ChatItemContent>
              <UI.ChatName lineClamp={1} fontSize='10px'>
                {room?.meta?.Parent?.title || 'Чат'}
              </UI.ChatName>
              <Text lineClamp={1}>{room?.lastMessage?.body}</Text>
            </UI.ChatItemContent>
            <UI.ChatCounter $isActive={room?.hasUnreadMessage} />
          </UI.ChatItem>
        </Link>
      ))}
      <Link href='/chat' passHref>
        <UI.ShowAllLink>Показать еще</UI.ShowAllLink>
      </Link>
    </UI.ChatList>
  );
};

export default Chat;
