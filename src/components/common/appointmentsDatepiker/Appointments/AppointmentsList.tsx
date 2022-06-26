import React, {FC, SyntheticEvent} from 'react';
import {getTime, format, addSeconds, isPast} from 'date-fns';
import {getTimezoneOffset, utcToZonedTime} from 'date-fns-tz';
import {DATE_FORMAT} from 'src/constants';
import {IAppointment, ISelectOption} from '@/types/common';
import {Text} from 'styles/common';
import {
  UITimeWrapper,
  TimeItem,
  InnerMessage,
} from 'styles/datePicker/appointments';
import {IUseAppointments} from '@/graph-hooks/appointments';
import {ConsultationDuration} from 'src/graphql.schema';
import {CONSULTATION_DURATION_IN_SECONDS} from '@/constants/consultation';

interface CustomTimeInput {
  timeSelected: Date | null;
  timezone: ISelectOption;
  dataAppointments: IUseAppointments;
  duration: ConsultationDuration | string;
  handleClick: (
    item: IAppointment,
    isDisabled: boolean,
  ) => (e: SyntheticEvent) => void;
}

export const AppointmentsList: FC<CustomTimeInput> = ({
  timeSelected,
  dataAppointments,
  handleClick,
  timezone,
  duration,
}) => {
  const {appointments, loading, error} = dataAppointments;
  const durationConsultation = CONSULTATION_DURATION_IN_SECONDS[duration] || 0;

  if (loading) {
    return (
      <InnerMessage>
        <Text $description fontSize={'18px'} color={'blueberry'}>
          Loading...
        </Text>
      </InnerMessage>
    );
  }

  if (error) {
    return (
      <InnerMessage>
        <Text $description fontSize={'18px'} color={'red'}>
          {error.message}
        </Text>
      </InnerMessage>
    );
  }

  return (
    <UITimeWrapper>
      {appointments?.map((item) => {
        const {bookedByMe, startAt, active, id} = item;
        const withTimezone = utcToZonedTime(
          item.startAt,
          timezone?.value as string,
        );

        const timeSelectedWithTimezone =
          timeSelected && !getTimezoneOffset(timezone?.value, timeSelected)
            ? utcToZonedTime(timeSelected, timezone?.value as string)
            : timeSelected;

        const isSelectedTime =
          timeSelectedWithTimezone &&
          getTime(timeSelectedWithTimezone) === getTime(withTimezone);

        const isPastAppointmentsDate = isPast(
          addSeconds(withTimezone, durationConsultation),
        );

        const isDisabled = (!active && !bookedByMe) || isPastAppointmentsDate;

        return (
          <TimeItem
            key={id}
            $isAppointmentTime={Boolean(bookedByMe)}
            $isSelectedTime={isSelectedTime}
            $isDisabled={isDisabled}
            onClick={handleClick(item, isDisabled)}>
            {format(
              utcToZonedTime(startAt, timezone?.value as string),
              DATE_FORMAT.time,
            )}
          </TimeItem>
        );
      })}
    </UITimeWrapper>
  );
};
