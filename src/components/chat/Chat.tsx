import Script from 'next/script';
import {FC, useState, useEffect, useRef, createContext} from 'react';

import {
  useMessagePin,
  useMessages,
  useMessageSubscription,
} from 'src/graph/hooks/chat';

import Link from 'next/link';

import {IMessageList} from '@/graph-hooks/chat/useMessages';

import {useUser} from '@/graph-hooks/user';

import parse from 'html-react-parser';

import ArrowDown from 'public/icons/chat/ArrowDown.svg';

import {
  InputMessage,
  IncomingMessageData,
  UserAvatar,
} from 'src/components/chat';

import * as UI from 'styles/chat/chat';
import useChatHelpers from 'src/hooks/chat/useChat';
import {Maybe, Message, RoleName} from 'src/graphql.schema';
interface IChat {
  roomId: string;
  pinnedMessage: Maybe<Message>;
  title?: string;
  type?: string;
  noHeader?: boolean;
}

export const LoadedPlayerScriptContext = createContext(false);

const Chat: FC<IChat> = ({roomId, pinnedMessage, title, type, noHeader}) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const [messageList, setMessageList] = useState<IMessageList | null>(null);

  const [editMessage, setEditMessage] = useState<Maybe<Message> | null>(null);
  const [replyMessage, setReplyMessage] = useState<Maybe<Message> | null>(null);

  const [isLoadedPlayerScript, setLoadedPlayerScript] = useState(false);

  const [prevLastIndex, setPrevLastIndex] = useState<number>(
    (messageList?.length || 0) - 1,
  );

  const {data: subscriptionData} = useMessageSubscription({
    roomId,
  });

  const {getMessages, messages} = useMessages();

  const {onMessagePin, currentPinnedMessage, loadingPinMessage} =
    useMessagePin();

  const {user} = useUser();

  const role = user?.Role?.name;

  const chatType = () => {
    switch (type) {
      case 'stream':
        return {title: 'Чат потока', subtitle: 'Поток'};
      case 'consultation':
        return {title: 'Чат консультации', subtitle: 'Консультация'};
      default:
        return {title: 'Чат', subtitle: 'Чат'};
    }
  };

  const {
    isNeedScroll,
    toggleIsNeedScroll,
    handleScrollToIndex,
    handleScrollBottom,
    handleAddMessage,
    messageAreaRefScroll,
    rowVirtualizer,
    formatMessages,
    getLastMessageListIndex,
    replyToMessage,
    toMessageIdReply,
  } = useChatHelpers({
    setMessageList,
    getMessages,
    messageList,
    setPrevLastIndex,
    parentRef,
    roomId,
  });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (toMessageIdReply) return;
    setMessageList((messageList) => [
      ...(messages.Messages?.map((message) =>
        formatMessages(message),
      )?.reverse() ?? []),
      ...(messageList ?? []),
    ]);
  }, [messages?.Messages?.[0]?.id]);

  useEffect(() => {
    if (toMessageIdReply && messageList) {
      const findIndexTo = messageList.findIndex(
        (message) => toMessageIdReply === message?.id,
      );

      handleScrollToIndex(findIndexTo, {align: 'end'});
    }
  }, [messageList]);

  useEffect(() => {
    if (subscriptionData?.messageSubscription && user?.id) {
      handleAddMessage(subscriptionData.messageSubscription.Message, user.id);
    }
  }, [subscriptionData, user?.id]);

  useEffect(() => {
    if (isFirstRender.current || toMessageIdReply) return;
    const lastMessageIndex = getLastMessageListIndex();

    if (isNeedScroll.bottom) {
      handleScrollToIndex(lastMessageIndex);
      return;
    }

    const scrollToIndexMessage = lastMessageIndex - prevLastIndex;
    if (isNeedScroll.top) {
      handleScrollToIndex(scrollToIndexMessage, {align: 'start'});
    }
  }, [messageList?.length]);

  return (
    <>
      <Script
        src='/player/playerjs.js'
        onLoad={() => setLoadedPlayerScript(true)}
      />
      <LoadedPlayerScriptContext.Provider value={isLoadedPlayerScript}>
        <div>
          {!noHeader && <UI.TitleChatPage>{chatType().title}</UI.TitleChatPage>}
          <UI.ChatWrapper>
            <UI.TitleChat>
              <UI.ChatName>
                {chatType().subtitle}:{' '}
                <Link href={'#'} passHref>
                  <UI.LinkToChatFrom>{title}</UI.LinkToChatFrom>
                </Link>
              </UI.ChatName>
            </UI.TitleChat>
            <div style={{position: 'relative'}}>
              {(currentPinnedMessage?.id || pinnedMessage?.id) && (
                <UI.PinedMessages
                  onClick={() => {
                    const findIndexTo = messageList?.findIndex(
                      (message) =>
                        (currentPinnedMessage?.id || pinnedMessage?.id) ===
                        message?.id,
                    );
                    if (findIndexTo && findIndexTo >= 0) {
                      handleScrollToIndex(findIndexTo, {align: 'end'});
                      return;
                    }

                    replyToMessage(
                      currentPinnedMessage?.id || pinnedMessage?.id || '',
                    );
                  }}>
                  <UI.Title>
                    <UI.TitleText>Закрепленное сообщение</UI.TitleText>
                    <UI.CloseIcon width={8} height={8} />
                  </UI.Title>
                  <UI.Text>
                    {!loadingPinMessage
                      ? parse(
                          currentPinnedMessage?.body ||
                            pinnedMessage?.body ||
                            'Сообщение типа файл',
                          {
                            replace: (domNode) => {
                              if (domNode instanceof Element) {
                                //@ts-ignore
                                return <> {domNode.children[0]?.data} </>;
                              }
                            },
                          },
                        )
                      : 'loading'}
                  </UI.Text>
                </UI.PinedMessages>
              )}
              <UI.MessageList ref={parentRef} onScroll={messageAreaRefScroll}>
                <div
                  style={{
                    height: rowVirtualizer.totalSize,
                    width: '100%',
                    position: 'relative',
                    minHeight: '250px',
                  }}>
                  {rowVirtualizer.virtualItems.reverse().map((virtualRow) => {
                    const message = messageList?.[virtualRow.index];

                    return (
                      message && (
                        <div
                          key={virtualRow.index}
                          ref={virtualRow.measureRef}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            transform: `translateY(${virtualRow.start}px)`,
                          }}>
                          <UI.IncomingMessageCard $isMy={message?.isMy}>
                            <UserAvatar message={message} />

                            <IncomingMessageData
                              message={message}
                              setEditMessage={setEditMessage}
                              setReplyMessage={setReplyMessage}
                              setMessageList={setMessageList}
                              replyToMessage={replyToMessage}
                              messageList={messageList}
                              handleScrollToIndex={handleScrollToIndex}
                              onMessagePin={onMessagePin}
                              role={role as RoleName}
                            />
                          </UI.IncomingMessageCard>
                        </div>
                      )
                    );
                  })}
                </div>
              </UI.MessageList>
              {!isNeedScroll.bottom && (
                <UI.ScrollBottomButton onClick={handleScrollBottom}>
                  <ArrowDown width={10} height={5} />
                </UI.ScrollBottomButton>
              )}
            </div>
            <InputMessage
              getLastMessageListIndex={getLastMessageListIndex}
              setPrevLastIndex={setPrevLastIndex}
              toggleIsNeedScroll={toggleIsNeedScroll}
              editMessage={editMessage}
              setEditMessage={setEditMessage}
              replyMessage={replyMessage}
              setReplyMessage={setReplyMessage}
              roomId={roomId}
            />
          </UI.ChatWrapper>
        </div>
      </LoadedPlayerScriptContext.Provider>
    </>
  );
};

export default Chat;
