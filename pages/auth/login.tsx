import type {NextPage} from 'next';
import {ReactElement, useState} from 'react';

import {setCookie, destroyCookie} from 'nookies';
import {useRoutes} from 'src/hooks';
import {HeaderForm} from 'src/components/auth';

import GlobalLayoutStyles from 'styles/globalLayoutStyles';

import {useForm, SubmitHandler} from 'react-hook-form';

import axios from 'axios';
import {useBackRoute} from 'src/helpers';
import {DNA_TOKEN_FROM_ADMIN} from '@/lib/apolloClient';

import * as UI from 'styles/auth/common';

interface ILoginRequest {
  login?: string;
  password?: string;
}

const Login: NextPage = () => {
  const [isPasswordType, setIsPasswordType] = useState(true);

  const inputType = isPasswordType ? 'password' : 'text';

  const onWatchPasswordClickHandler = () => setIsPasswordType((prev) => !prev);

  const {handlePushRegister, handlePushReset, query} = useRoutes();

  const {fromMainPage} = query;

  const {backButtonPush} = useBackRoute(fromMainPage ? '/courses' : null);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [responseError, setResponseError] = useState('');

  const onSubmit: SubmitHandler<ILoginRequest> = async (credentials) => {
    try {
      setLoading(true);
      const {data} = await axios.post(
        process.env.NEXT_PUBLIC_REST_API_URL + '/auth/login',
        credentials,
      );
      setLoading(false);
      if (data?.token) {
        const isDevRoute =
          process.env.NEXT_PUBLIC_REST_API_URL?.includes('lwi.lab325.com');

        destroyCookie(null, DNA_TOKEN_FROM_ADMIN, {
          path: '/',
          domain: isDevRoute ? 'lwi.lab325.com' : 'womaninsight.com',
        });

        setCookie(null, 'DNA_TOKEN', data?.token, {path: '/'});
        backButtonPush();
      }
    } catch (error) {
      setLoading(false);

      if (error instanceof Error) {
        setResponseError(error.message);
      } else {
        setResponseError('Something was wrong. Try again later');
      }
    }
  };

  return (
    <UI.LoginWrapper>
      <GlobalLayoutStyles />
      <UI.FormWrapper>
        <HeaderForm />
        <UI.TextWrapper>
          <UI.Text>Войти</UI.Text>
          <UI.TextLink>
            <UI.DisabledText>или &nbsp;</UI.DisabledText>
            <UI.RouterLink onClick={handlePushRegister}>
              создайте аккаунт
            </UI.RouterLink>
          </UI.TextLink>
        </UI.TextWrapper>
        <UI.LoginForm onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          {responseError && (
            <UI.ErrorInfo top={'-20px'} left={'50%'} $transform>
              {responseError}
            </UI.ErrorInfo>
          )}
          <UI.InputWrapper>
            <UI.Input
              autoComplete='off'
              type='email'
              placeholder={'Email'}
              $isError={errors.login}
              {...register('login', {
                required: 'Поле email не может быть пустым',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format',
                },
              })}
            />
            {errors.login && (
              <UI.ErrorInfo>{errors.login.message}</UI.ErrorInfo>
            )}
          </UI.InputWrapper>
          <UI.InputWrapper>
            <UI.Input
              autoComplete='off'
              type={inputType}
              placeholder={'Password'}
              $isError={errors.password}
              {...register('password', {required: true})}
            />

            {isPasswordType ? (
              <UI.OpenEyeSVG onClick={onWatchPasswordClickHandler} />
            ) : (
              <UI.CloseEyeSVG onClick={onWatchPasswordClickHandler} />
            )}

            {errors.password && (
              <UI.ErrorInfo>Поле password не может быть пустым</UI.ErrorInfo>
            )}
          </UI.InputWrapper>

          <UI.SubmitWrapper>
            <UI.ResetPasswordLink type={'button'} onClick={handlePushReset}>
              Забыли пароль?
            </UI.ResetPasswordLink>

            <UI.SubmitButton
              type='submit'
              $isDisabled={loading}
              fontSize='14px'
              width={160}
              height={40}>
              Войти
            </UI.SubmitButton>
          </UI.SubmitWrapper>
        </UI.LoginForm>
      </UI.FormWrapper>
    </UI.LoginWrapper>
  );
};

//@ts-ignore
Login.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Login;
