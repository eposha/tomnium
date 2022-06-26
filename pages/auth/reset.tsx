import {useState, useRef, ReactElement} from 'react';
import type {NextPage} from 'next';
import {
  IResetPasswordRequest,
  RESET_PASSWORD,
} from 'src/graph/mutations/auth/reset';
import {useMutation} from '@apollo/client';
import {HeaderForm} from 'src/components/auth';
import {Spinner} from 'src/UIcomponents';
import GlobalLayoutStyles from 'styles/globalLayoutStyles';

import {useForm, SubmitHandler} from 'react-hook-form';
import * as UI from 'styles/auth/common';
import {useRouter} from 'next/router';
import {useBackRoute} from 'src/helpers';

const ResetPassword: NextPage = () => {
  const {
    query: {fromMainPage},
  } = useRouter();

  const {backButtonPush} = useBackRoute(fromMainPage ? '/courses' : null);

  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const [resetPassword, {loading, error: responseError}] =
    useMutation<IResetPasswordRequest>(RESET_PASSWORD, {
      onCompleted() {
        setIsSuccess(true);
      },
    });

  const email = useRef({});
  email.current = watch('email', '');

  const onSubmit: SubmitHandler<IResetPasswordRequest> = async (email) => {
    try {
      await resetPassword({
        variables: email,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UI.LoginWrapper>
      <GlobalLayoutStyles />
      <UI.FormWrapper>
        <HeaderForm
          routePath={
            fromMainPage ? '/auth/login?fromMainPage=true' : '/auth/login'
          }
          isReplace
        />
        <UI.TextWrapper>
          <UI.Text>{isSuccess ? 'Проверь почту' : 'Восстанови доступ'}</UI.Text>
          <UI.TextLink>
            {isSuccess ? (
              <UI.DisabledText>
                На твой email отправлено письмо.{' '}
                <span style={{fontWeight: 900}}>{email.current}</span> Перейди
                по ссылке в письме для изменения пароля
              </UI.DisabledText>
            ) : (
              <UI.DisabledText>
                Введи email адрес, указанный при регистрации
              </UI.DisabledText>
            )}
          </UI.TextLink>
        </UI.TextWrapper>
        <UI.LoginForm onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          {responseError && (
            <UI.ErrorInfo top={'-20px'} left={'50%'} $transform>
              {responseError.message}
            </UI.ErrorInfo>
          )}
          {isSuccess ? null : (
            <UI.InputWrapper>
              <UI.Input
                autoComplete='off'
                type='email'
                placeholder={'Email'}
                $isError={errors.email}
                {...register('email', {
                  required: 'Поле email не может быть пустым',
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
          )}

          <UI.SubmitWrapper>
            <UI.SubmitButton
              type={isSuccess ? 'button' : 'submit'}
              onClick={() => isSuccess && backButtonPush()}
              $isDisabled={loading || !email.current}
              $isDisabledGrey={!email.current}
              $fullWidth>
              {isSuccess ? 'OK' : 'Продолжить'}
              {loading && <Spinner />}
            </UI.SubmitButton>
          </UI.SubmitWrapper>
        </UI.LoginForm>
      </UI.FormWrapper>
    </UI.LoginWrapper>
  );
};

//@ts-ignore
ResetPassword.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default ResetPassword;
