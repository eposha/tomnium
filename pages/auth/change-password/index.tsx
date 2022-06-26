import {ReactElement} from 'react';
import type {NextPage} from 'next';
import {useMutation} from '@apollo/client';
import {Spinner} from 'src/UIcomponents';
import {useForm, SubmitHandler} from 'react-hook-form';
import * as UI from 'styles/auth/common';
import {useRouter} from 'next/router';
import {
  FORGOT_PASSWORD,
  IForgotPasswordRequest,
  IForgotPasswordResponse,
} from '@/mutations/auth';
import {setCookie, destroyCookie} from 'nookies';
import {DNA_TOKEN_FROM_ADMIN} from '@/lib/apolloClient';

const ChangePassword: NextPage = () => {
  const router = useRouter();
  const {forgotToken} = router.query;

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [changePassword, {loading, error: responseError}] = useMutation<
    IForgotPasswordResponse,
    IForgotPasswordRequest
  >(FORGOT_PASSWORD, {
    onCompleted(data) {
      const isDevRoute =
        process.env.NEXT_PUBLIC_REST_API_URL?.includes('lwi.lab325.com');

      destroyCookie(null, DNA_TOKEN_FROM_ADMIN, {
        path: '/',
        domain: isDevRoute ? 'lwi.lab325.com' : 'womaninsight.com',
      });

      setCookie(
        null,
        'DNA_TOKEN',
        data?.passwordForgotConfirm?.token as string,
        {
          path: '/',
        },
      );
      router.push('/courses');
    },
  });

  const onSubmit: SubmitHandler<IForgotPasswordRequest> = async ({
    newPassword,
  }) => {
    if (!forgotToken) return;
    try {
      await changePassword({
        variables: {forgotToken: forgotToken as string, newPassword},
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UI.LoginWrapper>
      <UI.FormWrapper>
        <UI.TextWrapper>
          <UI.Text>Введите новый пароль</UI.Text>
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
              type={'password'}
              placeholder={'New password'}
              $isError={errors.newPassword}
              {...register('newPassword', {required: true})}
            />
            {errors.newPassword && (
              <UI.ErrorInfo>
                Поле New password не может быть пустым
              </UI.ErrorInfo>
            )}
          </UI.InputWrapper>
          <UI.SubmitWrapper>
            <UI.SubmitButton
              type={'submit'}
              $isDisabled={loading}
              $isDisabledGrey={loading}
              $fullWidth>
              Изменить
              {loading && <Spinner />}
            </UI.SubmitButton>
          </UI.SubmitWrapper>
        </UI.LoginForm>
      </UI.FormWrapper>
    </UI.LoginWrapper>
  );
};

//@ts-ignore
ChangePassword.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default ChangePassword;
