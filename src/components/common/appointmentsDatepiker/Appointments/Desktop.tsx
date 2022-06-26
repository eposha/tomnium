import React, {FC} from 'react';
import {
  HeaderDateTitle,
  InnerAppointments,
  WrapperCustomInput,
} from 'styles/datePicker/appointments';
import {
  AppointmentsList,
  IAppointmentsProps,
  Buttons,
  SuccessModal,
} from '@/components/common/appointmentsDatepiker';
import {TimezoneSelect} from 'styles/select/timezone';

import WorldIcon from 'public/icons/World2.svg';

export const DesktopAppointments: FC<IAppointmentsProps> = ({
  timeSelected,
  selectedDate,
  dataBookAppointment,
  dataAppointments,
  currentAppointment,
  handleClick,
  isContent,
  title,
  locale,
  timezonesOptions,
  dataTimezone,
  duration,
  handleOpenCancelAppointmentModal,
}) => {
  const {timezone, onChangeTimezone} = dataTimezone;

  return (
    <WrapperCustomInput>
      {Boolean(dataBookAppointment.success) && (
        <SuccessModal
          selectedDate={timeSelected as Date}
          setSuccess={dataBookAppointment.setSuccess}
          locale={locale}
        />
      )}
      <InnerAppointments>
        <HeaderDateTitle $isDate={!!selectedDate}>{title}</HeaderDateTitle>
        {selectedDate && (
          <AppointmentsList
            timeSelected={timeSelected}
            handleClick={handleClick}
            dataAppointments={dataAppointments}
            timezone={timezone}
            duration={duration}
          />
        )}
      </InnerAppointments>
      <div>
        <TimezoneSelect
          options={timezonesOptions}
          value={timezone}
          onChange={onChangeTimezone}
          Icon={() => <WorldIcon width={14} height={14} />}
          height='40px'
          isSearchable
        />
        <Buttons
          isContent={isContent}
          dataBookAppointment={dataBookAppointment}
          handleOpenCancelAppointmentModal={handleOpenCancelAppointmentModal}
          currentAppointment={currentAppointment}
        />
      </div>
    </WrapperCustomInput>
  );
};
