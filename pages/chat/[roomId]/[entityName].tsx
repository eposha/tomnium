import {CHAT_TYPES} from '@/constants/chat';
import {useRoomById} from '@/graph-hooks/chat/useRoomById';
import {useRouter} from 'next/router';
import {Chat, ChatsSidebar} from 'src/components/chat';
import {EntityName} from 'src/graphql.schema';
import {Media} from 'src/media-styles';
import {MainSection, Wrapper} from 'styles/chat/chat-page';

const CurrentChat = () => {
  const router = useRouter();

  const {roomId: entityId, entityName: roomEntityName} = router.query;

  const getEntityName = (roomEntityName: string) => {
    for (const key in CHAT_TYPES) {
      if (CHAT_TYPES[key as keyof typeof CHAT_TYPES] === roomEntityName)
        return key;
    }
  };

  const entityName = getEntityName(roomEntityName as string) as EntityName;

  const {room} = useRoomById({
    entityName,
    entityId: entityId ? `${entityId}` : undefined,
  });
  const roomId = room?.id;

  return roomId ? (
    <Wrapper>
      <Media greaterThan={'xs'}>
        <ChatsSidebar />
      </Media>
      <MainSection>
        <Chat
          roomId={roomId}
          pinnedMessage={room?.pinnedMessage}
          title={room?.meta?.Parent?.title ?? ''}
        />
      </MainSection>
    </Wrapper>
  ) : null;
};

export default CurrentChat;
