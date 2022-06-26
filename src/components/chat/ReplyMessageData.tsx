import {FC} from 'react';
import {Element} from 'domhandler/lib/node';

import parse from 'html-react-parser';
import {IMessageList} from '@/graph-hooks/chat/useMessages';

import {
  RepliedMessage,
  RepliedMessageAuthor,
  RepliedMessageText,
} from 'styles/chat/chat';

interface IReplyMessageData {
  id?: string;
  body?: string;
  authorName?: string;
  messageList: IMessageList | null;
  replyToMessage: (toMessageId: string) => void;
  handleScrollToIndex: (arg: number, align?: {align: string}) => void;
}

const ReplyMessageData: FC<IReplyMessageData> = ({
  id,
  body,
  authorName,
  replyToMessage,
  messageList,
  handleScrollToIndex,
}) => {
  return id ? (
    <RepliedMessage
      onClick={() => {
        const findIndexTo = messageList?.findIndex(
          (message) => id === message?.id,
        );
        if (findIndexTo && findIndexTo >= 0) {
          handleScrollToIndex(findIndexTo, {align: 'end'});
          return;
        }

        replyToMessage(id);
      }}>
      <RepliedMessageAuthor>{authorName ?? 'Noname'}</RepliedMessageAuthor>
      <RepliedMessageText>
        {parse(body || '', {
          replace: (domNode) => {
            if (domNode instanceof Element) {
              //@ts-ignore
              return <> {domNode.children[0]?.data} </>;
            }
          },
        })}
      </RepliedMessageText>
    </RepliedMessage>
  ) : null;
};

export default ReplyMessageData;
