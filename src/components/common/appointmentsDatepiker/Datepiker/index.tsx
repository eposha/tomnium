import React, {FC} from 'react';
import {utcToZonedTime} from 'date-fns-tz';
import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker';
import DatePickerHeader from './Header';
import {UIDay, StyledDatePicker} from 'styles/datePicker/appointments';
import {IAppointment} from '@/types/common';
import {getIsEqualDate} from '@/helpers/time';
import {LOCALES} from '@/constants/locales';

interface IAppointmentsDatePicker {
  appointmentsMy?: IAppointment[] | null;
  locale: string;
  minDate: Date;
  maxDate: Date;
  timezone: string;
  selectedDate: Date | null;
  resetTime: () => void;
  onChange: (date?: Date) => () => void;
  fetchAppointmentsByMonth: (date: Date) => void;
  appointmentsFromMonth?: IAppointment[] | null;
}

export const DatePicker: FC<IAppointmentsDatePicker> = ({
  appointmentsMy,
  locale,
  minDate,
  maxDate,
  timezone,
  selectedDate,
  resetTime,
  onChange,
  fetchAppointmentsByMonth,
  appointmentsFromMonth,
}) => {
  const zonedAppointmentsMy = appointmentsMy?.map((it) => ({
    ...it,
    startAt: utcToZonedTime(it.startAt, timezone),
  }));

  const zonedAppointmentsTeacher = appointmentsFromMonth?.map((it) => ({
    ...it,
    startAt: utcToZonedTime(it.startAt, timezone),
  }));

  return (
    <StyledDatePicker>
      <ReactDatePicker
        onMonthChange={fetchAppointmentsByMonth}
        renderCustomHeader={({
          nextMonthButtonDisabled,
          prevMonthButtonDisabled,
          date,
          decreaseMonth,
          increaseMonth,
          changeMonth,
          changeYear,
        }) => (
          <DatePickerHeader
            date={date}
            selectedDate={selectedDate}
            minDate={minDate}
            maxDate={maxDate}
            nextMonthButtonDisabled={nextMonthButtonDisabled}
            prevMonthButtonDisabled={prevMonthButtonDisabled}
            decreaseMonth={decreaseMonth}
            increaseMonth={increaseMonth}
            changeMonth={changeMonth}
            changeYear={changeYear}
            resetTime={resetTime}
            locale={locale}
            timezone={timezone}
          />
        )}
        renderDayContents={(day, date) => {
          const isAppointment = !!zonedAppointmentsMy?.find(
            ({startAt}) => date && getIsEqualDate(startAt, date),
          );

          const isAppointmentTeacher = !!zonedAppointmentsTeacher?.find(
            ({startAt}) => date && getIsEqualDate(startAt, date),
          );

          return (
            <UIDay
              onClick={onChange(date)}
              $isAppointment={isAppointment}
              $isAppointmentTeacher={isAppointmentTeacher}>
              {day}
            </UIDay>
          );
        }}
        selected={selectedDate}
        //@ts-ignore
        onChange={(date) => onChange(date)}
        locale={LOCALES[locale]}
        inline
        minDate={minDate}
        maxDate={maxDate}
        showDisabledMonthNavigation
      />
    </StyledDatePicker>
  );
};
