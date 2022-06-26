import React, {Dispatch, FC, SetStateAction, SyntheticEvent} from 'react';
import {utcToZonedTime} from 'date-fns-tz';
import {DATE_FORMAT} from 'src/constants';
import {IAppointment, ISelectOption, ISelectOptions} from '@/types/common';
import {getTime, normalizeDate} from '@/helpers/time';
import {Media} from 'src/media-styles';
import {
  DesktopAppointments,
  MobileAppointments,
} from '@/components/common/appointmentsDatepiker';
import {
  IUseAppointments,
  IUseBookAppointment,
} from '@/graph-hooks/appointments';
import {ConsultationDuration} from 'src/graphql.schema';

interface IProps {
  selectTime: (arg: Date | null) => void;
  timeSelected: Date | null;
  selectedDate: Date | null;
  locale: Locale;
  dataAppointments: IUseAppointments;
  dataBookAppointment: IUseBookAppointment;
  dataTimezone: {
    timezone: ISelectOption;
    onChangeTimezone: (tz: ISelectOption) => void;
  };
  currentAppointment: IAppointment | null;
  setCurrentAppointment: Dispatch<SetStateAction<IAppointment | null>>;
  isOpenMobileAppointments: boolean;
  handleCloseMobileAppointments: () => void;
  timezonesOptions: ISelectOptions;
  loading: boolean;
  duration: ConsultationDuration | string;
  handleOpenCancelAppointmentModal: () => void;
}

export const Appointments: FC<IProps> = ({
  timeSelected,
  selectedDate,
  selectTime,
  locale,
  currentAppointment,
  setCurrentAppointment,
  isOpenMobileAppointments,
  handleCloseMobileAppointments,
  timezonesOptions,
  dataTimezone,
  dataAppointments,
  dataBookAppointment,
  loading,
  duration,
  handleOpenCancelAppointmentModal,
}) => {
  const {timezone} = dataTimezone;
  const getTitle = () => {
    if (timeSelected) {
      return normalizeDate(timeSelected, DATE_FORMAT.primary, locale);
    }
    if (!selectedDate) return '';
    return normalizeDate(selectedDate, DATE_FORMAT.secondary, locale);
  };

  const handleClick =
    (item: IAppointment, isDisabled: boolean) => (e: SyntheticEvent) => {
      e.stopPropagation();
      if (isDisabled) return;
      if (
        timeSelected &&
        getTime(timeSelected) === getTime(new Date(item.startAt))
      ) {
        setCurrentAppointment(null);
        return selectTime(null);
      }
      selectTime(utcToZonedTime(item?.startAt, timezone?.value));
      setCurrentAppointment(item);
    };

  const isContent = Boolean(currentAppointment);

  return (
    <>
      <Media greaterThan={'xs'}>
        <DesktopAppointments
          duration={duration}
          loading={loading}
          handleClick={handleClick}
          selectedDate={selectedDate}
          title={getTitle()}
          locale={locale}
          isContent={isContent}
          timeSelected={timeSelected}
          dataAppointments={dataAppointments}
          dataBookAppointment={dataBookAppointment}
          handleOpenCancelAppointmentModal={handleOpenCancelAppointmentModal}
          currentAppointment={currentAppointment}
          dataTimezone={dataTimezone}
          timezonesOptions={timezonesOptions}
        />
      </Media>
      <Media at={'xs'}>
        {isOpenMobileAppointments && (
          <MobileAppointments
            duration={duration}
            loading={loading}
            handleClick={handleClick}
            selectedDate={selectedDate}
            title={getTitle()}
            locale={locale}
            isContent={isContent}
            timeSelected={timeSelected}
            dataAppointments={dataAppointments}
            dataBookAppointment={dataBookAppointment}
            handleOpenCancelAppointmentModal={handleOpenCancelAppointmentModal}
            currentAppointment={currentAppointment}
            dataTimezone={dataTimezone}
            timezonesOptions={timezonesOptions}
            handleCloseMobileAppointments={handleCloseMobileAppointments}
          />
        )}
      </Media>
    </>
  );
};
