import {ChangeEvent, FC, useEffect, useRef, useState} from 'react';

import {useForm} from 'react-hook-form';

import {
  useMessageCreate,
  useMessageUpdate,
  useMessageReply,
} from 'src/graph/hooks/chat';

import {useClickOutside} from 'src/hooks';
import EditMessageData from './EditMessageData';

import {Maybe, MessageType, Message} from 'src/graphql.schema';

import {
  InputMessageWrapper,
  AttachIcon,
  FilePopup,
  FileElement,
  AudioIcon,
  VideoIcon,
  ImageIcon,
  TextareaMessage,
  SendMessageIcon,
  InputMessageForm,
  AttachFileWrapper,
} from 'styles/chat/chat';

interface IInputMessage {
  getLastMessageListIndex: () => number;
  setPrevLastIndex: (arg: number) => void;
  toggleIsNeedScroll: (arg: {top: boolean; bottom: boolean}) => void;
  editMessage: Maybe<Message> | null;
  setEditMessage: (arg: Maybe<Message> | null) => void;
  replyMessage: Maybe<Message> | null;
  setReplyMessage: (arg: Maybe<Message> | null) => void;
  roomId: string;
}

interface IInput {
  id: string;
  accept: string;
  type: MessageType;
  handleFileChange: (
    e: ChangeEvent<HTMLInputElement>,
    type: MessageType,
  ) => void;
}

const fileInputList = [
  {id: 'audioFile', accept: 'audio/*', type: MessageType.MessageTypeAudio},
  {id: 'video', accept: 'video/*', type: MessageType.MessageTypeVideo},
  {id: 'image', accept: 'image/*', type: MessageType.MessageTypeImage},
];

const FileInput: FC<IInput> = ({id, accept, type, handleFileChange}) => (
  <input
    id={id}
    type='file'
    accept={accept}
    onChange={(e) => handleFileChange(e, type)}
    hidden
  />
);

const InputMessage: FC<IInputMessage> = ({
  getLastMessageListIndex,
  setPrevLastIndex,
  toggleIsNeedScroll,
  editMessage,
  setEditMessage,
  replyMessage,
  setReplyMessage,
  roomId,
}) => {
  const textAreaRef = useRef<HTMLDivElement>(null);

  const {ref, isVisible, setIsVisible} = useClickOutside(false);

  const {register, handleSubmit, setValue, reset, watch} = useForm();

  const {onMessageCreate, loadingCreatedMessage} = useMessageCreate();
  const {onMessageUpdate} = useMessageUpdate();
  const {onMessageReply} = useMessageReply();

  const [textContent, setTextContent] = useState('');

  const handleChangeText = (event: {
    currentTarget: {textContent: any};
    target: {value: any};
  }) => {
    setTextContent(event.currentTarget.textContent);
    setValue('text', event.target.value);
  };

  const handleOnBlur = () => {
    if (!textContent.trim() && !replyMessage && !editMessage) {
      clearForm();
    }
  };

  const handleFileChange = (
    e: {target: HTMLInputElement},
    type: MessageType,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const lastMessageIndex = getLastMessageListIndex();
    setPrevLastIndex(lastMessageIndex);
    onMessageCreate({
      roomId,
      type,
      file,
    });
    toggleIsNeedScroll({
      bottom: true,
      top: false,
    });

    setIsVisible(false);
  };

  const clearForm = () => {
    reset({text: ''});
    setEditMessage(null);
    setReplyMessage(null);
    if (textAreaRef.current) {
      textAreaRef.current.innerHTML = '';
    }
  };

  const handleSendMessage = (type: MessageType, message: string) => {
    if (!loadingCreatedMessage) {
      onMessageCreate({
        roomId,
        type,
        body: message,
      });
    }
  };

  const handleUpdateMessage = (id: string, message: string) => {
    onMessageUpdate({
      id,
      body: message,
    });
  };

  const handleReplyMessage = (id: string, message: string) => {
    onMessageReply({
      repliedMessageId: id,
      body: message,
    });
  };

  const onSubmit = (data: {[x: string]: string}) => {
    if (!textContent.trim()) return;

    if (editMessage?.id) {
      handleUpdateMessage(editMessage.id, textContent);
      clearForm();
      return;
    }

    if (replyMessage?.id) {
      handleReplyMessage(replyMessage.id, textContent);
      toggleIsNeedScroll({
        bottom: true,
        top: false,
      });
      clearForm();
      return;
    }

    const lastMessageIndex = getLastMessageListIndex();
    setPrevLastIndex(lastMessageIndex);
    handleSendMessage(MessageType.MessageTypeText, data.text);
    toggleIsNeedScroll({
      bottom: true,
      top: false,
    });
    clearForm();
  };

  useEffect(() => {
    const textContent = document.getElementById('textareaMessage');
    if (textContent) {
      textContent.addEventListener('paste', function (e) {
        e.preventDefault();

        //@ts-ignore
        const text = (e.originalEvent || e).clipboardData.getData('text/plain');
        document.execCommand('insertText', false, text);
      });
    }
  }, []);

  useEffect(() => {
    if (editMessage?.body) {
      setTextContent(editMessage.body);
      setValue('text', editMessage.body);
    }
  }, [editMessage]);

  return (
    <InputMessageForm onSubmit={handleSubmit(onSubmit)} onBlur={handleOnBlur}>
      {(editMessage || replyMessage) && (
        <EditMessageData
          body={editMessage?.body || replyMessage?.body}
          userName={replyMessage?.meta?.Author?.fullName}
          setReplyMessage={setReplyMessage}
          setEditMessage={setEditMessage}
        />
      )}
      <InputMessageWrapper>
        <AttachFileWrapper ref={ref} onClick={() => setIsVisible(true)}>
          <AttachIcon width={20} height={18} />

          {isVisible && (
            <FilePopup>
              <FileElement htmlFor='audioFile'>
                <AudioIcon width={18} height={18} />
                <span>Аудио</span>
              </FileElement>
              <FileElement htmlFor='video'>
                <VideoIcon width={18} height={18} />
                <span>Видео</span>
              </FileElement>
              <FileElement htmlFor='image'>
                <ImageIcon width={18} height={18} />
                <span>Фото/видео</span>
              </FileElement>
            </FilePopup>
          )}
        </AttachFileWrapper>

        {fileInputList.map(({id, accept, type}) => (
          <FileInput
            key={id}
            id={id}
            accept={accept}
            type={type}
            handleFileChange={handleFileChange}
          />
        ))}

        <TextareaMessage
          id='textareaMessage'
          {...register('text', {
            required: true,
          })}
          ref={textAreaRef}
          $hasValue={!!watch('text')}
          tagName='div'
          html={watch('text') || ''}
          onChange={handleChangeText}
        />
        <button type='submit'>
          <SendMessageIcon width={22} height={20} />
        </button>
      </InputMessageWrapper>
    </InputMessageForm>
  );
};

export default InputMessage;
