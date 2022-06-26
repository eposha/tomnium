import {useEffect, useState} from 'react';
import {
  InnerAside,
  AuthInput,
  InnerAuthInput,
  EyeSvg,
  EyeSlashSvg,
  ShowPswdButton,
  PswdInput,
} from 'styles/payments';
import {Button, Text, Box} from 'styles/common';
import * as UI from 'styles/auth/common';
import {useRegister} from '@/graph-hooks/auth/useRegister';
import {Controller} from 'react-hook-form';
import {AuthTypes, PolicyCheckbox} from '@/components/common/PurchaseProducts';
import {InnerPhoneInput} from 'styles/payments';
import {PhoneCountrySelect} from '@/components/common/Input/Phone';

interface IProps {
  type?: AuthTypes;
  options: Record<string, any>;
}

export const RegisterForm: React.FC<IProps> = ({options, type}) => {
  const [isShowPswd, setIsShowPswd] = useState(true);
  const {control, onSubmit, loading, formErrors, responseError, watch} =
    useRegister(options);

  const changeIsShowPswd = () => {
    setIsShowPswd((prev) => !prev);
  };

  const [phoneNumber, setPhoneNumber] = useState('');
  // const [validLengthPhoneNumber, setValidLengthPhoneNumber] = useState(0);

  useEffect(() => {
    const watchedPhone = watch('phone');
    setPhoneNumber(watchedPhone);
  }, [responseError]);

  const samePhoneError =
    'This phone number is already in use, please enter another one';
  const isSameErrorMassage = responseError?.message === samePhoneError;

  return (
    <InnerAside type={type}>
      <Box mb={'15px'}>
        <Text fontWeight={'600'} $description color={'black'} fontSize={'18px'}>
          Данные для регистрации
        </Text>
      </Box>
      <UI.LoginForm onSubmit={onSubmit} autoComplete='off'>
        {responseError && (
          <UI.ErrorInfo top={'-20px'} left={'50%'} $transform>
            {responseError.message}
          </UI.ErrorInfo>
        )}
        <UI.InputWrapper>
          <Text margin={'0 0 5px 0'}>Ваше имя</Text>

          <Controller
            name={'fullName'}
            control={control}
            rules={{
              required: 'Поле не может быть пустым',
            }}
            render={({field}) => (
              <AuthInput
                {...field}
                color={type}
                autoComplete='off'
                placeholder={'Имя фамилия'}
                $isError={Boolean(formErrors.fullName)}
              />
            )}
          />
          {formErrors.fullName && (
            <UI.ErrorInfo>{formErrors.fullName.message}</UI.ErrorInfo>
          )}
        </UI.InputWrapper>
        <UI.InputWrapper>
          <InnerPhoneInput
            $isError={
              !!formErrors.phone || responseError?.message === samePhoneError
            }>
            <PhoneCountrySelect
              name={'phone'}
              control={control}
              placeholder={'Номер телефона'}
              // setValidLengthPhoneNumber={setValidLengthPhoneNumber}
              isRegister
              rules={{
                required: 'Поле не может быть пустым',
                minLength: {
                  message: 'Не корректный формат',
                  value: 6,
                },
              }}
            />
          </InnerPhoneInput>
          {(isSameErrorMassage || formErrors.phone) && (
            <UI.ErrorInfo>
              {formErrors?.phone?.message ||
                (phoneNumber === watch('phone') &&
                  'Данный номер уже используется другим пользователем')}
            </UI.ErrorInfo>
          )}
        </UI.InputWrapper>

        <UI.InputWrapper>
          <Text margin={'0 0 5px 0'}>Электронная почта</Text>
          <Controller
            name={'email'}
            control={control}
            rules={{
              required: 'Поле не может быть пустым',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            }}
            render={({field}) => (
              <AuthInput
                {...field}
                autoComplete='off'
                color={type}
                placeholder={'Email'}
                type='email'
                $isError={Boolean(formErrors.email)}
              />
            )}
          />
          {formErrors.email && (
            <UI.ErrorInfo>{formErrors.email.message}</UI.ErrorInfo>
          )}
        </UI.InputWrapper>

        <UI.InputWrapper>
          <Text margin={'0 0 5px 0'}>Придумайте пароль</Text>
          <Controller
            name={'password'}
            control={control}
            rules={{
              required: true,
            }}
            render={({field}) => (
              <InnerAuthInput>
                <PswdInput
                  {...field}
                  autoComplete='off'
                  placeholder={'Пароль'}
                  color={type}
                  type={isShowPswd ? 'text' : 'password'}
                  $isError={Boolean(formErrors.password)}
                />
                <ShowPswdButton onClick={changeIsShowPswd} type={'button'}>
                  {isShowPswd ? <EyeSlashSvg /> : <EyeSvg />}
                </ShowPswdButton>
              </InnerAuthInput>
            )}
          />
          {formErrors.password && (
            <UI.ErrorInfo>Поле не может быть пустым</UI.ErrorInfo>
          )}
        </UI.InputWrapper>

        <PolicyCheckbox control={control} errors={formErrors.policy} />

        <Box mr={'auto'} ml={'auto'}>
          <Button
            type='submit'
            fontWeight={500}
            $isDisabled={loading}
            width={160}>
            Регистрация
          </Button>
        </Box>
      </UI.LoginForm>
    </InnerAside>
  );
};
