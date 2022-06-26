import React, {FC, useEffect, useState} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {
  ReactDatePickerWrapper,
  DisabledInner,
} from 'styles/datePicker/appointments';
import {Box} from 'styles/common';
import {Media} from 'src/media-styles';
import {IAppointment, ISelectOption, ISelectOptions} from '@/types/common';
import {LOCALES} from '@/constants/locales';
import {getDateWithoutTime} from '@/helpers/time';
import {TimezoneSelect} from 'styles/select/timezone';
import {
  IUseAppointments,
  IUseBookAppointment,
  IUseCancelAppointment,
} from '@/graph-hooks/appointments';
import {
  DatePicker,
  Appointments,
} from '@/components/common/appointmentsDatepiker';
import {ConsultationDuration} from 'src/graphql.schema';
import {CancelAppointmentModal} from '@/components/common/appointmentsDatepiker/modals';
import {utcToZonedTime} from 'date-fns-tz';
import WorldIcon from 'public/icons/World2.svg';

interface IAppointmentsDatePicker {
  appointmentsMy?: IAppointment[] | null;
  locale: string;
  dataAppointments: IUseAppointments;
  dataBookAppointment: IUseBookAppointment;
  dataCancelAppointment: IUseCancelAppointment;
  queryAppointmentId?: number;
  minDate: Date;
  maxDate: Date;
  timezonesOptions: ISelectOptions;
  dataSelectedDate: {
    selectedDate: Date | null;
    setDate: React.Dispatch<React.SetStateAction<Date | null>>;
  };
  dataTimezone: {
    timezone: ISelectOption;
    setTimezone: React.Dispatch<React.SetStateAction<ISelectOption>>;
  };
  loading: boolean;
  queryAppointment?: IAppointment;
  duration: ConsultationDuration | string;
  fetchAppointmentsByMonth: (date: Date) => void;
  appointmentsFromMonth?: IAppointment[] | null;
}

export const AppointmentsDatePicker: FC<IAppointmentsDatePicker> = ({
  appointmentsMy,
  locale,
  queryAppointment,
  minDate,
  maxDate,
  timezonesOptions,
  dataAppointments,
  dataBookAppointment,
  dataCancelAppointment,
  dataTimezone,
  dataSelectedDate,
  loading,
  duration,
  fetchAppointmentsByMonth,
  appointmentsFromMonth,
}) => {
  const objectLocale = LOCALES[locale as string];

  const {timezone, setTimezone} = dataTimezone;

  const {selectedDate, setDate} = dataSelectedDate;

  const [currentAppointment, setCurrentAppointment] =
    useState<IAppointment | null>(queryAppointment || null);

  const [timeSelected, selectTime] = useState<null | Date>(null);

  const [isOpenMobileAppointments, setIsOpenMobileAppointments] =
    useState(false);

  const [isOpenCancelAppointmentModal, setIsOpenCancelAppointmentModal] =
    useState(false);

  useEffect(() => {
    if (!queryAppointment) return;
    setCurrentAppointment(queryAppointment);
    selectTime(
      utcToZonedTime(new Date(queryAppointment?.startAt), timezone?.value),
    );
  }, [queryAppointment?.id, timezone]);

  useEffect(() => {
    if (
      !queryAppointment ||
      !timezone?.value ||
      !dataAppointments?.appointments?.length
    )
      return;
    setIsOpenMobileAppointments(true);
  }, [dataAppointments?.appointments, queryAppointment, timezone?.value]);

  const onChangeTimezone = (newTimezone: ISelectOption) => {
    setTimezone(newTimezone);
  };

  const onChange = (date?: Date) => () => {
    if (!date || getDateWithoutTime(date) < getDateWithoutTime(minDate)) return;
    setDate(date);
    setIsOpenMobileAppointments(true);
    setCurrentAppointment(null);
    selectTime(null);
    dataBookAppointment.setSuccess(null);
  };

  const resetTime = () => {
    selectTime(null);
    setDate(null);
    setCurrentAppointment(null);
    setIsOpenMobileAppointments(false);
  };

  const handleCloseMobileAppointments = () => {
    setIsOpenMobileAppointments(false);
    selectTime(null);
    setCurrentAppointment(null);
  };

  const handleCloseCancelAppointmentModal = () => {
    setIsOpenCancelAppointmentModal(false);
  };

  const handleOpenCancelAppointmentModal = () => {
    setIsOpenCancelAppointmentModal(true);
  };

  const handleCancelAppointment = () => {
    if (!currentAppointment?.id) return;
    dataCancelAppointment.onCancelAppointment(currentAppointment.id as number);
    handleCloseCancelAppointmentModal();
  };

  return (
    <ReactDatePickerWrapper>
      <CancelAppointmentModal
        isOpenModal={isOpenCancelAppointmentModal}
        handleCancelAppointment={handleCancelAppointment}
        handleCloseModal={handleCloseCancelAppointmentModal}
        loading={dataCancelAppointment.loading}
      />
      {loading && <DisabledInner />}
      <Media greaterThan={'sm'}>
        <DatePicker
          appointmentsMy={appointmentsMy}
          locale={locale}
          resetTime={resetTime}
          onChange={onChange}
          timezone={timezone?.value}
          selectedDate={selectedDate}
          minDate={minDate}
          maxDate={maxDate}
          fetchAppointmentsByMonth={fetchAppointmentsByMonth}
          appointmentsFromMonth={appointmentsFromMonth}
        />
      </Media>
      <Media lessThan={'sm'}>
        {!isOpenMobileAppointments && (
          <>
            <DatePicker
              appointmentsMy={appointmentsMy}
              locale={locale}
              resetTime={resetTime}
              onChange={onChange}
              timezone={timezone?.value}
              selectedDate={selectedDate}
              minDate={minDate}
              maxDate={maxDate}
              fetchAppointmentsByMonth={fetchAppointmentsByMonth}
              appointmentsFromMonth={appointmentsFromMonth}
            />
            <Box mt={'10px'}>
              <TimezoneSelect
                options={timezonesOptions}
                value={timezone}
                onChange={onChangeTimezone}
                Icon={() => <WorldIcon width={14} height={14} />}
                height='40px'
                isSearchable
              />
            </Box>
          </>
        )}
      </Media>
      <Appointments
        loading={loading}
        timeSelected={timeSelected}
        locale={objectLocale}
        selectedDate={selectedDate}
        selectTime={selectTime}
        dataAppointments={dataAppointments}
        dataBookAppointment={dataBookAppointment}
        dataTimezone={{timezone, onChangeTimezone}}
        currentAppointment={currentAppointment}
        setCurrentAppointment={setCurrentAppointment}
        isOpenMobileAppointments={isOpenMobileAppointments}
        handleCloseMobileAppointments={handleCloseMobileAppointments}
        timezonesOptions={timezonesOptions}
        duration={duration}
        handleOpenCancelAppointmentModal={handleOpenCancelAppointmentModal}
      />
    </ReactDatePickerWrapper>
  );
};
