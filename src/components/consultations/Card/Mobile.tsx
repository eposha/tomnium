import {LabelsWithShowMore} from '@/components/common/LabelsWithShowMore';
import {HeartIcon} from '@/components/documents';
import {DATE_FORMAT} from '@/constants/common';
import {formatDate, getNonOriginalImage} from '@/helpers/common';
import {TSubCard} from '@/types/consultation';
import Image from 'next/image';
import ReactLink from 'next/link';
import {useSelect} from 'src/hooks/useSelect';
import {Text, Widget} from 'styles/common';
import Select from '@/components/common/Select';
import {
  ButtonLink,
  ContainerFlex,
  CustomImage,
  InnerFlex,
  InnerIcon,
  InnerImage,
  Label,
  MobileCardWrapper,
  WrapperIcons,
} from 'styles/consultations/card';

import CoinIcon from 'public/icons/CoinSVG.svg';

//change default Image
export const MobileConsultationCard: React.FC<TSubCard> = ({
  description,
  appointment,
  duration,
  // languages,
  ticketsCount,
  entityLink = '#',
  buyLink = '#',
  label,
  isOwner,
  categoryLabels,
  imageScr,
  title,
  isFavorite,
  dataPricesSelect,
  handleChangeFavorite,
  isPurchases,
  price,
  meetingMethod,
}) => {
  const {values: pricee, onChangeSelect: onChangePrice} = useSelect(
    dataPricesSelect.defaultValue,
  );

  const iconPath = getNonOriginalImage(meetingMethod?.icon);
  const meetingName =
    meetingMethod?.name
      .split('')
      .map((el, i) => (i === 0 ? el.toUpperCase() : el))
      .join('') ?? '';

  return (
    <MobileCardWrapper>
      {!isOwner && (
        <HeartIcon
          isFavorite={isFavorite}
          position={10}
          onClick={handleChangeFavorite}
        />
      )}
      <InnerFlex>
        <InnerImage mr={'12px'}>
          <CustomImage
            src={imageScr}
            width={115}
            height={130}
            objectFit={'cover'}
          />
          {label && <Label>{label}</Label>}
        </InnerImage>
        <WrapperIcons isDataIcons>
          <Text
            $title
            fontSize={'16px'}
            lineClamp={2}
            margin={'0 0 5px 0'}
            padding={'0 22px 0 0'}>
            {title}
          </Text>
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
      </InnerFlex>

      <LabelsWithShowMore items={categoryLabels} />

      <Text fontSize={'12px'} $description lineClamp={5} margin={'0 0 15px 0'}>
        {description}
      </Text>

      <ContainerFlex>
        <InnerIcon>
          {iconPath && meetingMethod?.name && (
            <Image
              src={iconPath}
              width={20}
              height={20}
              alt={meetingMethod.name}
            />
          )}

          <Text fontSize={'12px'} $title>
            {meetingName}
          </Text>
        </InnerIcon>

        <WrapperIcons>
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
        </WrapperIcons>

        <ButtonLink $fullWidth $solid colorLink={'secondary'}>
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
      </ContainerFlex>
    </MobileCardWrapper>
  );
};
