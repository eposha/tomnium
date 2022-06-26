import {FC} from 'react';

import Image from 'next/image';
import parse from 'html-react-parser';

import {FILE_URL} from '@/constants/common';

import {Maybe, Message, MessageType, RoleName} from 'src/graphql.schema';

import AudioContent from './AudioContent';
import VideoContent from './VideoContent';
import ReplyMessageData from './ReplyMessageData';

import {useClickOutside} from 'src/hooks';
import {useMessageDelete} from '@/graph-hooks/chat';
import {IMessageList} from '@/graph-hooks/chat/useMessages';
import * as UI from 'styles/chat/chat';
import {useModal} from 'src/hooks/useModal';
import ChatModal from './ChatModal';

interface IIncomingMessageData {
  message: Maybe<Message>;
  setMessageList: (
    arg: ((arg: IMessageList | null) => IMessageList) | null,
  ) => void;
  setEditMessage: (arg: Maybe<Message> | null) => void;
  setReplyMessage: (arg: Maybe<Message> | null) => void;
  replyToMessage: (toMessageId: string) => void;
  messageList: IMessageList | null;
  handleScrollToIndex: (arg: number, align?: {align: string}) => void;
  onMessagePin: (id: string) => void;
  role: string;
}

const IncomingMessageData: FC<IIncomingMessageData> = ({
  message,
  setMessageList,
  setEditMessage,
  setReplyMessage,
  replyToMessage,
  messageList,
  handleScrollToIndex,
  onMessagePin,
  role,
}) => {
  const {body, type, meta} = message || {};

  const {ref, isVisible, setIsVisible} = useClickOutside(false);

  const {isOpen, onClose, onOpen} = useModal(false);

  const {onMessageDelete} = useMessageDelete();

  const handleDeleteMessage = (messageId?: string) => () => {
    messageId && onMessageDelete(messageId, setMessageList);
    setIsVisible(false);
  };

  const handleAddEditMessage = (message: Maybe<Message>) => () => {
    setReplyMessage(null);
    setEditMessage(message);
    setIsVisible(false);
  };

  const handleAddReplyMessage = (message: Maybe<Message>) => () => {
    setEditMessage(null);
    setReplyMessage(message);
    setIsVisible(false);
  };

  const handlePinMessage = (id: string) => () => {
    onMessagePin(id);
    setIsVisible(false);
  };

  const isText = !!body;
  const isFile = type !== MessageType.MessageTypeText;
  const isVideo = type === MessageType.MessageTypeVideo;
  const isAudio = type === MessageType.MessageTypeAudio;
  const isImage = type === MessageType.MessageTypeImage;

  const isMy = message?.isMy;

  const {RoleNameCurator} = RoleName;

  return (
    <>
      <ChatModal
        isModalOpen={isOpen}
        onClose={onClose}
        deleteMessage={() => {
          handleDeleteMessage(message?.id)();
        }}
      />
      <UI.IncomingMessage $isMy={isMy} $isFile={isFile}>
        <UI.HeaderMessage>
          <UI.UserName>
            {message?.meta?.Author?.fullName || 'Гость'}
          </UI.UserName>
          <UI.MessageOptions
            ref={ref}
            onClick={() => !isVisible && setIsVisible(true)}>
            <UI.Option />
            <UI.Option />
            <UI.Option />
            {isVisible && (
              <UI.MessagePopup>
                <UI.MessagePopupElement
                  onClick={handleAddReplyMessage(message)}
                  $isMy={isMy}>
                  Ответить
                </UI.MessagePopupElement>
                {isMy && (
                  <UI.MessagePopupElement
                    $isMy={isMy}
                    onClick={handleAddEditMessage(message)}>
                    Изменить
                  </UI.MessagePopupElement>
                )}
                <UI.MessagePopupElement
                  $isMy={isMy}
                  onClick={handlePinMessage(message?.id || '')}>
                  Закрепить сообщение
                </UI.MessagePopupElement>
                {(isMy || role == RoleNameCurator) && (
                  <UI.MessagePopupElement
                    $isMy={isMy}
                    onClick={() => {
                      onOpen();
                    }}>
                    Удалить сообщение
                  </UI.MessagePopupElement>
                )}
              </UI.MessagePopup>
            )}
          </UI.MessageOptions>
        </UI.HeaderMessage>
        <UI.MessageText $isFile={isFile} $isAudio={isAudio} $isVideo={isVideo}>
          {isImage && (
            <Image
              src={FILE_URL + '/' + meta?.file?.path}
              alt='image'
              width={meta?.file?.width ?? 4}
              height={meta?.file?.height ?? 3}
              layout='responsive'
              quality={40}
            />
          )}
          {isVideo && (
            <VideoContent
              path={FILE_URL + '/' + meta?.file?.path}
              id={message?.id || 'null'}
            />
          )}
          {isAudio && (
            <AudioContent
              path={FILE_URL + '/' + meta?.file?.path}
              id={message?.id || 'null'}
            />
          )}

          {message?.repliedMessage && (
            <ReplyMessageData
              id={message.repliedMessage?.id}
              body={message.repliedMessage?.body}
              authorName={message.repliedMessage?.meta?.Author?.fullName}
              replyToMessage={replyToMessage}
              messageList={messageList}
              handleScrollToIndex={handleScrollToIndex}
            />
          )}

          {isText && parse(body)}
        </UI.MessageText>
        <UI.MessageSendTime>
          {message?.isEdited && <UI.Edited>Изменено</UI.Edited>}
          {message?.createdAt}
        </UI.MessageSendTime>
      </UI.IncomingMessage>
    </>
  );
};

export default IncomingMessageData;
