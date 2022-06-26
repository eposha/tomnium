import {FC} from 'react';
import {useRouter} from 'next/router';
import {Media} from 'src/media-styles';
import * as UI from 'styles/unsubscribe/index';

interface ButtonsCrontrollerPropsStype {
  nextStepFunc?: any;
  isWide?: boolean;
  confirmText?: string;
  cancelText?: string;
}

const ButtonsCrontroller: FC<ButtonsCrontrollerPropsStype> = ({
  nextStepFunc,
  isWide,
  confirmText,
  children,
}) => {
  const router = useRouter();

  return (
    <UI.ButtonsWrapper isWide={isWide}>
      {children}
      <UI.ActionButton onClick={nextStepFunc} $isDanger>
        <Media at='xs'>Отмена подписки</Media>
        <Media greaterThan='xs'>Продолжить отмену</Media>
      </UI.ActionButton>
      <UI.ActionButton onClick={() => router.push('/user/purchases')}>
        <Media at='xs'>Cохранить доступ</Media>
        <Media greaterThan='xs'>{confirmText || 'Cохранить подписку'}</Media>
      </UI.ActionButton>
    </UI.ButtonsWrapper>
  );
};

export default ButtonsCrontroller;
