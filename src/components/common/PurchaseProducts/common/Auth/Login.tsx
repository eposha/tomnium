import {Box, Button} from 'styles/common';
import {
  InnerAside,
  // SocialIconsInner,
  AuthInput,
  InnerButtons,
} from 'styles/payments';
// import * as UI from 'styles/auth/header';
import {ResetPasswordLink, ErrorInfo} from 'styles/auth/common';
// import Image from 'next/image';
import {useLogin} from '@/graph-hooks/auth/useLogin';
import {Controller} from 'react-hook-form';
import {
  AuthTypes,
  PAYMENT_AUTH_STEPS,
  PrimaryTitle,
} from '@/components/common/PurchaseProducts';

interface IProps {
  type?: AuthTypes;
  changeAuthStep: (titleStep: string) => () => void;
  options: Record<string, any>;
}

export const LoginForm: React.FC<IProps> = ({
  changeAuthStep,
  options,
  type,
}) => {
  const {onSubmit, control, formErrors, responseError, loading} =
    useLogin(options);

  return (
    <InnerAside type={type}>
      <PrimaryTitle />
      {responseError && (
        <ErrorInfo top={'-20px'} left={'50%'} $transform>
          {responseError.message}
        </ErrorInfo>
      )}
      {/* <SocialIconsInner>
        <UI.SocialIcon type={'button'}>
          <Image
            src='/icons/FacebookIcon.png'
            width={20}
            height={20}
            alt={'icon'}
          />
        </UI.SocialIcon>
        <UI.SocialIcon type={'button'}>
          <Image
            src='/icons/InstagramIcon.png'
            width={20}
            height={20}
            alt={'icon'}
          />
        </UI.SocialIcon>
        <UI.SocialIcon type={'button'}>
          <Image
            src='/icons/GoogleIcon.png'
            width={20}
            height={20}
            alt={'icon'}
          />
        </UI.SocialIcon>
      </SocialIconsInner> */}
      <form onSubmit={onSubmit}>
        <Box mb={'15px'} position={'relative'}>
          <Controller
            name={'login'}
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
                placeholder={'Email'}
                color={type}
                type='email'
                $isError={Boolean(formErrors.login)}
              />
            )}
          />
          {formErrors.login && (
            <ErrorInfo>{formErrors.login.message}</ErrorInfo>
          )}
        </Box>
        <Controller
          name={'password'}
          control={control}
          rules={{
            required: true,
          }}
          render={({field}) => (
            <AuthInput
              {...field}
              autoComplete='off'
              placeholder={'Пароль'}
              color={type}
              type='password'
              $isError={Boolean(formErrors.password)}
            />
          )}
        />
        {formErrors.password && (
          <ErrorInfo>{formErrors.password.message}</ErrorInfo>
        )}
        <InnerButtons>
          <Button width={160} type={'submit'} $isDisabled={loading}>
            Войти
          </Button>
          <Button
            type={'button'}
            $solid
            width={160}
            onClick={changeAuthStep(PAYMENT_AUTH_STEPS.register)}
            $isDisabled={loading}>
            Регистрация
          </Button>
          <ResetPasswordLink
            type={'button'}
            color={'jordyBlue'}
            fontSize={'12px'}
            disabled={loading}
            onClick={changeAuthStep(PAYMENT_AUTH_STEPS.reset)}>
            Забыли пароль?
          </ResetPasswordLink>
        </InnerButtons>
      </form>
    </InnerAside>
  );
};
