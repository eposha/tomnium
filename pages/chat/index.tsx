import {ChatsSidebar} from '@/components/chat';
import {PrimaryAvatar} from '@/components/common/Avatar/Primary';
import {useEffect} from 'react';
import {getNonOriginalImage} from '@/helpers/common';
import {useRooms} from 'src/graph/hooks/chat';
import parse from 'html-react-parser';

import {Media} from 'src/media-styles';

import * as UI from 'styles/chat/chat-page';
import Link from 'next/link';
import {Loader} from '@/components/common/Loader';
import {CHAT_TYPES} from '@/constants/chat';

const Chats = () => {
  const {rooms, getRooms, loading} = useRooms();

  useEffect(() => {
    getRooms();
  }, [getRooms]);

  return (
    <UI.Wrapper>
      <Media greaterThan={'xs'}>
        <ChatsSidebar />
      </Media>
      <UI.MainSection>
        <Loader $isVisible={loading} />
        <UI.Title>Ваши чаты</UI.Title>
        {rooms?.Rooms?.map((room) => {
          const entityType =
            room?.meta?.Parent?.entityName === 'ENTITY_NAME_APPOINTMENT'
              ? 'Консультация'
              : 'Поток';

          const isConsultation =
            room?.meta?.Parent?.entityName === 'ENTITY_NAME_APPOINTMENT'
              ? 'consultations'
              : 'threads';

          return (
            <Link
              href={`/chat/${room?.meta?.Parent?.id}/${
                CHAT_TYPES[
                  room?.meta?.Parent?.entityName as keyof typeof CHAT_TYPES
                ]
              }`}
              key={room?.id}
              passHref>
              <UI.ChatCard>
                <UI.ChatRoomData>
                  <Media greaterThan={'xs'}>
                    <UI.ChatDataWrapperDesktop>
                      <UI.AvatarWrapper>
                        <PrimaryAvatar
                          size={40}
                          src={getNonOriginalImage(
                            //@ts-ignore
                            room?.lastMessage?.meta?.Author?.avatar?.path,
                          )}
                          title={'Гость'}
                        />
                      </UI.AvatarWrapper>
                      <UI.ChatInfoDesktopWrapper>
                        <UI.ChatInfoDesktop>
                          <UI.TitleThread>{entityType}: </UI.TitleThread>
                          <Link
                            href={
                              (isConsultation
                                ? '/consultations/'
                                : '/threads/') + room?.meta?.Parent?.id
                            }
                            passHref>
                            <UI.LinkToThread>
                              {room?.meta?.Parent?.title}
                            </UI.LinkToThread>
                          </Link>
                        </UI.ChatInfoDesktop>

                        <UI.LastMessageDesktop>
                          <UI.LinkToAuthor>
                            {room?.lastMessage?.meta?.Author?.fullName}:
                          </UI.LinkToAuthor>
                          <UI.LastMessageText>
                            {parse(room?.lastMessage?.body || '') ??
                              'Нет сообщений'}
                          </UI.LastMessageText>
                        </UI.LastMessageDesktop>
                      </UI.ChatInfoDesktopWrapper>
                    </UI.ChatDataWrapperDesktop>
                  </Media>
                  <Media at={'xs'}>
                    <UI.ChatData>
                      <UI.ChatInfoMob>
                        {entityType}: {room?.meta?.Parent?.title}
                      </UI.ChatInfoMob>
                      <UI.LastMessageMob>
                        {parse(room?.lastMessage?.body || '') ??
                          'Нет сообщений'}
                      </UI.LastMessageMob>
                    </UI.ChatData>
                  </Media>
                </UI.ChatRoomData>
                {room?.hasUnreadMessage && <UI.UnreadMessagesCount />}
              </UI.ChatCard>
            </Link>
          );
        })}
      </UI.MainSection>
    </UI.Wrapper>
  );
};

export default Chats;
