import {FC, useEffect, useState} from 'react';

import Image from 'next/image';

import Policy from './Policy';

import {parseCookies, setCookie} from 'nookies';

import {
  FooterNavWrapper,
  FooterToggler,
  ArrowWrapper,
} from 'styles/footer-navigation';

import FooterWrapperNav from './FooterWrapperNav';

import dynamic from 'next/dynamic';
const GlobalLayoutStyles = dynamic(import('styles/globalLayoutStyles'));

interface IFooterNavigation {
  isTildaPage?: boolean;
}

const FooterNavigation: FC<IFooterNavigation> = ({isTildaPage}: any) => {
  const cookies = parseCookies();

  const [activeFooter, setActiveFooter] = useState(false);
  const [links, setLinks] = useState<
    {name: string; link: string}[] | undefined
  >();

  const getFooterLinks = (links?: {name: string; link: string}[]) =>
    setLinks(links);

  useEffect(() => {
    switch (cookies['footer-state']) {
      case 'true':
        setActiveFooter(true);
        break;
      case 'false':
        setActiveFooter(false);
        break;
      default:
        setActiveFooter(false);
        break;
    }
  }, [cookies]);

  const footerToggler = () => {
    setActiveFooter(!activeFooter);
    setCookie(null, 'footer-state', !activeFooter + '');
  };

  return (
    <>
      {isTildaPage && <GlobalLayoutStyles />}
      <FooterNavWrapper $isTildaPage={isTildaPage} isActive={activeFooter}>
        <FooterWrapperNav
          isFooterActive={activeFooter}
          getFooterLinks={getFooterLinks}
          footerLinks={links}>
          <FooterToggler onClick={footerToggler}>
            <ArrowWrapper isRotate={activeFooter}>
              <Image
                src='/icons/ArrowUp.svg'
                width='100%'
                height='100%'
                alt='icon'
              />
            </ArrowWrapper>
          </FooterToggler>
        </FooterWrapperNav>
        <Policy footerLinks={links} />
      </FooterNavWrapper>
    </>
  );
};

export default FooterNavigation;
