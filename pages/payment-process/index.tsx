import * as UI from 'styles/payments/paymentProcess';
import PaymentsLinks from '@/components/payments/PaymentsLinks';

const PaymentProcessPage = () => {
  return (
    <UI.ContentWrapper>
      <UI.ContentInner>
        <UI.Title>Платеж в обработке</UI.Title>
        <UI.SubTitle>Это может занять несколько минут.</UI.SubTitle>
        <UI.SubTitle>
          Сразу после завершения обработки придет уведомление!
        </UI.SubTitle>
        <UI.InfoMessage>
          Вот несколько ссылок, которые помогут продолжить изучать платформу:
        </UI.InfoMessage>
        <PaymentsLinks />
      </UI.ContentInner>
    </UI.ContentWrapper>
  );
};

export default PaymentProcessPage;
