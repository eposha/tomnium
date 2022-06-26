import {useEffect, useMemo, useState} from 'react';
import {PaymentsModal} from '@/components/common/PurchaseProducts/Desktop';
import {MobilePage} from '@/components/common/PurchaseProducts/Mobile';
import {useChangeQualityItem, useCurrency} from 'src/hooks';
import {
  useAvailablePaymentMethods,
  usePayByNewCard,
  useOrderAvailableCards,
  useUserCheck,
  useOrderCheck,
  usePay,
  usePayByCash,
  usePayBySavedCard,
} from '@/graph-hooks/payments';
import {IUser} from '@/types/user';
import {
  IItem,
  ISuccessPayment,
  PAYMENT_STEPS,
} from '@/components/common/PurchaseProducts';
import {IPaymentMethod} from '@/types/payments';
import {Card} from 'src/graphql.schema';
import {useFormProfileUpdate} from '@/graph-hooks/user/useFormProfileUpdate';
import {IUserMeResponse, USER_ME_QUERY} from '@/query/user';
import {USER_CHECK_QUERY} from '@/query/payments';
import {useRouter} from 'next/router';

import GlobalLayoutStyles from 'styles/globalLayoutStyles';
import {ApolloQueryResult, OperationVariables} from '@apollo/client';

interface IProps {
  type: 'desktop' | 'mobile';
  item?: IItem;
  user?: IUser | null;
  onCloseModal?: () => void;
  onOpenModal?: () => void;
  refetchUser: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<IUserMeResponse>>;
  cancelLink?: string;
  loading?: boolean;
  dataEntitiesPage: ISuccessPayment;
  isConsultation?: boolean;
}

const getInitialState = (user: boolean) =>
  user ? PAYMENT_STEPS.createOrder : PAYMENT_STEPS.auth;

