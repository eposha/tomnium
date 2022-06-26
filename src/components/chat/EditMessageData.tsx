import {FC} from 'react';
import {Element} from 'domhandler/lib/node';

import parse from 'html-react-parser';

import {
  EditMessage,
  EditMessageContent,
  EditMessageTitle,
  EditMessageText,
  EditMessageIcon,
  ReplyIcon,
  CloseIcon,
} from 'styles/chat/chat';

interface EditMessageProps {
  body?: string;
  userName?: string;
  setEditMessage: (arg: null) => void;
  setReplyMessage: (arg: null) => void;
}

const EditMessageData: FC<EditMessageProps> = ({
  body,
  userName,
  setEditMessage,
  setReplyMessage,
}) => {
  const handleResetEditMessage = () => {
    userName ? setReplyMessage(null) : setEditMessage(null);
  };

  return (
    <EditMessage>
      {userName ? (
        <ReplyIcon width={20} height={20} />
      ) : (
        <EditMessageIcon width={20} height={20} />
      )}
      <EditMessageContent>
        <EditMessageTitle>{userName ?? 'Редактирование'}</EditMessageTitle>
        <EditMessageText>
          {parse(body || '', {
            replace: (domNode) => {
              if (domNode instanceof Element) {
                //@ts-ignore
                return <> {domNode.children[0]?.data} </>;
              }
            },
          })}
        </EditMessageText>
      </EditMessageContent>
      <CloseIcon width={8} height={8} onClick={handleResetEditMessage} />
    </EditMessage>
  );
};

export default EditMessageData;
