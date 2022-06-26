import {useBackRoute} from 'src/helpers';

import {FC} from 'react';
import Image from 'next/image';

import {CloseForm} from 'styles/auth/common';

interface ICloseFormButton {
  routePath?: string;
  isReplace?: boolean;
}

const CloseFormButton: FC<ICloseFormButton> = ({routePath, isReplace}) => {
  const {backButtonPush} = useBackRoute(routePath, isReplace);

  const src = routePath
    ? '/icons/ArrowLeftAuthSVG.svg'
    : '/icons/CloseIconSVG.svg';

  const size = routePath ? 12 : 24;

  return (
    <CloseForm
      type={'button'}
      onClick={backButtonPush}
      $routePath={!!routePath}>
      <Image src={src} width={size} height={size} alt={'icon'} />
    </CloseForm>
  );
};

export default CloseFormButton;
