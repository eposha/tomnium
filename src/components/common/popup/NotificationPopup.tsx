import {FC, ReactChild} from 'react';
import * as UI from 'styles/popup';

interface NotificationPopupProps {
  children?: ReactChild | ReactChild[];
  description: string;
  open: boolean;
  onPopupClose: () => void;
}

const NotificationPopup: FC<NotificationPopupProps> = ({
  children,
  description,
  open,
  onPopupClose,
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
            Ok
          </UI.ModalButton>
        </UI.FlexContainer>
      </UI.ModalContainer>
    </UI.ModalWrapper>
  ) : null;
};

export default NotificationPopup;
