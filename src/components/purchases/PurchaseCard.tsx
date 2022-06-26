import {FC} from 'react';
import {Media} from 'src/media-styles';

import {SubscriptionStatus, SubscriptionStopReason} from 'src/graphql.schema';
import {ISubscription} from '@/types/subscription';

import PurchaseMenu from './PurchaseMenu';
import {Mobile} from './PurchaseCard/Mobile';
import {Desktop} from './PurchaseCard/Desktop';

import {PurchaseContainer} from 'styles/user/purchase';
interface IPurchaseCard {
  subscription: ISubscription;
  url: string;
}

const PurchaseCard: FC<IPurchaseCard> = ({subscription, url}) => {
  const {activeEndDate, stopReason, status, renew} = subscription;

  const isActive = status === SubscriptionStatus.SubscriptionStatusActive;
  const isCancelled =
    stopReason === SubscriptionStopReason.SubscriptionStopReasonCanceled;
  const isExpired =
    stopReason === SubscriptionStopReason.SubscriptionStopReasonExpired;

  return (
    <PurchaseContainer>
      {isActive && renew && <PurchaseMenu activeEndDate={activeEndDate} />}
      <Media at='xs'>
        <Mobile
          subscription={subscription}
          isCancelled={isCancelled}
          isExpired={isExpired}
          isActive={isActive}
        />
      </Media>

      <Media greaterThan='md'>
        <Desktop
          subscription={subscription}
          isCancelled={isCancelled}
          isExpired={isExpired}
          isActive={isActive}
          url={url}
        />
      </Media>
    </PurchaseContainer>
  );
};

export default PurchaseCard;
