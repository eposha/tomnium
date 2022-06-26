import {
  WrapperCancelAppointmentModal,
  InnerCancelAppointmentModal,
  InnerButtonsCancelModal,
} from 'styles/datePicker/appointments';
import {Text, Box, Button} from 'styles/common';

interface IProps {
  handleCancelAppointment: () => void;
  handleCloseModal: () => void;
  isOpenModal: boolean;
  loading: boolean;
}

export const CancelAppointmentModal: React.FC<IProps> = ({
  handleCancelAppointment,
  handleCloseModal,
  isOpenModal,
  loading,
}) => {
  if (!isOpenModal) {
    return null;
  }

  return (
    <WrapperCancelAppointmentModal>
      <InnerCancelAppointmentModal>
        <Text
          $description
          color={'black'}
          textAlign={'center'}
          fontWeight={'600'}
          fontSize={'18px'}>
          Перенос консультации
        </Text>
        <Box mt={'15px'} mb={'25px'}>
          <Text
            $description
            color={'greyDark'}
            textAlign={'center'}
            fontWeight={'500'}
            fontSize={'14px'}>
            Вы действительно хотите перенести <br /> консультацию?
          </Text>
        </Box>
        <InnerButtonsCancelModal>
          <Button
            $fullWidth
            onClick={handleCancelAppointment}
            $isDisabled={loading}>
            Да
          </Button>
          <Button
            $fullWidth
            $solid
            color={'red'}
            onClick={handleCloseModal}
            $isDisabled={loading}>
            Отменить
          </Button>
        </InnerButtonsCancelModal>
      </InnerCancelAppointmentModal>
    </WrapperCancelAppointmentModal>
  );
};
