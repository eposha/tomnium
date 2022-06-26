import {useEffect, useRef, useState} from 'react';
import type {NextPage} from 'next';
import {useRouter} from 'next/router';
import {
  IRegistrationRequest,
  IRegistrationResponse,
  REGISTRATION,
} from 'src/graph/mutations/auth/register';
import {useMutation} from '@apollo/client';
import {destroyCookie, setCookie} from 'nookies';
import {useRoutes} from 'src/hooks';
import {useForm, SubmitHandler} from 'react-hook-form';
import {HeaderForm} from 'src/components/auth';
import {FormCheckbox} from 'src/UIcomponents';
import GlobalLayoutStyles from 'styles/globalLayoutStyles';

import * as UI from 'styles/auth/common';

import {InnerPhoneInput} from 'styles/payments';
import {PhoneCountrySelect} from '../common/Input/Phone';
import {DNA_TOKEN_FROM_ADMIN} from '@/lib/apolloClient';
import {useBackRoute} from 'src/helpers';

interface IRegisterForm {
  onClose?: () => void;
}

const RegisterForm: NextPage<IRegisterForm> = ({onClose}) => {
  const {handlePushLogin, query} = useRoutes();
  const router = useRouter();

  const {fromMainPage} = query;

  const {backButtonPush} = useBackRoute(fromMainPage ? '/courses' : null);

  // const [validLengthPhoneNumber, setValidLengthPhoneNumber] = useState(0);

  const {
    handleSubmit,
    register,
    formState: {errors},
    watch,
    control,
  } = useForm();

  const password = useRef({});
  password.current = watch('password', '');

  const [registration, {loading, error: responseError}] = useMutation<
    IRegistrationResponse,
    IRegistrationRequest
  >(REGISTRATION);

  const onSubmit: SubmitHandler<IRegistrationRequest> = async (credentials) => {
    try {
      const {data} = await registration({
        variables: credentials,
      });
      if (data?.registration?.token) {
        const isDevRoute =
          process.env.NEXT_PUBLIC_REST_API_URL?.includes('lwi.lab325.com');

        destroyCookie(null, DNA_TOKEN_FROM_ADMIN, {
          path: '/',
          domain: isDevRoute ? 'lwi.lab325.com' : 'womaninsight.com',
        });

        setCookie(null, 'DNA_TOKEN', data?.registration?.token, {path: '/'});
        if (!!onClose) {
          onClose();
          router.replace(router.asPath, undefined, {shallow: true});
          return;
        }
        backButtonPush();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const watchedPhone = watch('phone');
    setPhoneNumber(watchedPhone);
  }, [responseError]);

  const samePhoneError =
    'This phone number is already in use, please enter another one';
  const isSameErrorMassage = responseError?.message === samePhoneError;

  return (
    <UI.LoginWrapper>
      <GlobalLayoutStyles />
      <UI.FormWrapper>
        <HeaderForm />
        <UI.TextWrapper>
          <UI.Text>Регистрация</UI.Text>
          <UI.TextLink>
            <UI.DisabledText>Добро пожаловать на Woman Insight</UI.DisabledText>
          </UI.TextLink>
        </UI.TextWrapper>
        <UI.LoginForm onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          {responseError && (
            <UI.ErrorInfo top={'-20px'} left={'50%'} $transform>
              {responseError.message}
            </UI.ErrorInfo>
          )}
          <UI.InputWrapper>
            <UI.Input
              autoComplete='off'
              placeholder={'Имя фамилия'}
              $isError={errors.fullName}
              {...register('fullName', {
                required: 'Поле не может быть пустым',
              })}
            />
            {errors.fullName && (
              <UI.ErrorInfo>{errors.fullName.message}</UI.ErrorInfo>
            )}
          </UI.InputWrapper>

          <UI.InputWrapper>
            <UI.Input
              autoComplete='off'
              type='email'
              placeholder={'Email'}
              $isError={errors.email}
              {...register('email', {
                required: 'Поле не может быть пустым',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format',
                },
              })}
            />
            {errors.email && (
              <UI.ErrorInfo>{errors.email.message}</UI.ErrorInfo>
            )}
          </UI.InputWrapper>

          <UI.InputWrapper>
            <InnerPhoneInput
              $isError={
                errors.phone || responseError?.message === samePhoneError
              }
              $isRegister>
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
            {(isSameErrorMassage || errors.phone) && (
              <UI.ErrorInfo>
                {errors?.phone?.message ||
                  (phoneNumber === watch('phone') &&
                    'Данный номер уже используется другим пользователем')}
              </UI.ErrorInfo>
            )}
          </UI.InputWrapper>

          <UI.InputWrapper>
            <UI.Input
              autoComplete='off'
              placeholder={'Пароль'}
              type={'password'}
              $isError={errors.password}
              {...register('password', {required: true})}
            />
            {errors.password && (
              <UI.ErrorInfo>Поле не может быть пустым</UI.ErrorInfo>
            )}
          </UI.InputWrapper>

          <UI.InputWrapper>
            <UI.Input
              autoComplete='off'
              placeholder={'Повторите пароль'}
              type={'password'}
              $isError={errors.password_repeat}
              {...register('password_repeat', {
                required: true,
                validate: (value) =>
                  value === password.current || 'Пароли не совпадают',
              })}
            />
            {errors.password_repeat && (
              <UI.ErrorInfo>{errors.password_repeat.message}</UI.ErrorInfo>
            )}
            {errors.password_repeat &&
              errors.password_repeat.type === 'required' && (
                <UI.ErrorInfo>Поле не может быть пустым</UI.ErrorInfo>
              )}
          </UI.InputWrapper>

          <UI.InputWrapper>
            <FormCheckbox
              //@ts-ignore
              errors={errors.policy}
              {...register('policy', {required: true})}
            />
          </UI.InputWrapper>

          <UI.SubmitWrapper>
            <UI.ResetPasswordLink
              type={'button'}
              onClick={() => handlePushLogin(!!onClose)}>
              Уже есть аккаунт?
            </UI.ResetPasswordLink>
            <UI.SubmitButton
              type='submit'
              $isDisabled={loading}
              fontSize='14px'
              width={160}
              height={40}>
              Создать аккаунт
            </UI.SubmitButton>
          </UI.SubmitWrapper>
        </UI.LoginForm>
      </UI.FormWrapper>
    </UI.LoginWrapper>
  );
};

export default RegisterForm;
