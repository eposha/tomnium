import {DesktopConsultationCard} from '@/components/consultations/Card/Desktop';
import {MobileConsultationCard} from '@/components/consultations/Card/Mobile';
import {CONSULTATION_DURATION} from '@/constants/consultation';
import {useCreateFavorite, useDeleteFavorite} from '@/graph-hooks/favorite';
import {
  getDataPricesSelect,
  getTextLabelCard,
  getTextPrice,
} from '@/helpers/consultation';
import {GET_FAVORITES} from '@/query/favorites/getFavorites';
import {TPropsCard} from '@/types/consultation';
import {useEffect, useState} from 'react';
import {FILE_URL} from 'src/constants/common';
import {ConsultationDuration, FavoriteTarget} from 'src/graphql.schema';
import {Media} from 'src/media-styles';
import {BottomLabelCard, MainWrapperCard} from 'styles/consultations/card';

const defaultImage = '/images/defaultPicture.png';

export const ConsultationCard: React.FC<TPropsCard> = (props) => {
  const {
    isOwner,
    ticketsCount,
    Categories,
    duration,
    Languages,
    appointment,
    price,
    image,
    isFavorite,
    id,
    currentCurrencyId,
    isPurchases,
    meetingMethod,
  } = props;

  const dataPricesSelect = getDataPricesSelect(
    props?.Product?.Tariffs?.[0]?.Prices,
    currentCurrencyId,
    duration as ConsultationDuration,
  );

  const textLabel = getTextLabelCard(
    isOwner,
    appointment?.bookedByMe,
    ticketsCount,
  );
  const categoryLabels = (Categories || [])?.map((it) => ({
    ...it,
    title: it.displayName,
  }));
  const isShowFirstBottomLabel = Boolean(textLabel);
  const isShowMoreBottomLabels = Boolean(isOwner && ticketsCount);
  const durationValue = CONSULTATION_DURATION?.[duration || ''] || '-';
  const langs = Languages?.map((it) => it.nativeName).join(', ') || '-';
  const textPrice = getTextPrice({
    isOwner,
    duration: durationValue,
    isBooked: appointment?.bookedByMe,
    ticketsCount,
  });

  const imagePath = image?.find(
    (it) => it.width === 150 && !it.isOriginal,
  )?.path;

  const img = imagePath ? FILE_URL + imagePath : defaultImage;

  const [favoriteState, setFavoriteState] = useState<boolean | undefined>(
    false,
  );

  useEffect(() => {
    setFavoriteState(isFavorite);
  }, [isFavorite]);

  const {handleCreateFavorite} = useCreateFavorite({
    targetId: String(id),
    targetType: FavoriteTarget.FavoriteTargetConsultation,
    setFavoriteState,
  });

  const {handleDeleteFavorite} = useDeleteFavorite({
    targetId: String(id),
    targetType: FavoriteTarget.FavoriteTargetConsultation,
    setFavoriteState,
    refetchQueries: [GET_FAVORITES],
  });

  const handleChangeFavorite = () =>
    favoriteState ? handleDeleteFavorite() : handleCreateFavorite();

  return (
    <MainWrapperCard>
      <Media at={'xs'}>
        <MobileConsultationCard
          {...props}
          imageScr={img}
          duration={durationValue}
          categoryLabels={categoryLabels}
          languages={langs}
          price={price || textPrice}
          isFavorite={favoriteState}
          dataPricesSelect={dataPricesSelect}
          handleChangeFavorite={handleChangeFavorite}
          isPurchases={isPurchases}
          meetingMethod={meetingMethod}
        />
      </Media>
      <Media greaterThan={'xs'}>
        <DesktopConsultationCard
          {...props}
          imageScr={img}
          duration={durationValue}
          categoryLabels={categoryLabels}
          languages={langs}
          price={price || textPrice}
          isFavorite={favoriteState}
          dataPricesSelect={dataPricesSelect}
          handleChangeFavorite={handleChangeFavorite}
          isPurchases={isPurchases}
        />
      </Media>

      {isShowFirstBottomLabel && (
        <BottomLabelCard type={'primary'}>{textLabel}</BottomLabelCard>
      )}

      {isShowMoreBottomLabels && (
        <Media greaterThan={'xs'}>
          <BottomLabelCard type={'tertiary'}>
            <BottomLabelCard type={'secondary'} />
          </BottomLabelCard>
        </Media>
      )}
    </MainWrapperCard>
  );
};
