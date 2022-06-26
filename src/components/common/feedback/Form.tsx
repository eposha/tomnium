import {PhoneCountrySelect} from '@/components/common/Input/Phone';
import {useUser} from '@/graph-hooks/user';
import {FC, FormEvent} from 'react';
import {useSendHelpForm} from 'src/hooks/help-form/useSendHelpForm';
import {Button, Text} from 'styles/common';
import * as UI from 'styles/feedback/form';
import {useModal} from 'src/hooks/useModal';
import NotificationPopup from '@/components/common/popup/NotificationPopup';
import {useDirectories} from '@/graph-hooks/directories';

interface IFeedbackForm {
  tariffId: number;
  title: string;
}

const FeedbackForm: FC<IFeedbackForm> = ({tariffId, title}) => {
  const {user} = useUser();
  const {directories} = useDirectories();
  const {privacyPolicy, publicOffer} = directories?.Settings || {};

  const {isOpen, onOpen, onClose} = useModal();

  const {handleSubmit, validateErrors, register, control, loading} =
    useSendHelpForm({
      user,
      tariffId,
      title,
      onOpen,
    });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit();
  };

  return (
    <UI.Wrapper>
      <UI.ContentText>
        <UI.Title>Получите бесплатную консультацию</UI.Title>
        <UI.Description>
          Мы свяжемся с вами и ответим на любые возникшие вопросы
        </UI.Description>
      </UI.ContentText>
      <UI.Form
        autoComplete='off'
        onSubmit={(e) => {
          onSubmit(e);
        }}>
        <UI.InputWrapper>
          <UI.Input
            type='text'
            placeholder='Имя'
            $isError={!!validateErrors.fullName}
            {...register('fullName', {required: 'Full name required'})}
          />

          {!!validateErrors?.fullName && (
            <UI.ErrorText>{validateErrors?.fullName?.message}</UI.ErrorText>
          )}
        </UI.InputWrapper>

        <UI.InputWrapper>
          <PhoneCountrySelect
            name='phone'
            control={control}
            $isError={!!validateErrors.phone}
            rules={{
              required: 'Поле не может быть пустым',
              minLength: {
                message: 'Не корректный формат',
                value: 6,
              },
            }}
          />
          {!!validateErrors?.phone && (
            <UI.ErrorText left={53}>
              {validateErrors?.phone?.message}
            </UI.ErrorText>
          )}
        </UI.InputWrapper>

        <UI.InputWrapper>
          <UI.Input
            type='text'
            placeholder='Почта'
            $isError={!!validateErrors.email}
            {...register('email', {
              required: 'Email required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            })}
          />

          {!!validateErrors?.email && (
            <UI.ErrorText>{validateErrors?.email?.message}</UI.ErrorText>
          )}
        </UI.InputWrapper>

        <UI.ButtonsContainer>
          {/* <Button $solid $fullWidth>
            Служба поддержки
          </Button> */}
          <Button type='submit' $fullWidth $isDisabled={loading}>
            {loading ? 'Отправка...' : 'Отправить'}
          </Button>
        </UI.ButtonsContainer>
        <Text fontSize='8px'>
          Нажимая на кнопку, я соглашаюсь с условиями{' '}
          <UI.Link href={publicOffer ?? ''} target='_blank'>
            публичной оферты
          </UI.Link>{' '}
          и{' '}
          <UI.Link href={privacyPolicy ?? ''} target='_blank'>
            политикой конфиденциальности
          </UI.Link>
        </Text>
      </UI.Form>
      <NotificationPopup
        description='Ваш запрос отправлен'
        onPopupClose={onClose}
        open={isOpen}
      />
    </UI.Wrapper>
  );
};

export default FeedbackForm;
