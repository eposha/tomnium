import NextLink from 'next/link';
import {
  Card,
  InnerCardImage,
  WrapperCardImage,
  WrapperCard,
  InnerContentCard,
  StyledMedia,
  InnerButtons,
  SubInnerButtons,
  BottomLabel,
} from 'styles/consultations/consultationPage';
import {CustomImage, InnerIcon, WrapperIcons} from 'styles/consultations/card';
import {Text, Widget, Box, Button} from 'styles/common';
import {LabelsWithShowMore} from '@/components/common/LabelsWithShowMore';
import Image from 'next/image';
import {formatDate} from '@/helpers/common';
import {DATE_FORMAT} from '@/constants/common';
import {ICategory} from '@/types/category';
import {IPrice} from '@/types/price';
import {Media} from 'src/media-styles';
import {IAppointment} from '@/types/common';
import {CONSULTATION_DURATION} from '@/constants/consultation';
import {ConsultationDuration} from 'src/graphql.schema';
import {IDataSelect} from '@/types/consultation';
import React, {useMemo} from 'react';
import {usePaymentPopup, useSelect} from 'src/hooks';
import {getImgSrc} from '@/helpers/image';
import {IUser} from '@/types/user';
import {
  PurchaseProducts,
  TRefetchUser,
} from '@/components/common/PurchaseProducts';
import {CONSULTATION_QUERY} from '@/query/consultations';
import Select from '@/components/common/Select';
import {useRouter} from 'next/router';
import {useDirectories} from '@/graph-hooks/directories';

interface IProps {
  avatar?: string;
  productId?: string;
  user?: IUser | null;
  refetchUser: TRefetchUser;
  title?: string;
  description?: string;
  consultationId?: string | number;
  duration?: ConsultationDuration;
  Categories?: ICategory[] | null;
  Prices?: IPrice[] | null;
  Appointments?: IAppointment[] | null;
  queryAppointmentId?: string;
  ticketsCount?: number | null;
  dataPricesSelect: IDataSelect;
  dataLanguageSelect: IDataSelect;
  url: string;
  productImages?: {
    imageMob?: string;
    imageWeb?: string;
  };
}

export const ConsultationCard: React.FC<IProps> = ({
  avatar,
  title,
  Categories,
  description,
  Appointments,
  duration,
  queryAppointmentId,
  ticketsCount,
  dataLanguageSelect,
  dataPricesSelect,
  Prices,
  user,
  refetchUser,
  productId,
  consultationId,
  url,
  productImages,
}) => {
  const {asPath} = useRouter();
  const {directories} = useDirectories();

  const {isPaymentPopup, handleOpenPaymentPopup, handleClosePaymentPopup} =
    usePaymentPopup(!Boolean(title));

  const {values: price, onChangeSelect: onChangePrice} = useSelect(
    dataPricesSelect.defaultValue,
  );

  const {values: language, onChangeSelect: onChangeLanguage} = useSelect(
    dataLanguageSelect.defaultValue,
  );

  const priceItem = useMemo(
    () => Prices?.find((it) => it.Currency.id === price?.value),
    [price, Prices],
  );

  const appointment =
    Appointments?.find((it) => it.id === queryAppointmentId) ||
    Appointments?.[0];

  const categoryLabels = (Categories || [])?.map((it) => ({
    ...it,
    title: it.displayName,
  }));

  const getTextLabel = () => {
    if (ticketsCount) {
      return `Куплено: ${ticketsCount}`;
    }
    if (!ticketsCount && !Appointments?.length) {
      return 'У вас еще не куплена консультация с этим специалистом';
    }
    if (Appointments?.length) {
      return 'У вас уже забронирована консультация с этим специалистом';
    }
    return '';
  };
  const imgCard = getImgSrc(avatar);
  const currencies = directories?.Currencies;
  const {imageWeb} = productImages || {};
  return (
    <WrapperCard>
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
            avatar: imageWeb ?? '',
            price: priceItem,
            productId,
            currencies,
            responseUrl: `${url}/${asPath}`,
          }}
          dataEntitiesPage={{
            entitiesLink: '/consultations',
            nameEntitiesPage: 'Мои консультации',
            entityRefetchQueries: [
              {
                query: CONSULTATION_QUERY,
                variables: {
                  record: {id: consultationId},
                },
              },
            ],
          }}
        />
      )}
      <Card>
        <WrapperCardImage>
          <InnerCardImage>
            <CustomImage
              src={imgCard}
              layout={'fill'}
              alt={'avatar'}
              objectFit='cover'
            />
          </InnerCardImage>
          <StyledMedia lessThan={'sm'} width={'100%'}>
            <WrapperIcons width={'100%'}>
              <Text $title fontSize={'16px'} lineClamp={1}>
                {title}
              </Text>
              <InnerIcon>
                <Image
                  src={'/icons/Calendar.svg'}
                  width={16}
                  height={16}
                  alt={'calendar'}
                />
                {appointment?.startAt ? (
                  <Text fontSize={'12px'} $description>
                    {formatDate(appointment?.startAt, DATE_FORMAT.primary)}
                  </Text>
                ) : (
                  <Widget height={'20px'} $status fontSize={'12px'}>
                    Нет брони
                  </Widget>
                )}
              </InnerIcon>
              <InnerIcon>
                <Image
                  src={'/icons/TimeSVG.svg'}
                  width={16}
                  height={16}
                  alt={'clock'}
                />
                <Text fontSize={'12px'} $description>
                  {CONSULTATION_DURATION?.[duration || ''] || '-'}
                </Text>
              </InnerIcon>
              <InnerIcon width={'100%'}>
                <Image
                  src={'/icons/World.svg'}
                  width={16}
                  height={16}
                  alt={'picture'}
                />
                <Select
                  options={dataLanguageSelect.options}
                  value={language}
                  onChange={onChangeLanguage}
                />
              </InnerIcon>
            </WrapperIcons>
          </StyledMedia>
        </WrapperCardImage>
        <InnerContentCard>
          <div>
            <Box mb={'10px'}>
              <Text $title fontSize={'16px'} lineClamp={1}>
                {title}
              </Text>
            </Box>
            <Text
              fontSize={'12px'}
              $description
              lineClamp={5}
              txtColor={'#697077'}
              fontWeight={'500'}>
              {description}
            </Text>
          </div>

          <Box mt={'10px'}>
            <Text
              fontSize={'12px'}
              $description
              fontWeight={'600'}
              color={'black'}>
              Специализация:
            </Text>
            <LabelsWithShowMore items={categoryLabels} margin={'10px 0 0 0'} />
          </Box>
        </InnerContentCard>

        <InnerButtons>
          <SubInnerButtons>
            <Box mb={'15px'}>
              <Select
                options={dataPricesSelect.options}
                value={price}
                onChange={onChangePrice}
              />
            </Box>
            {/* <Media greaterThan={'xs'}>
              <Select
                options={dataLanguageSelect.options}
                value={language}
                onChange={onChangeLanguage}
              />
            </Media> */}
          </SubInnerButtons>
          <Media greaterThanOrEqual={'md'}>
            <Button $fullWidth onClick={handleOpenPaymentPopup}>
              Купить
            </Button>
          </Media>
          <Media lessThan={'md'}>
            <NextLink href={`/consultations/${consultationId}/payment`}>
              <a>
                <Button $fullWidth>Купить</Button>
              </a>
            </NextLink>
          </Media>
        </InnerButtons>
      </Card>
      <BottomLabel>{getTextLabel()}</BottomLabel>
    </WrapperCard>
  );
};
