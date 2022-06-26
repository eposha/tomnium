import {FC} from 'react';
import {useRouter} from 'next/router';
import {usePaymentPopup} from 'src/hooks';
import {useUser} from '@/graph-hooks/user';
import {useDirectories} from '@/graph-hooks/directories';
import {PurchaseProducts} from '@/components/common/PurchaseProducts';
import {GET_COURSE} from '@/query/courses/course';
import {getSlugifiedUrl} from '@/helpers/common';

import {StyledLink} from 'styles/courses/course-gifts';
import {getNonOriginalImage} from '@/helpers/common';
import {IProduct} from '@/types/product';

interface IGiftCardPaymentLinkProps {
  tariffId: number;
  tariffName: string;
  url?: string;
  product: IProduct;
}

export const GiftCardPaymentLink: FC<IGiftCardPaymentLinkProps> = ({
  tariffId,
  tariffName,
  url,
  product,
}) => {
  const {directories} = useDirectories();
  const {user, refetch: refetchUser} = useUser();
  const {asPath, query} = useRouter();
  const {courseId} = query;

  const record = getSlugifiedUrl(courseId);

  const {id: productId, title, description, imageWeb} = product;

  const {isPaymentPopup, handleOpenPaymentPopup, handleClosePaymentPopup} =
    usePaymentPopup(!tariffName);

  return (
    <>
      <StyledLink as='span' onClick={handleOpenPaymentPopup}>
        {tariffName}
      </StyledLink>

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
            avatar: getNonOriginalImage(imageWeb),
            productId,
            currencies: directories?.Currencies,
            responseUrl: `${url}${asPath}`,
            tariffId,
          }}
          dataEntitiesPage={{
            entitiesLink: `/courses/${courseId}`,
            nameEntitiesPage: 'Вернуться',
            entityRefetchQueries: [
              {
                query: GET_COURSE,
                variables: {
                  ...record,
                },
              },
            ],
          }}
        />
      )}
    </>
  );
};
