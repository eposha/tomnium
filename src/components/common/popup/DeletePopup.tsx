import {FC, ReactChild} from 'react';
import * as UI from 'styles/popup';

interface DeletePopupProps {
  children?: ReactChild | ReactChild[];
  description: string;
  open: boolean;
  onPopupClose: () => void;
  onDelete: () => void;
}

const DeletePopup: FC<DeletePopupProps> = ({
  children,
  description,
  open,
  onPopupClose,
  onDelete,
}: any) => {
  return open ? (
    <UI.ModalWrapper onClick={onPopupClose}>
      <UI.ModalContainer onClick={(e) => e.stopPropagation()}>
        <UI.ModalTitle>{description}</UI.ModalTitle>
        {children}
        <UI.FlexContainer>
          <UI.ModalButton
            background='white'
            color='blueberry'
            onClick={onPopupClose}>
            Нет
          </UI.ModalButton>
          <UI.ModalButton
            background='blueberry'
            color='white'
            onClick={onDelete}>
            Да, удалите
          </UI.ModalButton>
        </UI.FlexContainer>
      </UI.ModalContainer>
    </UI.ModalWrapper>
  ) : null;
};

export default DeletePopup;
