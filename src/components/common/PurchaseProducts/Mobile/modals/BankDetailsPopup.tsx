import {Modal} from '@/components/common/PurchaseProducts';
import {
  AuthInput,
  InnerPromoCodePopup,
  PromoForm,
  WrapperPopup,
} from 'styles/payments';
import {Text, Box, Button} from 'styles/common';
import {Message} from '@/components/common/message';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BankDetailsPopup: React.FC<IProps> = ({isOpen, onClose}) => {
  if (!isOpen) return null;

  const onSubmit = () => {
    //todo
  };

  return (
    <Modal WrapperComponent={WrapperPopup} onClose={onClose}>
      <InnerPromoCodePopup>
        <Text
          $description
          fontSize={'16px'}
          fontWeight={'600'}
          color={'black'}
          textAlign={'center'}>
          Отправить реквизиты на E-mail
        </Text>
        <PromoForm onSubmit={onSubmit}>
          <Box mt={'15px'} mb={'15px'} width={'100%'}>
            {/*<Controller*/}
            {/*  name={'email'}*/}
            {/*  control={control} */}
            {/*  rules={{*/}
            {/*    pattern: {*/}
            {/*      value: /\S+@\S+\.\S+/,*/}
            {/*      message: 'Entered value does not match email format',*/}
            {/*    },*/}
            {/*  }}*/}
            {/*  render={({field}) => (*/}
            <AuthInput
              //{...field}
              autoComplete='off'
              type={'email'}
              placeholder={'Введите ваш E-mail'}
              color={'secondary'}
              // $isError={} ||todo
            />
            {/*)}*/}
            {/*/>*/}
          </Box>
          <Button type={'submit'} $fullWidth>
            Отправить
          </Button>
          <Message
            type={'error'}
            isOpen={false}
            handleClose={() => console.log()}
            text={''}
            margin={'15px 0 0 0'}
          />
          <Message
            type={'success'}
            isOpen={false}
            handleClose={() => console.log()}
            text={'Реквизиты отправлены на email!'}
            margin={'15px 0 0 0'}
          />
        </PromoForm>
      </InnerPromoCodePopup>
    </Modal>
  );
};
