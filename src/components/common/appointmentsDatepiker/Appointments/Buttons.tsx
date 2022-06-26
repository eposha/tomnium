import {Button} from 'styles/common';
import {InnerButtons} from 'styles/datePicker/appointments';
import React from 'react';
import {IAppointment} from '@/types/common';
import {IUseBookAppointment} from '@/graph-hooks/appointments';

interface IProps {
  isContent: boolean;
  currentAppointment: IAppointment | null;
  dataBookAppointment: IUseBookAppointment;
  handleOpenCancelAppointmentModal: () => void;
}

export const Buttons: React.FC<IProps> = ({
  isContent,
  currentAppointment,
  dataBookAppointment,
  handleOpenCancelAppointmentModal,
}) => {
  const {onBookAppointment, loading: loadingBook} = dataBookAppointment;

  const handleBook = () => {
    if (!currentAppointment?.id) return;
    onBookAppointment(currentAppointment.id as number);
  };

  return (
    <InnerButtons>
      {currentAppointment?.bookedByMe ? (
        <Button $fullWidth $solid onClick={handleOpenCancelAppointmentModal}>
          Перенести
        </Button>
      ) : (
        <Button
          $fullWidth
          onClick={handleBook}
          $isDisabled={
            !isContent || !currentAppointment?.active || loadingBook
          }>
          Забронировать
        </Button>
      )}
    </InnerButtons>
  );
};
