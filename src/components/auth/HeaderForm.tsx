import {FC} from 'react';
import Image from 'next/image';
import CloseFormButton from './CloseFormButton';
// import Socials from './Socials';

interface IHeaderForm {
  routePath?: string;
  isReplace?: boolean;
}

const HeaderForm: FC<IHeaderForm> = ({routePath, isReplace}) => (
  <>
    <CloseFormButton />
    {routePath ? (
      <CloseFormButton routePath={routePath} isReplace={isReplace} />
    ) : null}
    <Image
      src={'/logo/MainLogoSVG.svg'}
      width={120}
      height={36}
      alt={'main logo'}
      priority
    />
    {/* {routePath ? null : <Socials />} */}
  </>
);

export default HeaderForm;
