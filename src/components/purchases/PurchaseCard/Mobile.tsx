import {FC} from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';
import {formatDate, getNonOriginalImage} from '@/helpers/common';
import {DATE_FORMAT} from '@/constants/common';
import {ISubscription} from '@/types/subscription';

import * as UI from 'styles/user/purchase';

export interface IPurchaseCardProps {
  subscription: ISubscription;
  isActive: boolean;
  isExpired: boolean;
  isCancelled: boolean;
}

export const Mobile: FC<IPurchaseCardProps> = ({
  subscription,
  isActive,
  isExpired,
  isCancelled,
}) => {
  const router = useRouter();

  const {price, Plan, lastPaymentDate, renew, Tariff} = subscription;
  const {title, description, Product, productId} = Plan || {};

  return (
    <>
      <UI.ImageWrapper>
        <Image
          src={
            getNonOriginalImage(Product?.imageMob) ||
            '/images/courses/test1.jpg'
          }
          alt='Plan image'
          width={280}
          height={160}
          layout='responsive'
        />
      </UI.ImageWrapper>
      <UI.Container>
        <UI.PurchaseTitle>{title}</UI.PurchaseTitle>
        <UI.PurchaseText>{description}</UI.PurchaseText>
      </UI.Container>
      <UI.Footer>
        <UI.PurchasePrice>
          <UI.CurrencySVG />
          {price / 100} $
        </UI.PurchasePrice>

        <UI.StatusContainer>
          {isActive && renew && (
            <UI.PurchaseStatusWrapper>
              <UI.PurchaseStatusText>Последний платеж: </UI.PurchaseStatusText>
              <UI.PurchaseStatusWidget $status>
                {formatDate(lastPaymentDate, DATE_FORMAT.primary)}
              </UI.PurchaseStatusWidget>
            </UI.PurchaseStatusWrapper>
          )}
          {((isActive && !renew) || isCancelled || isExpired) && (
            <UI.PurchaseStatusWrapper>
              <UI.PurchaseStatusWidget $status>
                {((isActive && !renew) || isCancelled) && 'Списания отменены'}
                {isExpired && 'Просрочен платеж'}
              </UI.PurchaseStatusWidget>
            </UI.PurchaseStatusWrapper>
          )}
          <UI.PurchaseButton
            $fullWidth
            $solid={!!isActive}
            onClick={() =>
              router.push(
                `/user/purchases/payment?productId=${productId}&tariffId=${Tariff?.id}`,
              )
            }>
            {isActive ? 'Продлить' : 'Возобновить'}
          </UI.PurchaseButton>
        </UI.StatusContainer>
      </UI.Footer>
    </>
  );
};
