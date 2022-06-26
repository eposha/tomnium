import {useState} from 'react';
import {
  PAYMENT_STEPS,
  PAYMENT_AUTH_STEPS,
  LoginForm,
  ResetForm,
  RegisterForm,
  TRefetchUser,
} from '@/components/common/PurchaseProducts';

export type AuthTypes = 'primary' | 'secondary';

interface IProps {
  step: string;
  changeStep: (titleStep: string) => void;
  type?: AuthTypes;
  refetchUser: TRefetchUser;
  onSuccess?: () => void;
}

export const Auth: React.FC<IProps> = ({
  step,
  changeStep,
  type,
  refetchUser,
}) => {
  const [authStep, setAuthStep] = useState(step);

  const changeAuthStep = (titleStep: string) => () => {
    setAuthStep(titleStep);
  };
  const handleChangeStep = async () => {
    await refetchUser();
    changeStep(PAYMENT_STEPS.createOrder);
  };

  const options = {
    onSuccess: handleChangeStep,
  };

  switch (authStep) {
    case PAYMENT_AUTH_STEPS.login:
      return (
        <LoginForm
          type={type}
          changeAuthStep={changeAuthStep}
          options={options}
        />
      );

    case PAYMENT_AUTH_STEPS.register:
      return <RegisterForm options={options} type={type} />;

    case PAYMENT_AUTH_STEPS.reset:
      const onBackToAuth = () => {
        setAuthStep(PAYMENT_AUTH_STEPS.login);
      };

      return <ResetForm type={type} onBackToAuth={onBackToAuth} />;

    default:
      return null;
  }
};
