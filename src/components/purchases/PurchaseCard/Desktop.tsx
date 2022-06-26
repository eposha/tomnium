import {FC} from 'react';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {formatDate, getNonOriginalImage} from '@/helpers/common';
import {DATE_FORMAT} from '@/constants/common';
import {ISubscription} from '@/types/subscription';
import {usePaymentPopup} from 'src/hooks';
import {useDirectories} from '@/graph-hooks/directories';
import {useUser} from '@/graph-hooks/user';

import {PurchaseProducts} from '@/components/common/PurchaseProducts';
import * as UI from 'styles/user/purchase';
import {GET_MY_SUBSCRIPTIONS} from '@/query/subscriptions/getMySubscriptions';

export interface IPurchaseCardProps {
  subscription: ISubscription;
  isActive: boolean;
  isExpired: boolean;
  isCancelled: boolean;
  url?: string;
}

export const Desktop: FC<IPurchaseCardProps> = ({
  subscription,
  isActive,
  isCancelled,
  isExpired,
  url,
}) => {
  const {directories} = useDirectories();
  const {user, refetch: refetchUser} = useUser();
  const {asPath} = useRouter();
  const {price, Plan, lastPaymentDate, renew, Tariff} = subscription;

  const {title, description, Product, productId} = Plan || {};

  const {isPaymentPopup, handleOpenPaymentPopup, handleClosePaymentPopup} =
    usePaymentPopup(!Boolean(title));

  return (
    <>
      <UI.Container flex>
        <UI.ImageWrapper>
          <Image
            src={
              getNonOriginalImage(Product?.imageWeb) ||
              '/images/courses/test1.jpg'
            }
            alt='Plan image'
            objectFit='cover'
            layout='fill'
          />
        </UI.ImageWrapper>
        <UI.Container>
          <UI.PurchaseTitle>{title}</UI.PurchaseTitle>
          <UI.PurchaseText>{description}</UI.PurchaseText>
        </UI.Container>
      </UI.Container>
      <UI.PurchaseMenuDivider color='blueberryLight' />
      <UI.Footer>
        <UI.Container>
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

          <UI.PurchasePrice>
            <UI.CurrencySVG />
            {price / 100} $
          </UI.PurchasePrice>
        </UI.Container>

        <UI.PurchaseButton
          width={160}
          $solid={!!isActive}
          onClick={handleOpenPaymentPopup}>
          {isActive ? 'Продлить' : 'Возобновить'}
        </UI.PurchaseButton>
      </UI.Footer>

      {isPaymentPopup && (
        <PurchaseProducts
          type='desktop'
          user={user}
          refetchUser={refetchUser}
          onCloseModal={handleClosePaymentPopup}
          onOpenModal={handleOpenPaymentPopup}
          item={{
            title,
            description,
            avatar: getNonOriginalImage(Product?.imageWeb),
            productId,
            currencies: directories?.Currencies,
            responseUrl: `${url}${asPath}`,
            tariffId: Tariff?.id,
          }}
          dataEntitiesPage={{
            entitiesLink: '/user/purchases',
            nameEntitiesPage: 'Мои покупки',
            entityRefetchQueries: [
              {
                query: GET_MY_SUBSCRIPTIONS,
              },
            ],
          }}
        />
      )}
    </>
  );
};
