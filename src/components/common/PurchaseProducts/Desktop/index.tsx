import {
  InnerModal,
  MainInnerModal,
  FlexContainer,
  WrapperErrorModal,
} from 'styles/payments';
import {PrimaryBreadcrumbs} from '@/components/common/Breadcrumbs';
import {
  dataSteps,
  IPaymentProps,
  Modal,
} from '@/components/common/PurchaseProducts';
import {SuccessPayment} from '@/components/common/PurchaseProducts/Desktop/SuccessPayment';
import {PaymentsAside} from '@/components/common/PurchaseProducts/Desktop/Aside';
import {MainContent} from '@/components/common/PurchaseProducts/Desktop/MainContent';
import {Loader} from '@/components/common/Loader';
import {ErrorModal} from '@/components/common/PurchaseProducts/common/ErrorModal';

export const PaymentsModal: React.FC<
  Omit<IPaymentProps, 'onClose' | 'refetchUser'> & {
    onClose: () => void;
    onOpen: () => void;
  }
> = ({
  dataQuality,
  dataPaymentMethod,
  paymentMethods,
  step,
  changeStep,
  item,
  onClose,
  onOpen,
  dataOrderCheck,
  dataUserCheck,
  dataCurrency,
  dataPaymentCards,
  dataActivePaymentCard,
  dataPaymentByNewCard,
  dataPaymentByCash,
  paymentData,
  dataPaymentBySavedCard,
  dataUpdateProfile,
  dataEntitiesPage,
  errors,
  loading,
  isShowQuality,
}) => {
  const {paymentResult} = dataPaymentBySavedCard;

  if (paymentResult) {
    return (
      <Modal WrapperComponent={InnerModal} onClose={onClose}>
        <SuccessPayment
          {...dataEntitiesPage}
          isProductThread={item?.isProductThread}
        />
      </Modal>
    );
  }
  return (
    <Modal WrapperComponent={InnerModal} onClose={onClose}>
      <Loader $isVisible={loading} />
      <PrimaryBreadcrumbs activeStepCode={step} dataSteps={dataSteps} />
      <FlexContainer>
        <MainInnerModal>
          <PaymentsAside
            dataQuality={dataQuality}
            dataCurrency={dataCurrency}
            dataOrderCheck={dataOrderCheck}
            dataUserCheck={dataUserCheck}
            dataUpdateProfile={dataUpdateProfile}
            item={item}
            step={step}
            changeStep={changeStep}
            onClose={onClose}
            onOpen={onOpen}
            paymentLink={paymentData.paymentLink}
            isShowQuality={isShowQuality}
          />
          <MainContent
            isShowQuality={isShowQuality}
            dataOrderCheck={dataOrderCheck}
            dataPaymentBySavedCard={dataPaymentBySavedCard}
            paymentData={paymentData}
            dataPaymentByCash={dataPaymentByCash}
            dataPaymentByNewCard={dataPaymentByNewCard}
            dataActivePaymentCard={dataActivePaymentCard}
            dataPaymentCards={dataPaymentCards}
            dataCurrency={dataCurrency}
            dataQuality={dataQuality}
            item={item}
            step={step}
            changeStep={changeStep}
            dataPaymentMethod={dataPaymentMethod}
            paymentMethods={paymentMethods}
          />
        </MainInnerModal>
      </FlexContainer>
      <ErrorModal
        errors={errors}
        WrapperComponent={WrapperErrorModal}
        type={'desktop'}
        positionMainWrapper={'absolute'}
      />
    </Modal>
  );
};
