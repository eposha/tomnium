import { BtnWrapper } from './../diagnostics/components/index';
import styled from 'styled-components';

import AttachIconUI from 'public/icons/chat/AttachIcon.svg';
import SendMessageIconUI from 'public/icons/chat/SendMessage.svg';
import AudioIconUI from 'public/icons/chat/AudioIcon.svg';
import VideoIconUI from 'public/icons/chat/VideoIcon.svg';
import ImageIconUI from 'public/icons/chat/ImageIcon.svg';
import EditMessageIconUI from 'public/icons/chat/EditMessageIcon.svg';
import ReplyIconUI from 'public/icons/chat/ReplyIcon.svg';
import CloseIconUI from 'public/icons/chat/CloseIcon.svg';
import ContentEditable from 'react-contenteditable';

import {media} from 'styles/media';

export const Wrapper = styled.div`
  padding: 20px 0 30px;
  ${media.greaterThan('xs')`
    padding: 30px 0 80px;
    display: grid;
    grid-template-columns: 180px minmax(640px, 980px);
    gap: 20px;
  `};
`;

export const ChatWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  border-radius: 5px;
  background-color: #fff;
`;

export const TitleChatPage = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

export const TitleChat = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  border-bottom: 1px solid #f4f6fa;
`;

export const ChatName = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`;

export const LinkToChatFrom = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #516ff6;
  cursor: pointer;
`;

export const MessageList = styled.div`
  position: relative;
  padding: 0 20px;
  max-height: 400px;
  overflow: auto;
`;

export const IncomingMessageCard = styled.div<{
  $isMy?: boolean;
}>`
  display: flex;
  flex-direction: ${({$isMy}) => ($isMy ? 'row-reverse' : 'row')};
  align-items: center;
  margin: 20px 0;
`;

export const AvatarWrapper = styled.div<{$isMy?: boolean}>`
  position: relative;
  margin-top: auto;
  ${({$isMy}) => ($isMy ? 'margin-left: 10px' : 'margin-right: 10px')};
`;

export const Avatar = styled.div<{$isMy?: boolean}>`
  position: relative;
  bottom: ${({$isMy}) => ($isMy ? '0' : '10px')};
  min-width: 40px;
  height: 40px;
`;

export const UserStatus = styled.div<{$isMy?: boolean}>`
  position: absolute;
  bottom: 0;
  display: ${({$isMy}) => ($isMy ? 'none' : 'flex')};
  justify-content: center;
  width: 100%;
  background: #f4f6fa;
  border-radius: 10px;
  font-weight: 600;
  font-size: 7px;
  line-height: 13px;
  color: #516ff6;
`;

export const UnReadMessages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  white-space: nowrap;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #8bb3ff;

  &::after,
  &::before {
    content: '';
    height: 1px;
    width: 100%;
    background-color: #f4f6fa;
  }

  &::before {
    margin-right: 10px;
  }

  &::after {
    margin-left: 10px;
  }
`;

export const TextareaMessage = styled(ContentEditable)<{$hasValue?: boolean}>`
  margin: 0 15px;
  padding: 15px;
  width: 100%;
  min-height: 48px;
  max-height: 95px;
  font-family: 'Gilroy-Regular', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 17px;
  border: 1.5px solid #d3e2ff;
  border-radius: 5px;
  outline: none;
  overflow: auto;

  ${({$hasValue}) =>
    !$hasValue &&
    ` &::before {
        content: 'Введите текст сообщения....';
        font-weight: 500;
        font-size: 12px;
        color: #697077;
    }`};

  &:focus {
    &::before {
      content: '';
    }
  }
`;

export const AttachIcon = styled(AttachIconUI)`
  cursor: pointer;
`;

export const SendMessageIcon = styled(SendMessageIconUI)`
  cursor: pointer;
`;

export const AudioIcon = styled(AudioIconUI)`
  margin-right: 10px;
  cursor: pointer;
`;

export const VideoIcon = styled(VideoIconUI)`
  margin-right: 10px;
  cursor: pointer;
`;

export const ImageIcon = styled(ImageIconUI)`
  margin-right: 10px;
  cursor: pointer;
`;

export const FilePopup = styled.div`
  position: absolute;
  bottom: 55px;
  padding: 10px;
  min-width: 160px;
  background: #fff;
  box-shadow: 0px 10px 20px rgba(88, 88, 88, 0.1);
  border-radius: 5px;
