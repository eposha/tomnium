import {useDirectories} from '@/graph-hooks/directories';
import {useGetPriceLists} from '@/graph-hooks/priceList';
import {useOrderCheck} from '@/graph-hooks/product/useOrderCheck';
import {useProductActivate} from '@/graph-hooks/subscription/useProductActivate';
import {useActivateFreeThread} from '@/graph-hooks/threads/useActivateFreeThread';
import {useUser} from '@/graph-hooks/user';
import {
  formatDuration,
  getDeclension,
  getNonOriginalImage,
  getPrice,
} from '@/helpers/common';
import {GET_COURSE} from '@/query/courses/course';
import {GET_THREAD_BY_ID} from '@/query/threads/threadById';
import {IMedia, IModule, IThread} from '@/types/index';
import Link from 'next/link';
import {useRouter} from 'next/router';
import CoinIcon from 'public/icons/CoinSVG.svg';
import FileIcon from 'public/icons/FileSVG.svg';
import GiftIcon from 'public/icons/GiftSVG.svg';
import TimeIcon from 'public/icons/TimeSVG.svg';
import {FC, useEffect} from 'react';
import {ThreadAvailableAction} from 'src/graphql.schema';
import {usePaymentPopup} from 'src/hooks';
import {Media} from 'src/media-styles';
import {Box, Text} from 'styles/common';
import * as UI from 'styles/courses/course-details';
import {PurchaseProducts} from '../common/PurchaseProducts';

interface ICourseDetailsCardProps {
  data: {
    thread?: IThread | null;
    module?: IModule | null;
    type?: ThreadAvailableAction;
  };
  freeCourse?: {
    freeTitle?: string;
    freeDescription?: string;
    freeImage?: IMedia[];
  };
  courseId?: string | string[];
  url?: string;
}

