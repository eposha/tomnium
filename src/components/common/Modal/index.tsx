import {FC} from 'react';
import * as UI from 'styles/common/Modal';

interface IModal {
  isOpen: boolean;
  handleClose?: () => void;
}

const Modal: FC<IModal> = ({children, isOpen, handleClose}) => {
  if (!isOpen) return null;

  return (
    <UI.Modal>
      {handleClose && <button onClick={handleClose}>Close</button>}
      {children}
    </UI.Modal>
  );
};
export default Modal;
