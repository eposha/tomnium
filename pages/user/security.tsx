import {UserLayout} from 'src/components/user';
import {Media} from 'src/media-styles';
import {useRef} from 'react';
import {useMutation} from '@apollo/client';
import {useForm, SubmitHandler} from 'react-hook-form';
import {ErrorInfo} from 'styles/auth/common';
import SecureSVG from 'public/icons/profile/SecureSVG.svg';
import * as UI from 'styles/user/common';

import {
  CHANGE_PASSWORD,
  IChangePasswordRequest,
  IChangePasswordResponse,
} from '@/mutations/auth';

import {setCookie, parseCookies} from 'nookies';
import {useRoutes} from 'src/hooks';
// import LinkButton from '@/components/security/LinkButton';
import UserSideMenuMobile from '@/components/user/UserSideMenuMobile';

const Security = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const {backButtonPush} = useRoutes();

  const password = useRef({});

  password.current = watch('newPassword', '');

  const [changePassword] = useMutation<
    IChangePasswordResponse,
    IChangePasswordRequest
  >(CHANGE_PASSWORD, {
    onCompleted(data) {
      setCookie(null, 'DNA_TOKEN', data?.passwordChange?.token, {path: '/'});
    },
  });

  const {DNA_TOKEN} = parseCookies();

  const onSubmit: SubmitHandler<IChangePasswordRequest> = async (
    credentials,
  ) => {
    if (DNA_TOKEN) {
      try {
        await changePassword({
          variables: credentials,
        });
        backButtonPush();
      } catch (e) {
        console.log(e);
      }
    } else {
      alert('You are not authorized');
    }
  };

  return (
    <UserLayout>
      <UI.PageWrapper>
        <Media at='xs'>
          <UserSideMenuMobile number={1} Icon={SecureSVG} />
        </Media>
        <Media greaterThan='xs'>
          <UI.PageTitle>Безопасность</UI.PageTitle>
        </Media>
        <UI.FormWrapper>
          <UI.SubTxt isSub>Изменить пароль</UI.SubTxt>
          <UI.FormInner autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <UI.InputWrapper>
              <UI.InputLabel>Старый пароль</UI.InputLabel>
              <UI.InputForm
                type='password'
                autoComplete='off'
                $isError={errors.currentPassword}
                {...register('currentPassword', {required: true})}
              />
              {errors.currentPassword && (
                <ErrorInfo>Поле не может быть пустым</ErrorInfo>
              )}
            </UI.InputWrapper>
            <UI.InputWrapper>
              <UI.InputLabel>Новый пароль</UI.InputLabel>
              <UI.InputForm
                autoComplete='off'
                type={'password'}
                $isError={errors.newPassword}
                {...register('newPassword', {required: true})}
              />
              {errors.currentPassword && (
                <ErrorInfo>Поле не может быть пустым</ErrorInfo>
              )}
            </UI.InputWrapper>
            <UI.InputWrapper>
              <UI.InputLabel>Повторите новый пароль</UI.InputLabel>
              <UI.InputForm
                type={'password'}
                $isError={errors.password_repeat}
                {...register('password_repeat', {
                  required: true,
                  validate: (value) =>
                    value === password.current || 'Пароли не совпадают',
                })}
              />
              {errors.password_repeat && (
                <ErrorInfo>
                  {errors.password_repeat.type === 'required'
                    ? 'Поле не может быть пустым'
                    : 'Пароли не совпадают'}
                </ErrorInfo>
              )}
            </UI.InputWrapper>
            <UI.SbmtWrapper>
              <UI.SbmtButton type={'submit'}>Сохранить</UI.SbmtButton>
            </UI.SbmtWrapper>
          </UI.FormInner>
        </UI.FormWrapper>

        {/* <UI.FormWrapper>
          <UI.SubTxt>Подключенные аккаунты</UI.SubTxt>
          <LinkButton
            href='#'
            imgSrc='/icons/FacebookIcon.png'
            text='Подключить Facebook'
          />
          <LinkButton
            href='#'
            imgSrc='/icons/InstagramIcon.png'
            text='Подключить Instagram'
          />
          <LinkButton
            href='#'
            imgSrc='/images/svetlana.png'
            name='Светлана Керимова'
            subdata='youremail@gmail.com'
          />
        </UI.FormWrapper> */}
      </UI.PageWrapper>
    </UserLayout>
  );
};

export default Security;
