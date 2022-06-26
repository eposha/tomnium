import Image from 'next/image';

import FooterNavList from './FooterNavList';

import Cooperation from './Cooperation';

import GlobalOption from './GlobalOption';

import {FooterNavData, LogoWrapper} from 'styles/footer-navigation';

import {FC} from 'react';
import {filterFooterLinks} from '@/helpers/common';
import {
  ABOUT_SETTING,
  CONTACT_US_SETTING,
  OUR_BRANDS_SETTING,
} from '@/constants/settings';

interface FooterWrapperProps {
  isFooterActive?: boolean;
  footerLinks?: {name: string; link: string}[];
  getFooterLinks?: (links?: {name: string; link: string}[]) => void;
}
const FooterWrapperNav: FC<FooterWrapperProps> = ({
  children,
  isFooterActive,
  footerLinks,
  getFooterLinks,
}) => {
  const about = filterFooterLinks(footerLinks, ABOUT_SETTING);
  const contact = filterFooterLinks(footerLinks, CONTACT_US_SETTING);
  const brands = filterFooterLinks(footerLinks, OUR_BRANDS_SETTING);

  return (
    <FooterNavData isActive={isFooterActive}>
      <LogoWrapper>
        <Image
          src={'/logo/MainLogoWhiteSVG.svg'}
          width={120}
          height={36}
          alt={'main logo'}
          priority
        />
      </LogoWrapper>
      {!!about?.length && <FooterNavList title={'О нас'} footerLinks={about} />}
      {!!contact?.length && (
        <FooterNavList title={'Связаться с нами'} footerLinks={contact} />
      )}
      {!!brands?.length && (
        <FooterNavList title={'Наши бренды'} footerLinks={brands} />
      )}
      <Cooperation footerLinks={footerLinks} />
      <GlobalOption getFooterLinks={getFooterLinks} />
      {children}
    </FooterNavData>
  );
};

export default FooterWrapperNav;
