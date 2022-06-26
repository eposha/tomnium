import {Auth, Modal, TRefetchUser} from '@/components/common/PurchaseProducts';
import {WrapperPopup} from 'styles/payments';

interface IProps {
  isOpen: boolean;
  step: string;
  changeStep: (titleStep: string) => void;
  onClose: () => void;
  refetchUser: TRefetchUser;
}

export const AuthPopup: React.FC<IProps> = ({
  step,
  changeStep,
  isOpen,
  onClose,
  refetchUser,
}) => {
  if (!isOpen) return null;

  return (
    <Modal WrapperComponent={WrapperPopup} onClose={onClose}>
      <Auth
        refetchUser={refetchUser}
        type={'secondary'}
        step={step}
        changeStep={changeStep}
      />
    </Modal>
  );
};
