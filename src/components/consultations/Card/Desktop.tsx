import {LabelsWithShowMore} from '@/components/common/LabelsWithShowMore';
import {HeartIcon} from '@/components/documents';
import {DATE_FORMAT} from '@/constants/common';
import {formatDate} from '@/helpers/common';
import {TSubCard} from '@/types/consultation';
import Image from 'next/image';
import ReactLink from 'next/link';
import Select from '@/components/common/Select';
import {Text, Widget} from 'styles/common';
import {
  ButtonLink,
  CustomImage,
  DesktopCardWrapper,
  InnerIcon,
  InnerImage,
  Label,
  WrapperIcons,
  SelectWrapper,
} from 'styles/consultations/card';
import {useSelect} from 'src/hooks/useSelect';

import CoinIcon from 'public/icons/CoinSVG.svg';

//change default Image
export const DesktopConsultationCard: React.FC<TSubCard> = ({
  title,
  description,
  appointment,
  duration,
  // languages,
  ticketsCount,
  buyLink = '#',
  entityLink = '#',
  label,
  isOwner,
  categoryLabels,
  imageScr,
  isFavorite,
  dataPricesSelect,
  handleChangeFavorite,
  price,
  isPurchases,
}) => {
  const {values: pricee, onChangeSelect: onChangePrice} = useSelect(
    dataPricesSelect.defaultValue,
  );
  return (
    <DesktopCardWrapper>
      {!isOwner && (
        <HeartIcon
          isFavorite={isFavorite}
          position={6}
          onClick={handleChangeFavorite}
        />
      )}

      <InnerImage>
        <CustomImage
          src={imageScr}
          width={115}
          height={130}
          objectFit={'cover'}
        />
        {label && <Label>{label}</Label>}
      </InnerImage>
      <div>
        <Text $title fontSize={'16px'} lineClamp={1}>
          {title}
        </Text>
        <LabelsWithShowMore items={categoryLabels} />

        <Text fontSize={'12px'} $description lineClamp={5}>
          {description}
        </Text>
      </div>
      <WrapperIcons margin={'10px 0'} isDataIcons>
        {!isPurchases && (
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
        )}
        {duration != '-' && (
          <InnerIcon>
            <Image
              src={'/icons/TimeSVG.svg'}
              width={16}
              height={16}
              alt={'clock'}
            />
            <Text fontSize={'12px'} $description>
              {duration}
            </Text>
          </InnerIcon>
        )}
        {/* Временно скрыты языки */}

        {/* {languages != '-' && (
          <InnerIcon>
            <Image
              src={'/icons/World.svg'}
              width={16}
              height={16}
              alt={'picture'}
            />
            <Text fontSize={'12px'} $description lineClamp={2}>
              {languages}
            </Text>
          </InnerIcon>
        )} */}
      </WrapperIcons>
      <WrapperIcons margin={'8px 0 0 0'}>
        <SelectWrapper>
          {isPurchases && price && (
            <InnerIcon>
              <CoinIcon width={20} height={20} />
              <Text fontSize={'14px'} fontWeight='600' color='black'>
                {price || '-'}
              </Text>
            </InnerIcon>
          )}

          {!isOwner && (
            <Select
              options={dataPricesSelect.options}
              value={pricee}
              onChange={onChangePrice}
            />
          )}
        </SelectWrapper>

        <ButtonLink colorLink={'secondary'} $fullWidth $solid>
          <ReactLink href={entityLink || '#'} passHref>
            <a>Подробнее</a>
          </ReactLink>
        </ButtonLink>
        {(!isOwner || Boolean(ticketsCount && isOwner)) && (
          <ButtonLink $fullWidth>
            <ReactLink href={!isOwner ? buyLink : entityLink} passHref>
              <a>{!isOwner ? 'Купить' : 'Забронировать'}</a>
            </ReactLink>
          </ButtonLink>
        )}
      </WrapperIcons>
    </DesktopCardWrapper>
  );
};
