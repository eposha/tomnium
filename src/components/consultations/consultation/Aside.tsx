import React, {useState} from 'react';
import {WrapperAside} from 'styles/consultations/consultationPage';
import {WrapperAppointments} from 'styles/consultations/appointments';
import {Appointment} from '@/components/consultations/consultation/Appointment';
import {LOCALES} from '@/constants/locales';
import {Media} from 'src/media-styles';
import {IUser} from '@/types/user';
import {IAppointment, IInterval, IMeetingMethod} from '@/types/common';
import {ConsultationDuration} from 'src/graphql.schema';
import {CancelAppointmentModal} from '@/components/common/appointmentsDatepiker';
import {IUseCancelAppointment} from '@/graph-hooks/appointments';
import {ProfileCard} from '@/components/common/profile';

interface IProps {
  user?: IUser | null;
  accessTime?: string;
  appointmentsMy?: IAppointment[] | null;
  locale?: string | null;
  meetingMethod?: IMeetingMethod;
  duration?: ConsultationDuration;
  dataCancelAppointment: IUseCancelAppointment;
  beforeCancelDuration?: IInterval | null;
}

export const Aside: React.FC<IProps> = ({
  appointmentsMy,
  locale,
  meetingMethod,
  duration,
  dataCancelAppointment,
  beforeCancelDuration,
}) => {
  const [isOpenCancelAppointmentModal, setIsOpenCancelAppointmentModal] =
    useState(false);
  const [currentAppointmentId, setCurrentAppointmentId] = useState<
    number | null
  >(null);

  const handleCloseCancelAppointmentModal = () => {
    setIsOpenCancelAppointmentModal(false);
  };

  const handleOpenCancelAppointmentModal = (id: number) => () => {
    setIsOpenCancelAppointmentModal(true);
    setCurrentAppointmentId(id);
  };

  const handleCancelAppointment = () => {
    if (!currentAppointmentId) return;
    dataCancelAppointment.onCancelAppointment(currentAppointmentId);
    handleCloseCancelAppointmentModal();
  };

  return (
    <Media greaterThan={'md'}>
      <WrapperAside>
        <CancelAppointmentModal
          isOpenModal={isOpenCancelAppointmentModal}
          handleCancelAppointment={handleCancelAppointment}
          handleCloseModal={handleCloseCancelAppointmentModal}
          loading={dataCancelAppointment.loading}
        />

        <ProfileCard margin='0 0 12px' />

        {!!appointmentsMy?.length && (
          <WrapperAppointments>
            {(appointmentsMy || [])?.map((it) => (
              <Appointment
                data={it}
                key={it.id}
                locale={LOCALES[locale || '']}
                meetingMethod={meetingMethod}
                duration={duration || ''}
                beforeCancelDuration={beforeCancelDuration}
                handleOpenCancelAppointmentModal={
                  handleOpenCancelAppointmentModal
                }
              />
            ))}
          </WrapperAppointments>
        )}
      </WrapperAside>
    </Media>
  );
};
