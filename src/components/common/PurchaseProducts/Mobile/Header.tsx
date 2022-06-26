import {InnerAuthButtons, InnerHeader} from 'styles/payments';
import {
  PAYMENT_AUTH_STEPS,
  PrimaryTitle,
} from '@/components/common/PurchaseProducts';
import {LabelUser} from '@/components/common/PurchaseProducts/Mobile/LabelUser';
import {IUser} from '@/types/user';
import {TUseFormProfileUpdate} from '@/graph-hooks/user/useFormProfileUpdate';
import {Button} from 'styles/common';

interface IProps {
  step: string;
  changeStep: (step: string) => void;
  user?: IUser | null;
  dataUpdateProfile: TUseFormProfileUpdate;
  openAuthPopup: () => void;
  loading?: boolean;
  requiredPaymentFields?: string[] | null;
}

export const Header: React.FC<IProps> = ({
  user,
  dataUpdateProfile,
  changeStep,
  openAuthPopup,
  requiredPaymentFields,
}) => {
  const setStep = (step: string) => () => {
    changeStep(step);
    openAuthPopup();
  };

  if (user) {
    return (
      <LabelUser
        requiredPaymentFields={requiredPaymentFields}
        user={user}
        dataUpdateProfile={dataUpdateProfile}
      />
    );
  }

  return (
    <InnerHeader>
      <PrimaryTitle />
      <InnerAuthButtons>
        <Button $fullWidth onClick={setStep(PAYMENT_AUTH_STEPS.login)}>
          Войти
        </Button>
        <Button
          $solid
          $fullWidth
          onClick={setStep(PAYMENT_AUTH_STEPS.register)}>
          Регистрация
        </Button>
      </InnerAuthButtons>
    </InnerHeader>
  );
};
