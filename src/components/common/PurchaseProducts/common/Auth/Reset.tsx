import {InnerAside, AuthInput, InnerFlexCenter} from 'styles/payments';
import {Box} from 'styles/common';
import * as UI from 'styles/auth/common';
import {Controller} from 'react-hook-form';
import {Spinner} from 'src/UIcomponents';
import {useRouter} from 'next/router';
import {useResetPassword} from '@/graph-hooks/auth/useResetPassword';
import {AuthTypes} from '@/components/common/PurchaseProducts';

interface IProps {
  type?: AuthTypes;
  onBackToAuth: () => void;
}

export const ResetForm: React.FC<IProps> = ({type, onBackToAuth}) => {
  const {asPath} = useRouter();
  const {
    control,
    onSubmit,
    responseError,
    formErrors,
    isSuccess,
    value,
    loading,
  } = useResetPassword(asPath);

  const handleClick = () => {
    if (isSuccess) onBackToAuth();
  };

  return (
    <InnerAside type={type}>
      <UI.TextWrapper>
        <UI.Text>{isSuccess ? 'Проверь почту' : 'Восстанови доступ'}</UI.Text>
        <UI.TextLink>
          {isSuccess ? (
            <UI.DisabledText>
              На твой email отправлено письмо.{' '}
              <span style={{fontWeight: 900}}>{value}</span> Перейди по ссылке в
              письме для изменения пароля
            </UI.DisabledText>
          ) : (
            <UI.DisabledText>
              Введи email адрес, указанный при регистрации
            </UI.DisabledText>
          )}
        </UI.TextLink>
      </UI.TextWrapper>
      <UI.LoginForm onSubmit={onSubmit} autoComplete='off'>
        {responseError && (
          <UI.ErrorInfo top={'-20px'} left={'50%'} $transform>
            {responseError.message}
          </UI.ErrorInfo>
        )}
        {isSuccess ? null : (
          <UI.InputWrapper>
            <Controller
              name={'email'}
              control={control}
              rules={{
                required: 'Поле email не может быть пустым',
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
                  type='email'
                  placeholder={'Email'}
                  $isError={Boolean(formErrors.email)}
                />
              )}
            />

            {formErrors.email && (
              <UI.ErrorInfo>{formErrors.email.message}</UI.ErrorInfo>
            )}
          </UI.InputWrapper>
        )}
        <Box mt={'10px'}>
          <InnerFlexCenter>
            {isSuccess ? (
              <UI.SubmitButton
                fontSize={'14px'}
                width={160}
                type={'button'}
                onClick={handleClick}>
                OK
              </UI.SubmitButton>
            ) : (
              <UI.SubmitButton
                fontSize={'14px'}
                width={160}
                type={'submit'}
                $isDisabled={loading || !value}
                $isDisabledGrey={loading || !value}>
                Продолжить
                {loading && <Spinner />}
              </UI.SubmitButton>
            )}
          </InnerFlexCenter>
        </Box>
      </UI.LoginForm>
    </InnerAside>
  );
};
