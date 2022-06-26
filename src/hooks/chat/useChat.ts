import {
  useState,
  SyntheticEvent,
  useCallback,
  RefObject,
  useEffect,
} from 'react';

import {parseCookies} from 'nookies';

import {formatInTimeZone} from 'date-fns-tz';

import {IMessageList, IMessageResponse} from '@/graph-hooks/chat/useMessages';
import {Maybe, Message} from 'src/graphql.schema';
import {useVirtual} from 'react-virtual';

interface IChatHelpers {
  setMessageList: (
    arg: ((arg: IMessageList | null) => IMessageList | null) | null,
  ) => void;
  getMessages: (args: any) => any;
  messageList: IMessageList | null;
  setPrevLastIndex: (arg: number) => void;
  parentRef: RefObject<HTMLDivElement>;
  roomId: string;
}

const useChatHelpers = ({
  setMessageList,
  getMessages,
  messageList,
  setPrevLastIndex,
  parentRef,
  roomId,
}: IChatHelpers) => {
  const [isNeedScroll, toggleIsNeedScroll] = useState<{
    top: boolean;
    bottom: boolean;
  }>({
    top: false,
    bottom: true,
  });

  const [toMessageIdReply, setToMessageIdReply] = useState<string | null>(null);

  const rowVirtualizer = useVirtual({
    size: messageList?.length || 0,
    parentRef,
    estimateSize: useCallback(() => 25, []),
    initialRect: {height: 400, width: 100},
    overscan: 5,
  });

  const handleScrollToIndex = (index: number, option?: any) => {
    rowVirtualizer.scrollToIndex(index, option);
  };

  const handleScrollBottom = () => {
    const lastMessageIndex = getLastMessageListIndex();
    handleScrollToIndex(lastMessageIndex);
  };

  const getTimeFormat = (time: Date) =>
    String(formatInTimeZone(time, timezoneCode, 'HH:mm'));

  const formatMessages = (newMessage: Maybe<Message>, userId?: string) => {
    return {
      ...newMessage,
      isMy: newMessage?.isMy || userId === newMessage?.meta?.Author?.id,
      createdAt: newMessage?.createdAt
        ? getTimeFormat(new Date(newMessage?.createdAt))
        : null,
    };
  };

  const handleAddMessage = (newMessage: Maybe<Message>, userId: string) => {
    setToMessageIdReply(null);
    const newMessageWithTimezone = formatMessages(newMessage, userId);

    setMessageList((prevMessageList) => {
      const copyArray = [...(prevMessageList || [])];
      if (newMessageWithTimezone.isEdited) {
        const index = prevMessageList?.findIndex(
          (message) => message?.id === newMessageWithTimezone?.id,
        );

        if ((index || index === 0) && index !== -1) {
          copyArray[index] = newMessageWithTimezone;

          return copyArray;
        }
      }

      return [...copyArray, newMessageWithTimezone];
    });
  };

  const loadMoreMessages = () => {
    setToMessageIdReply(null);
    getMessages({
      variables: {
        filter: {
          roomId,
          fromMessageId: messageList?.[0]?.id,
        },
        limit: 25,
        offset: 0,
      },
    });
  };

  const replyToMessage = async (toMessageId: string) => {
    setToMessageIdReply(toMessageId);

    await getMessages({
      variables: {
        filter: {
          roomId,
          toMessageId,
        },
      },
      onCompleted: (data: IMessageResponse) => {
        const getTimeFormat = (time: Date) =>
          String(formatInTimeZone(new Date(time), timezoneCode, 'HH:mm'));

        const messagesWithConvertTime = data?.messages?.Messages?.map(
          (message) => ({
            ...(message || {}),
            createdAt: message?.createdAt
              ? getTimeFormat(message.createdAt)
              : null,
          }),
        )?.reverse();

        //@ts-ignore
        setMessageList(messagesWithConvertTime || null);
      },
    });
  };

  // const pinnedToMessage = async (toMessageId: string) => {
  //   setToMessageIdPinned(toMessageId);

  //   await getMessages({
  //     variables: {
  //       filter: {
  //         roomId,
  //         toMessageId,
  //       },
  //     },
  //     onCompleted: (data: IMessageResponse) => {
  //       const getTimeFormat = (time: Date) =>
  //         String(formatInTimeZone(new Date(time), timezoneCode, 'HH:mm'));

  //       const messagesWithConvertTime = data?.messages?.Messages?.map(
  //         (message) => ({
  //           ...(message || {}),
  //           createdAt: message?.createdAt
  //             ? getTimeFormat(message.createdAt)
  //             : null,
  //         }),
  //       );

  //       //@ts-ignore
  //       setMessageList(messagesWithConvertTime || null);
  //     },
  //   });
  // };

  const messageAreaRefScroll = (event: SyntheticEvent<HTMLDivElement>) => {
    const {scrollTop, scrollHeight, clientHeight} = event.currentTarget;
    const lastMessageIndex = getLastMessageListIndex();
    setPrevLastIndex(lastMessageIndex);
    if (scrollTop === 0) {
      toggleIsNeedScroll({
        bottom: false,
        top: true,
      });
      loadMoreMessages();
      return;
    }

    const listOnBottom = scrollTop + clientHeight === scrollHeight;

    if (listOnBottom) {
      toggleIsNeedScroll({
        bottom: true,
        top: false,
      });
      return;
    }

    toggleIsNeedScroll({
      bottom: false,
      top: false,
    });
  };

  const {timezoneCode} = parseCookies();
  const getLastMessageListIndex = (): number => (messageList?.length || 0) - 1;

  useEffect(() => {
    if (roomId) {
      getMessages({
        variables: {
          filter: {
            roomId,
          },
        },
      });
    }
  }, []);

  return {
    isNeedScroll,
    toggleIsNeedScroll,
    handleScrollToIndex,
    handleAddMessage,
    messageAreaRefScroll,
    rowVirtualizer,
    handleScrollBottom,
    getLastMessageListIndex,
    formatMessages,
    replyToMessage,
    toMessageIdReply,
    setToMessageIdReply,
  };
};

export default useChatHelpers;