export const PurchaseProducts: React.FC<IProps> = ({
  item,
  user,
  refetchUser,
  onCloseModal,
  onOpenModal,
  type,
  cancelLink,
  loading,
  dataEntitiesPage,
  isConsultation,
}) => {
  const router = useRouter();
  const [step, setStep] = useState(() => getInitialState(!!user));
  const {error: errorUserCheck, ...dataUserCheck} = useUserCheck();
  const dataUpdateProfile = useFormProfileUpdate({
    requestOptions: {
      refetchQueries: [
        {
          query: USER_ME_QUERY,
        },
        {
          query: USER_CHECK_QUERY,
        },
      ],
    },
    initialState: user,
    onSuccess: () => {
      document
        .getElementById('mobile-payment-content')
        ?.scrollIntoView({behavior: 'smooth'});
    },
  });

  const dataQuality = useChangeQualityItem();
  const dataCurrency = useCurrency(item?.currencies);
  const {couponCode, ...dataOrderCheck} = useOrderCheck({
    productId: item?.productId || '',
    productCount: dataQuality.quality,
    saleId: item?.saleId,
    tariffId: item?.tariffId,
  });
  const {
    paymentMethods,
    error: errorMethods,
    loading: loadingPaymentMethod,
  } = useAvailablePaymentMethods(item?.productId);
  const [paymentMethod, setPaymentMethod] = useState<IPaymentMethod | null>(
    null,
  );
  const {errorPaymentCards, ...dataPaymentCards} = useOrderAvailableCards({
    productId: item?.productId,
    isSkip: !user,
  });
  const [activePaymentCard, setActivePaymentCard] = useState<Card | null>(null);

  const params = {
    productCount: dataQuality.quality,
    productId: item?.productId,
    paymentMethodId: paymentMethod?.id,
    couponCode: couponCode,
    responseUrl: item?.responseUrl,
    saleId: item?.saleId,
    tariffId: item?.tariffId,
  };

  const {error: errorPayByCash, ...dataPaymentByCash} = usePayByCash(params);

  const {error: errorPayByNewCard, ...dataPaymentByNewCard} =
    usePayByNewCard(params);

  const {error: errorPayBySavedCard, ...dataPaymentBySavedCard} =
    usePayBySavedCard({
      ...params,
      cardId: activePaymentCard?.id,
      entityRefetchQueries: dataEntitiesPage?.entityRefetchQueries,
    });

  const {error: errorPayByOtherWay, ...paymentData} = usePay(params);

  useEffect(() => {
    dataOrderCheck.getPrice();
  }, [user?.Currency?.code]);

  useEffect(() => {
    const {paymentCards} = dataPaymentCards;
    if (!paymentCards?.length) return;
    setActivePaymentCard(paymentCards[0]);
  }, [dataPaymentCards.paymentCards]);

  const changeStep = (titleStep: string) => {
    setStep(titleStep);
  };

  const dataPaymentMethod = {paymentMethod, setPaymentMethod};
  const dataActivePaymentCard = {activePaymentCard, setActivePaymentCard};
  const isShowQuality =
    router.pathname.toLocaleLowerCase().includes('consultations') ||
    !!isConsultation;

  const errors = useMemo(
    () => [
      errorUserCheck?.message,
      dataUpdateProfile?.responseError?.message,
      dataOrderCheck?.error?.message,
      errorMethods?.message,
      errorPaymentCards?.message,
      errorPayByCash?.message,
      errorPayByNewCard?.message,
      errorPayBySavedCard?.message,
      errorPayByOtherWay?.message,
    ],
    [
      errorUserCheck?.message,
      dataUpdateProfile?.responseError?.message,
      dataOrderCheck?.error?.message,
      errorMethods?.message,
      errorPaymentCards?.message,
      errorPayByCash?.message,
      errorPayByNewCard?.message,
      errorPayBySavedCard?.message,
      errorPayByOtherWay?.message,
    ],
  );

  const commonLoading =
    loading ||
    dataUserCheck.loading ||
    dataUpdateProfile.loading ||
    dataOrderCheck.loading ||
    loadingPaymentMethod ||
    dataPaymentCards.loading ||
    dataPaymentByCash.loading ||
    dataPaymentByNewCard.loading ||
    dataPaymentBySavedCard.loading ||
    paymentData.loading;

  if (!type) return null;

  if (type === 'desktop' && onCloseModal && onOpenModal) {
    return (
      <>
        <GlobalLayoutStyles />
        <PaymentsModal
          isShowQuality={isShowQuality}
          loading={commonLoading}
          dataEntitiesPage={dataEntitiesPage}
          onOpen={onOpenModal}
          onClose={onCloseModal}
          dataUserCheck={dataUserCheck}
          dataUpdateProfile={dataUpdateProfile}
          dataOrderCheck={dataOrderCheck}
          dataCurrency={dataCurrency}
          dataPaymentByCash={dataPaymentByCash}
          dataPaymentCards={dataPaymentCards}
          dataPaymentByNewCard={dataPaymentByNewCard}
          dataPaymentBySavedCard={dataPaymentBySavedCard}
          paymentData={paymentData}
          item={item}
          step={step}
          changeStep={changeStep}
          dataQuality={dataQuality}
          dataPaymentMethod={dataPaymentMethod}
          dataActivePaymentCard={dataActivePaymentCard}
          paymentMethods={paymentMethods}
          errors={errors}
        />
      </>
    );
  }
  if (!cancelLink) return null;

  return (
    <>
      <GlobalLayoutStyles />
      <MobilePage
        isShowQuality={isShowQuality}
        loading={commonLoading}
        dataEntitiesPage={dataEntitiesPage}
        dataUserCheck={dataUserCheck}
        dataUpdateProfile={dataUpdateProfile}
        dataOrderCheck={dataOrderCheck}
        dataPaymentByCash={dataPaymentByCash}
        dataPaymentCards={dataPaymentCards}
        dataCurrency={dataCurrency}
        dataPaymentByNewCard={dataPaymentByNewCard}
        dataPaymentBySavedCard={dataPaymentBySavedCard}
        paymentData={paymentData}
        user={user}
        refetchUser={refetchUser}
        item={item}
        step={step}
        cancelLink={cancelLink}
        changeStep={changeStep}
        dataQuality={dataQuality}
        dataPaymentMethod={dataPaymentMethod}
        dataActivePaymentCard={dataActivePaymentCard}
        paymentMethods={paymentMethods}
        errors={errors}
      />
    </>
  );
};
