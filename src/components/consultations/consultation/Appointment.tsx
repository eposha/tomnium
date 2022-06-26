import {
  MainBlockAppointment,
  InnerImage,
  InnerLink,
  InnerAppointment,
} from 'styles/consultations/appointments';
import {UserBlockLink} from 'styles/consultations/consultationPage';
import {Text, Box, Button} from 'styles/common';
import {format, utcToZonedTime} from 'date-fns-tz';
import {IAppointment, IInterval, IMeetingMethod} from '@/types/common';
import {useTimer} from 'src/hooks/timer';
import {getRemainingTime, getSecondsFromInterval} from '@/helpers/time';
import Image from 'next/image';
import React, {memo, useEffect, useState} from 'react';
import cityTimezones from 'city-timezones';
import {ConsultationDuration} from 'src/graphql.schema';
import {CONSULTATION_DURATION_IN_SECONDS} from '@/constants/consultation';
import {geNormalizeUrl, getNonOriginalImage} from '@/helpers/common';
import {addSeconds, isFuture, isPast} from 'date-fns';
import {parseCookies} from 'nookies';
import ReactLink from 'next/link';
import {ButtonLink} from 'styles/consultations/card';

interface IProps {
  data?: IAppointment | null;
  locale?: Locale;
  additionalTime?: number;
  duration: ConsultationDuration | string;
  meetingMethod?: IMeetingMethod;
  handleOpenCancelAppointmentModal: (id: number) => () => void;
  beforeCancelDuration?: IInterval | null;
}

export const Appointment: React.FC<IProps> = memo(
  ({
    data,
    locale,
    duration,
    meetingMethod,
    handleOpenCancelAppointmentModal,
    beforeCancelDuration,
  }) => {
    const {timezoneCode: timezone} = parseCookies();
    const durationConsultation =
      CONSULTATION_DURATION_IN_SECONDS[duration] || 0;
    const isSetDate = data?.startAt && timezone;
    const startConsultationDate = isSetDate
      ? utcToZonedTime(data?.startAt, timezone)
      : null;
    const finishConsultationDate = isSetDate
      ? utcToZonedTime(
          addSeconds(new Date(data?.startAt), durationConsultation),
          timezone,
        )
      : null;

    const {seconds = 0, days} = useTimer(
      startConsultationDate,
      finishConsultationDate,
      timezone,
    );

    const [isMount, setIsMount] = useState(false);

    useEffect(() => {
      if (isMount) return;
      setIsMount(true);
    }, []);

    if (
      !startConsultationDate ||
      !finishConsultationDate ||
      (isPast(startConsultationDate) && isPast(finishConsultationDate))
    ) {
      return null;
    }

    const isStartedConsultation =
      isPast(startConsultationDate) && isFuture(finishConsultationDate);

    const timezoneGTM = format(startConsultationDate, 'zzz', {
      locale: locale,
    });
    const timezoneTown = timezone?.split('/')[1];
    const timezoneCountry = cityTimezones.lookupViaCity(timezoneTown || '')?.[0]
      ?.country;
    const timezoneLabel = ` ${timezoneCountry || timezoneTown}, ${timezoneGTM}`;
    const icon = getNonOriginalImage(meetingMethod?.icon);

    const beforeCancelSeconds = getSecondsFromInterval(beforeCancelDuration);
    const isShowCancelButton =
      (!beforeCancelDuration || (seconds as number) > beforeCancelSeconds) &&
      !isStartedConsultation;

    const connectLink = geNormalizeUrl(data?.url);

    return (
      <InnerAppointment>
        <Text
          $description
          fontSize={'12px'}
          fontWeight={'600'}
          color={'black'}
          textAlign={'center'}>
          <div>
            {isSetDate &&
              format(
                utcToZonedTime(data?.startAt, timezone),
                'dd MMMM, HH:mm',
                {
                  locale: locale,
                },
              )}
          </div>
          <div>{timezoneLabel}</div>
        </Text>
        <MainBlockAppointment>
          <Text
            $description
            fontSize={'12px'}
            fontWeight={'600'}
            color={'black'}
            textAlign={'center'}>
            До {isStartedConsultation && 'конца'} консультации:
          </Text>
          <Box mt={'10px'} mb={'10px'}>
            <Text
              $description
              fontSize={'18px'}
              fontWeight={'600'}
              color={isStartedConsultation ? 'red' : 'blueberry'}
              textAlign={'center'}>
              {isMount ? getRemainingTime(days, seconds as number) : ''}
            </Text>
          </Box>
        </MainBlockAppointment>
        <InnerLink>
          {icon && !isStartedConsultation && (
            <Box mr={'10px'}>
              <InnerImage>
                <Image src={icon} width={20} height={20} alt={'image'} />
              </InnerImage>
            </Box>
          )}
          {data?.url && !isStartedConsultation && (
            <UserBlockLink
              href={connectLink}
              color={'greyDark'}
              target={'_blank'}
              fontSize={'12px'}>
              Подключиться
            </UserBlockLink>
          )}

          {!data?.url && !isStartedConsultation && (
            <Text
              $description
              fontSize={'14px'}
              fontWeight={'600'}
              color={'blueberry'}>
              {meetingMethod?.name}
            </Text>
          )}

          {isStartedConsultation && data?.url && (
            <ButtonLink $fullWidth>
              <ReactLink href={connectLink} passHref>
                <a>Подключиться</a>
              </ReactLink>
            </ButtonLink>
          )}
        </InnerLink>
        {isShowCancelButton && data?.id && (
          <Box mt={'15px'}>
            <Button
              $fullWidth
              $solid
              onClick={handleOpenCancelAppointmentModal(Number(data.id))}>
              Перенести
            </Button>
          </Box>
        )}
      </InnerAppointment>
    );
  },
);

Appointment.displayName = 'Appointment';
