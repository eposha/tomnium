import React, {useEffect} from 'react';
import {Text, Box} from 'styles/common';
import {WrapperMobile, WrapperPopup} from 'styles/payments';
import {Header} from './Header';
import {
  IPaymentProps,
  PAYMENT_METHODS,
  PAYMENT_STEPS,
} from '@/components/common/PurchaseProducts';
import {ProductCard} from './ProductCard';
import {PromoCodePopup, BankDetailsPopup, AuthPopup} from './modals';
import {useModal} from 'src/hooks/useModal';
import {PaymentContent} from './PaymentContent';
import {MobileFAQ} from './FAQ';
import {SuccessPayment} from './SuccessPayment';
import {ErrorModal} from '@/components/common/PurchaseProducts/common/ErrorModal';
import {Loader} from '@/components/common/Loader';
import {FAQ_TYPES} from '@/constants/faqs';

export const MobilePage: React.FC<
  Omit<IPaymentProps, 'cancelLink'> & {cancelLink: string}
> = ({
  step,
  user,
  changeStep,
  item,
  dataQuality,
  cancelLink,
  loading,
  dataCurrency,
  dataUserCheck,
  dataOrderCheck,
  dataPaymentMethod,
  dataActivePaymentCard,
  dataPaymentByCash,
  paymentMethods,
  dataPaymentCards,
  paymentData,
  dataPaymentBySavedCard,
  dataPaymentByNewCard,
  dataUpdateProfile,
  dataEntitiesPage,
  errors,
  refetchUser,
  isShowQuality,
}) => {
  const {checkUser, requiredPaymentFields} = dataUserCheck;
  const {onPayBySavedCard, paymentResult} = dataPaymentBySavedCard;

  const {
    isOpen: isAuthPopup,
    onOpen: openAuthPopup,
    onClose: closeAuthPopup,
  } = useModal();
  const {
    isOpen: isPromoPopup,
    onOpen: openPromoPopup,
    onClose: closePromoPopup,
  } = useModal();
  const {
    isOpen: isBankDetailsPopup,
    onOpen: openBankDetailsPopup,
    onClose: closeBankDetailsPopup,
  } = useModal();

  useEffect(() => {
    if (step !== PAYMENT_STEPS.createOrder) return;
    closeAuthPopup();
    checkUser();
  }, [step]);

  const handleClosePromoPopup = () => {
    closePromoPopup();
  };

  const choosePaymentSystem = () => {
    const {activePaymentCard} = dataActivePaymentCard;
    const {paymentMethod} = dataPaymentMethod;
    const {onPayByNewCard} = dataPaymentByNewCard;
    const {onPayByCash} = dataPaymentByCash;

    const {onPay} = paymentData;
    if (!paymentMethod) return;
    const {name} = paymentMethod;

    if (name.includes(PAYMENT_METHODS.card)) {
      changeStep(PAYMENT_STEPS.payBy.card);
      if (!activePaymentCard) {
        return onPayByNewCard();
      }
      return onPayBySavedCard();
    }
    if (name.includes(PAYMENT_METHODS.cash)) {
      onPayByCash();
      return changeStep(PAYMENT_STEPS.payBy.cash);
    }
    onPay();
    changeStep(PAYMENT_STEPS.payBy.otherWay);
  };

  const isFAQ = [
    PAYMENT_STEPS.payBy.cash,
    PAYMENT_STEPS.payBy.otherWay,
  ].includes(step);

  const type =
    step === PAYMENT_STEPS.payBy.cash
      ? FAQ_TYPES.FAQ_TYPE_CASH
      : FAQ_TYPES.FAQ_TYPE_CARD;

  return (
    <WrapperMobile>
      <Loader $isVisible={loading} />
      <ErrorModal
        errors={errors}
        WrapperComponent={WrapperPopup}
        type={'mobile'}
      />
      <AuthPopup
        step={step}
        refetchUser={refetchUser}
        changeStep={changeStep}
        isOpen={isAuthPopup}
        onClose={closeAuthPopup}
      />
      <PromoCodePopup
        dataOrderCheck={dataOrderCheck}
        isOpen={isPromoPopup}
        onClose={handleClosePromoPopup}
      />
      <BankDetailsPopup
        isOpen={isBankDetailsPopup}
        onClose={closeBankDetailsPopup}
      />
      <Text
        $description
        color={'black'}
        fontSize={'20px'}
        fontWeight={'600'}
        margin={'0 0 15px 0'}>
        Оформление заказа
      </Text>
      <div>
        <Header
          step={step}
          changeStep={changeStep}
          openAuthPopup={openAuthPopup}
          dataUpdateProfile={dataUpdateProfile}
          requiredPaymentFields={requiredPaymentFields}
          user={user}
          loading={loading}
        />
      </div>
      {step === PAYMENT_STEPS.payBy.card && paymentResult && (
        <Box mt={'10px'}>
          <SuccessPayment {...dataEntitiesPage} />
        </Box>
      )}
      {step !== PAYMENT_STEPS.payBy.card && (
        <>
          <Box mt={'10px'}>
            <ProductCard
              item={item}
              isShowQuality={isShowQuality}
              dataQuality={dataQuality}
              cancelLink={cancelLink}
              dataCurrency={dataCurrency}
              price={dataOrderCheck.price}
              openPromoPopup={openPromoPopup}
              isLogin={Boolean(user)}
            />
          </Box>
          <Box mt={'15px'} mb={'15px'} id={'mobile-payment-content'}>
            <PaymentContent
              step={step}
              isShow={Boolean(requiredPaymentFields?.length) || !user}
              changeStep={changeStep}
              dataPaymentMethod={dataPaymentMethod}
              dataActivePaymentCard={dataActivePaymentCard}
              onPayByNewCard={dataPaymentByNewCard.onPayByNewCard}
              dataPaymentByCash={dataPaymentByCash}
              paymentMethods={paymentMethods}
              openBankDetailsPopup={openBankDetailsPopup}
              paymentCards={dataPaymentCards.paymentCards}
              choosePaymentSystem={choosePaymentSystem}
              paymentData={paymentData}
            />
          </Box>
        </>
      )}
      {isFAQ && (
        <Box mt={'30px'} mb={'10x'}>
          <MobileFAQ type={type} />
        </Box>
      )}
    </WrapperMobile>
  );
};
