import {TypeUseChangeQualityItem} from 'src/hooks';
import {
  Auth,
  IDataCurrency,
  IItem,
  PAYMENT_AUTH_STEPS,
  PAYMENT_STEPS,
} from '@/components/common/PurchaseProducts';
import {IUseOrderCheck, IUseUserCheck} from '@/graph-hooks/payments';
import {TUseFormProfileUpdate} from '@/graph-hooks/user/useFormProfileUpdate';
import {
  CreateOrder,
  Product,
} from '@/components/common/PurchaseProducts/Desktop/Aside';
import {useUser} from '@/graph-hooks/user';

interface IProps {
  step: string;
  changeStep: (titleStep: string) => void;
  onClose: () => void;
  onOpen: () => void;
  item?: IItem;
  dataQuality: TypeUseChangeQualityItem;
  dataCurrency: IDataCurrency;
  dataOrderCheck: IUseOrderCheck;
  dataUserCheck: IUseUserCheck;
  dataUpdateProfile: TUseFormProfileUpdate;
  paymentLink?: string;
  isShowQuality: boolean;
}

export const PaymentsAside: React.FC<IProps> = ({
  step,
  changeStep,
  onClose,
  item,
  dataQuality,
  dataOrderCheck,
  dataUserCheck,
  dataCurrency,
  dataUpdateProfile,
  paymentLink,
  onOpen,
  isShowQuality,
}) => {
  const {user, refetch: refetchUser} = useUser();

  if (step === PAYMENT_STEPS.auth) {
    return (
      <Auth
        refetchUser={refetchUser}
        onSuccess={onOpen}
        step={PAYMENT_AUTH_STEPS.login}
        changeStep={changeStep}
      />
    );
  }
  if (step === PAYMENT_STEPS.createOrder) {
    const handleChangeStep = () => {
      changeStep(PAYMENT_STEPS.choosePaymentSystem);
    };
    return (
      <CreateOrder
        handleChangeStep={handleChangeStep}
        dataUpdateProfile={dataUpdateProfile}
        dataUserCheck={dataUserCheck}
        user={user}
      />
    );
  }

  return (
    <Product
      onClose={onClose}
      step={step}
      dataQuality={dataQuality}
      changeStep={changeStep}
      item={item}
      dataOrderCheck={dataOrderCheck}
      dataCurrency={dataCurrency}
      paymentLink={paymentLink}
      isShowQuality={isShowQuality}
    />
  );
};
