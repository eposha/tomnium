import {FC} from 'react';
import {ModalInner, ModalBlock} from 'styles/chat/chat';
import {Modal} from '../common/PurchaseProducts';
import * as UI from 'styles/chat/chat';
import {Button} from 'styles/common';

interface IChatModal {
  isModalOpen: boolean;
  onClose: () => void;
  deleteMessage: () => void;
}

const ChatModal: FC<IChatModal> = ({isModalOpen, onClose, deleteMessage}) => {
  if (isModalOpen) {
    return (
      <Modal
        isMainWrapper={false}
        WrapperComponent={ModalBlock}
        onClose={onClose}>
        <ModalInner>
          <UI.TitleText>Вы точно хотите удалить сообщение ?</UI.TitleText>
          <UI.BtnsWrap>
            <Button
              $transparent
              onClick={() => {
                onClose();
              }}>
              Отмена
            </Button>
            <Button
              onClick={() => {
                deleteMessage();
                onClose();
              }}>
              Удалить
            </Button>
          </UI.BtnsWrap>
        </ModalInner>
      </Modal>
    );
  }
  return null;
};

export default ChatModal;
