import {FC} from 'react';
import {useRouter} from 'next/router';
import {Media} from 'src/media-styles';
import {getNonOriginalImage} from '@/helpers/common';

import {useRedirect} from 'src/hooks';
import {useUser} from '@/graph-hooks/user';
import {useDirectories} from '@/graph-hooks/directories';
import {useProduct} from '@/graph-hooks/product/useProduct';

import {
  ISuccessPayment,
  PurchaseProducts,
} from '@/components/common/PurchaseProducts';

interface IPaymentPageProps {
  url: string;
  dataEntitiesPage: ISuccessPayment;
  cancelLink: string;
}

const MobilePayment: FC<IPaymentPageProps> = ({
  url,
  dataEntitiesPage,
  cancelLink,
}) => {
  const {
    asPath,
    query: {productId, saleId, tariffId},
  } = useRouter();
  useRedirect('/404', 992);
  const {user, refetch: refetchUser, loading: loadingUser} = useUser();
  const {directories, loading: loadingDirectories} = useDirectories();

  const {product} = useProduct(`${productId}`);
  const {title, description, imageMob} = product || {};

  return (
    <Media lessThan={'md'}>
      <PurchaseProducts
        type='mobile'
        user={user}
        refetchUser={refetchUser}
        cancelLink={cancelLink}
        loading={loadingUser || loadingDirectories}
        item={{
          title,
          description,
          avatar: getNonOriginalImage(imageMob),
          productId: `${productId}`,
          saleId: saleId ? `${saleId}` : undefined,
          tariffId: tariffId ? Number(tariffId) : undefined,
          currencies: directories?.Currencies,
          responseUrl: `${url}${asPath}`,
        }}
        dataEntitiesPage={dataEntitiesPage}
      />
    </Media>
  );
};

export default MobilePayment;
