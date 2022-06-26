import {useEffect} from 'react';
import {Controller} from 'react-hook-form';
import {Modal} from '@/components/common/PurchaseProducts';
import {
  AuthInput,
  InnerPromoCodePopup,
  PromoForm,
  WrapperPopup,
} from 'styles/payments';
import {Text, Box, Button} from 'styles/common';
import {IUseOrderCheck} from '@/graph-hooks/payments/useOrderCheck';
import {Message} from '@/components/common/message';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  dataOrderCheck: IUseOrderCheck;
}

export const PromoCodePopup: React.FC<IProps> = ({
  isOpen,
  onClose,
  dataOrderCheck,
}) => {
  const {
    control,
    onActivePromo,
    formErrors,
    error,
    success,
    setSuccess,
    setError,
    loading,
  } = dataOrderCheck;

  useEffect(() => {
    return () => {
      setSuccess(false);
      setError(null);
    };
  }, [isOpen]);

  const closeSuccessMsg = () => {
    setSuccess(false);
  };

  const closeErrorMsg = () => {
    setError(null);
  };

  if (!isOpen) return null;

  return (
    <Modal WrapperComponent={WrapperPopup} onClose={onClose}>
      <InnerPromoCodePopup>
        <Text
          $description
          fontSize={'16px'}
          fontWeight={'600'}
          color={'black'}
          textAlign={'center'}>
          Активировать ваш промокод
        </Text>
        <PromoForm onSubmit={onActivePromo}>
          <Box mt={'15px'} mb={'15px'} width={'100%'}>
            <Controller
              name={'couponCode'}
              control={control}
              rules={{
                required: 'Поле не может быть пустым',
              }}
              render={({field}) => (
                <AuthInput
                  {...field}
                  placeholder={'Введите ваш промокод'}
                  color={'secondary'}
                  $isError={Boolean(formErrors?.couponCode)}
                />
              )}
            />
          </Box>
          <Button type={'submit'} $isDisabled={loading} $fullWidth>
            Активировать
          </Button>
          <Message
            type={'error'}
            isOpen={!!error}
            handleClose={closeErrorMsg}
            text={error?.message || ''}
            margin={'15px 0 0 0'}
          />
          <Message
            type={'success'}
            isOpen={success}
            handleClose={closeSuccessMsg}
            text={'Промокод активирован!'}
            margin={'15px 0 0 0'}
          />
        </PromoForm>
      </InnerPromoCodePopup>
    </Modal>
  );
};