`;

export const FileElement = styled.label`
  display: flex;
  align-items: center;
  padding: 10px 0px;
  font-size: 12px;
  line-height: 14px;
  border-bottom: 1px solid #f4f6fa;
  cursor: pointer;

  span {
    color: #697077;
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const ScrollBottomButton = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: rgba(0, 87, 255, 0.5);
  border-radius: 5px;
  cursor: pointer;
`;

export const HeaderMessage = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  line-height: 10px;
`;

export const IncomingMessage = styled.div<{$isMy?: boolean; $isFile: boolean}>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px;
  min-width: 270px;
  max-width: 550px;
  background: ${({$isMy}) => ($isMy ? '#fff' : '#f4f6fa')};
  border-radius: 5px;

  ${({$isMy}) => $isMy && 'border: 2px solid #D3E2FF'};
  ${({$isFile}) => $isFile && 'width: 100%'};
`;

export const UserName = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 10px;
  color: #516ff6;
`;

export const MessageOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 13px;
  cursor: pointer;
  z-index: 500;
`;

export const Option = styled.div`
  width: 3px;
  height: 3px;
  background-color: #8bb3ff;
  border-radius: 50%;
`;

export const MessageText = styled.div<{
  $isFile: boolean;
  $isAudio?: boolean;
  $isVideo?: boolean;
}>`
  margin-top: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  min-height: 10px;

  ${({$isFile}) => $isFile && 'width: 100%;'};
  ${({$isAudio}) => $isAudio && 'height: 85px;'};

  ${({$isVideo}) => $isVideo && 'display: flex; justify-content: center;'};
`;

export const MessageSendTime = styled.div`
  margin-top: 5px;
  margin-left: auto;
  font-weight: 500;
  font-size: 10px;
  color: #697077;
`;

export const Video = styled.video``;

export const Audio = styled.audio`
  width: 100%;
`;

export const MessagePopup = styled.div`
  position: absolute;
  right: 0px;
  top: 18px;
  padding: 10px;
  min-width: 160px;
  background: #fff;
  box-shadow: 0px 10px 20px rgba(88, 88, 88, 0.1);
  border-radius: 5px;
`;

export const MessagePopupElement = styled.div<{$isMy?: boolean}>`
  display: flex;
  align-items: center;
  padding: 10px 0px;
  font-size: 12px;
  line-height: 14px;
  border-bottom: 1px solid #f4f6fa;
  cursor: pointer;
  color: #697077;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
    color: ${({$isMy}) => $isMy && '#e25241;'};
    border-bottom: none;
  }
`;

export const InputMessageForm = styled.form``;

export const InputMessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 15px 20px 20px;
  border-top: 1px solid #f4f6fa;
`;

export const AttachFileWrapper = styled.div`
  position: relative;
`;

export const EditMessage = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-top: 1px solid #f4f6fa;
`;

export const EditMessageContent = styled.div`
  margin: 0 10px;
  width: calc(100% - 54px);
`;

export const EditMessageTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #516ff6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const EditMessageText = styled.div`
  margin-top: 10px;
  font-size: 12px;
  line-height: 14px;
  color: #697077;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const EditMessageIcon = styled(EditMessageIconUI)`
  min-width: 20px;
`;

export const ReplyIcon = styled(ReplyIconUI)`
  min-width: 20px;
`;

export const CloseIcon = styled(CloseIconUI)`
  min-width: 20px;
  cursor: pointer;
`;

export const Edited = styled.span`
  margin-right: 5px;
  font-size: 8px;
  text-transform: uppercase;
  color: #8bb3ff;
`;

export const RepliedMessage = styled.div`
  margin-bottom: 10px;
  padding: 4px 10px;
  width: 100%;
  border-left: 1.5px solid #8bb3ff;
  cursor: pointer;
`;

export const RepliedMessageAuthor = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #8bb3ff;
`;

export const RepliedMessageText = styled.div`
  margin-top: 4px;
  font-size: 12px;
  line-height: 14px;
  color: #697077;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PinedMessages = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #f4f6fa;
  cursor: pointer;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleText = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #516ff6;
`;

export const Text = styled.div`
  margin-top: 10px;
  font-size: 12px;
  line-height: 14px;
  color: #697077;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ModalWrapper = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 29;
  opacity: 0.15;
  border-radius: 20px;
`

export const ModalBlock = styled.div`
  width: 100%;
  background: #FFFFFF;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  box-sizing: border-box;
  padding: 15px 15px 20px 15px;
  width: 90%;
  z-index: 999;
  box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.2);
  
  ${media.greaterThan('lg')`
    max-width: 250px;
    padding: 30px 50px 30px 30px;
  `}
`

export const ModalInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const BtnsWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 15px;
`