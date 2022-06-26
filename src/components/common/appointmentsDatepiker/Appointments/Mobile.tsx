import React, {FC} from 'react';
import {
  HeaderDateTitle,
  WrapperCustomInput,
  InnerHeaderMobile,
  BackMobileBtn,
  InnerAppointments,
} from 'styles/datePicker/appointments';
import {Text} from 'styles/common';
import ArrowLeft from 'public/icons/ArrowLeft.svg';
import {
  AppointmentsList,
  Buttons,
  SuccessModal,
  IAppointmentsProps,
} from '@/components/common/appointmentsDatepiker';

interface IProps extends IAppointmentsProps {
  handleCloseMobileAppointments: () => void;
}

export const MobileAppointments: FC<IProps> = ({
  timeSelected,
  selectedDate,
  dataBookAppointment,
  handleOpenCancelAppointmentModal,
  dataAppointments,
  currentAppointment,
  handleClick,
  isContent,
  title,
  handleCloseMobileAppointments,
  dataTimezone,
  locale,
  duration,
}) => {
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
        <InnerHeaderMobile>
          <BackMobileBtn onClick={handleCloseMobileAppointments}>
            <ArrowLeft width={16} height={9} />
          </BackMobileBtn>
          <HeaderDateTitle $isDate={!!selectedDate}>{title}</HeaderDateTitle>
        </InnerHeaderMobile>
        <Text $description color={'black'} fontSize={'18px'} margin={'15px 0'}>
          Выберите время
        </Text>
        <AppointmentsList
          timeSelected={timeSelected}
          handleClick={handleClick}
          dataAppointments={dataAppointments}
          timezone={dataTimezone.timezone}
          duration={duration}
        />
      </InnerAppointments>

      <Buttons
        isContent={isContent}
        dataBookAppointment={dataBookAppointment}
        handleOpenCancelAppointmentModal={handleOpenCancelAppointmentModal}
        currentAppointment={currentAppointment}
      />
    </WrapperCustomInput>
  );
};
