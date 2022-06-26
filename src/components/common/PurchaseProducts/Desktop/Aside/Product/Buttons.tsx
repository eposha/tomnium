import {Button} from 'styles/common';
import React from 'react';
import NextLink from 'next/link';
import {PAYMENT_STEPS} from '@/components/common/PurchaseProducts';

interface IProps {
  step: string;
  onClose: () => void;
  changeStep: () => void;
  paymentLink?: string;
}

export const Buttons: React.FC<IProps> = ({
  step,
  onClose,
  changeStep,
  paymentLink,
}) => {
  switch (step) {
    case PAYMENT_STEPS.choosePaymentSystem:
      return (
        <Button $solid color={'red'} $fullWidth onClick={onClose}>
          Отменить
        </Button>
      );

    case PAYMENT_STEPS.payBy.cash:
      return (
        <Button $fullWidth onClick={onClose}>
          Закончить оплату
        </Button>
      );

    case PAYMENT_STEPS.payBy.card:
      return (
        <Button $fullWidth onClick={changeStep} $solid>
          Вернуться назад
        </Button>
      );

    case PAYMENT_STEPS.payBy.otherWay:
      return paymentLink ? (
        <NextLink href={paymentLink}>
          <a>
            <Button $fullWidth>Перейти к оплате</Button>
          </a>
        </NextLink>
      ) : null;

    default:
      return null;
  }
};