const CourseDetailsCard: FC<ICourseDetailsCardProps> = ({
  data,
  courseId,
  url,
  freeCourse,
}) => {
  const {asPath, reload} = useRouter();
  const {directories} = useDirectories();
  const {productActivate} = useProductActivate();

  const {
    title,
    description,
    lessonsCount,
    learnDuration,
    id: threadId,
    Product,
  } = data.thread || {};

  const {priceLists} = useGetPriceLists({productId: Product?.id});

  const {isFree} = data.module || {};

  const {
    ThreadAvailableActionActivateBySubscription,
    ThreadAvailableActionBuy,
  } = ThreadAvailableAction;

  const {freeTitle, freeDescription, freeImage} = freeCourse || {};

  const {handleActivateFreeThread} = useActivateFreeThread(threadId);

  const {user, refetch: refetchUser} = useUser();

  const {isPaymentPopup, handleOpenPaymentPopup, handleClosePaymentPopup} =
    usePaymentPopup(!Boolean(title));

  const currencies = directories?.Currencies;
  const userCurrency = user?.Currency?.code ?? '';

  const coursePrice = Product?.price;
  const courseOldPrice = Product?.oldPrice;

  const orderData = useOrderCheck();

  useEffect(() => {
    if (Product) {
      orderData.getOrderPrice({
        variables: {
          record: {
            productId: Product?.id,
            productCount: 1,
          },
        },
      });
    }
  }, [threadId]);

  const order = orderData?.data?.orderCheck;
  const handleActivate = () => {
    if (Product?.id) {
      productActivate({
        variables: {
          id: Product?.id,
        },
        onCompleted: () => {
          reload();
        },
      });
    }
  };

  const isPriceBlockVisible =
    !isFree &&
    !!coursePrice &&
    data.type !== ThreadAvailableActionActivateBySubscription;

  return (
    <UI.CardWrapper>
      {isPaymentPopup && (
        <PurchaseProducts
          type={'desktop'}
          user={user}
          refetchUser={refetchUser}
          onCloseModal={handleClosePaymentPopup}
          onOpenModal={handleOpenPaymentPopup}
          item={{
            title,
            description,
            avatar: getNonOriginalImage(Product?.imageWeb),
            productId: Product?.id,
            currencies,
            responseUrl: `${url}/${asPath}`,
            isProductThread: true,
          }}
          dataEntitiesPage={{
            entitiesLink: '/courses',
            nameEntitiesPage: 'Курсы',
            entityRefetchQueries: [
              {
                query: GET_THREAD_BY_ID,
                variables: {id: threadId},
              },
              {
                query: GET_COURSE,
                variables: {
                  record: {id: courseId},
                },
              },
            ],
          }}
        />
      )}
      <Media greaterThan={'xs'}>
        <UI.Header>
          <UI.StyledImage
            src={
              (data.type == ThreadAvailableActionBuy ||
              data.type == ThreadAvailableActionActivateBySubscription
                ? getNonOriginalImage(Product?.imageWeb) ||
                  '/images/courses/test1.jpg'
                : getNonOriginalImage(freeImage)) || '/images/courses/test1.jpg'
            }
            alt='Course'
            width={230}
            height={131}
            layout='responsive'
          />
        </UI.Header>
      </Media>

      <UI.Content>
        <Text $title margin='0 0 10px'>
          {isFree ? freeTitle : title}
        </Text>
        <Text $description lineClamp={3}>
          {isFree ? freeDescription : description}
        </Text>
      </UI.Content>

      <UI.Footer>
        {(learnDuration || lessonsCount) && (
          <UI.MainMeta>
            {learnDuration &&
              Object.entries(learnDuration).some(
                (item) => item[0] !== '__typename' && item[1] !== null,
              ) && (
                <UI.DurationWrapper>
                  <TimeIcon width={20} height={20} />
                  <UI.IconLabel>
                    <b>{formatDuration(learnDuration)}</b>
                  </UI.IconLabel>
                </UI.DurationWrapper>
              )}
            {!!lessonsCount && (
              <UI.TotalLessonsWrapper>
                <FileIcon width={20} height={20} />
                <UI.IconLabel>
                  <b>{lessonsCount}</b>{' '}
                  {getDeclension(['урок', 'урока', 'уроков'], lessonsCount)}
                </UI.IconLabel>
              </UI.TotalLessonsWrapper>
            )}
          </UI.MainMeta>
        )}

        <UI.AdditionalMetaWrapper>
          <UI.PriceWrapper>
            {isFree && <GiftIcon width={20} height={20} />}
            {isPriceBlockVisible ? (
              <CoinIcon width={20} height={20} />
            ) : (
              <Box height='20px' />
            )}

            {order && (
              <UI.Price>
                {isFree && 'Бесплатно'}
                {isPriceBlockVisible && (
                  <>
                    {`${getPrice(order.total ?? coursePrice)} ${userCurrency}`}
                    {!!courseOldPrice && (
                      <UI.Discount>{`${getPrice(
                        courseOldPrice,
                      )} USD`}</UI.Discount>
                    )}
                  </>
                )}
              </UI.Price>
            )}
          </UI.PriceWrapper>
          <Media greaterThan={'xs'}>
            {user &&
              (isFree || user.Subscription?.activationsLeft > 0 ? (
                <UI.StyledLink as='span'>
                  {isFree && 'Уже доступно'}

                  {user.Subscription?.activationsLeft > 0 &&
                    `Доступно еще ${
                      user.Subscription.activationsLeft
                    } ${getDeclension(
                      ['курс', 'курса', 'курсов'],
                      user.Subscription.activationsLeft,
                    )}`}
                </UI.StyledLink>
              ) : !!priceLists?.length ? (
                <Link
                  href={`/courses/${courseId}/threads/${threadId}/prices/${Product?.id}`}
                  passHref>
                  <UI.StyledLink>Сравнить цены</UI.StyledLink>
                </Link>
              ) : null)}
          </Media>

          {isFree ? (
            <UI.StyledButton onClick={handleActivateFreeThread} $fullWidth>
              Попробовать
            </UI.StyledButton>
          ) : (
            <>
              <Media greaterThanOrEqual={'md'}>
                {data.type == ThreadAvailableActionBuy && (
                  <UI.StyledButton $fullWidth onClick={handleOpenPaymentPopup}>
                    Купить
                  </UI.StyledButton>
                )}
                {data.type == ThreadAvailableActionActivateBySubscription && (
                  <UI.StyledButton
                    $fullWidth
                    onClick={() => {
                      handleActivate();
                    }}>
                    Активировать по подписке
                  </UI.StyledButton>
                )}
              </Media>
              <Media lessThan={'md'}>
                {data.type == ThreadAvailableActionBuy && (
                  <Link
                    href={`/courses/${courseId}/threads/${threadId}/payment`}>
                    <a>
                      <UI.StyledButton>Купить</UI.StyledButton>
                    </a>
                  </Link>
                )}
                {data.type == ThreadAvailableActionActivateBySubscription && (
                  <UI.StyledButton
                    $fullWidth
                    onClick={() => {
                      handleActivate();
                    }}>
                    Начать по подписке
                  </UI.StyledButton>
                )}
              </Media>
            </>
          )}
        </UI.AdditionalMetaWrapper>
      </UI.Footer>
    </UI.CardWrapper>
  );
};

export default CourseDetailsCard;
