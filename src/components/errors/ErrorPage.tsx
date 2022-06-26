import Link from 'next/link';
import Image from 'next/image';

import {commonColors} from 'styles/_variables';
import {Box} from 'styles/common/Box';
import {Media} from 'src/media-styles';
import dynamic from 'next/dynamic';

import * as UI from 'styles/404';
import {icons} from 'styles/404';
import {FC, useMemo} from 'react';
import {useDirectories} from '@/graph-hooks/directories';
import {filterFooterLinks} from '@/helpers/common';
import {POLICY_SETTING, SETTING} from '@/constants/settings';
import useLocale from 'src/hooks/useLocale';
import {useUser} from '@/graph-hooks/user';

const FooterNavigationMobile = dynamic(
  import('src/components/common/footer-navigation/FooterNavigationMobile'),
);

const HeaderNavigationMobile = dynamic(
  import('src/components/common/header-navigation/HeaderNavigationMobile'),
);

interface ErrorPagePropsType {
  noAccess?: boolean;
}

const ErrorPage: FC<ErrorPagePropsType> = ({noAccess}) => {
  const {directories} = useDirectories();
  const {user} = useUser();
  const locale = useLocale();

  const settingOptions = useMemo(
    () =>
      directories?.Settings &&
      Object.entries(directories?.Settings)
        .filter((setting) => setting[0] !== '__typename')
        .map((setting) => ({name: setting[0], link: setting[1]})),
    [directories?.Settings],
  );

  const policy = filterFooterLinks(settingOptions, POLICY_SETTING);

  return (
    <UI.Layout>
      <Media at={'xs'}>
        <HeaderNavigationMobile user={user}>
          <UI.NavItemsWrapper>
            <UI.NavigationsItemsWrapper active>
              <Image
                src={'/icons/Notification.svg'}
                width={16}
                height={16}
                alt='profile'
              />
            </UI.NavigationsItemsWrapper>
            <UI.NavigationsItemsWrapper>
              <Image
                src={'/icons/ProfilePrimarySVG.svg'}
                width={16}
                height={16}
                alt='profile'
              />
            </UI.NavigationsItemsWrapper>
          </UI.NavItemsWrapper>
        </HeaderNavigationMobile>
      </Media>
      <Media greaterThan={'xs'}>
        <UI.Header>
          <Link href={'/'} passHref>
            <a>
              <Media at={'xs'}>
                <Image
                  src={'/logo/MainLogoSVG.svg'}
                  width={80}
                  height={25}
                  alt={'main logo'}
                  priority
                />
              </Media>
              <Media greaterThan={'xs'}>
                <Image
                  src={'/logo/MainLogoSVG.svg'}
                  width={120}
                  height={36}
                  alt={'main logo'}
                  priority
                />
              </Media>
            </a>
          </Link>
          <UI.Nav>
            <Link href='/support' passHref>
              <UI.Link color={commonColors.blueberry} line={1} weight={700}>
                Помощь
              </UI.Link>
            </Link>
            {!user && (
              <Link href='/auth/login' passHref>
                <UI.Button>Войти</UI.Button>
              </Link>
            )}
          </UI.Nav>
        </UI.Header>
      </Media>
      <UI.Main>
        <Box>
          <UI.Title noAccess={noAccess}>
            {noAccess ? 'Материал недоступен' : 'Ошибка 404'}
          </UI.Title>
          <UI.Subtitle>
            {noAccess
              ? 'Кажется у вас нет доступа к материалам этой страницы'
              : 'Эта страница недоступна'}
          </UI.Subtitle>
          <Media lessThan={'sm'}>
            <UI.PersonInfoWrapper noAccess={noAccess}>
              <UI.PersonInfo noAccess={noAccess}>
                <UI.PhotoWrapperMobile>
                  <Image
                    src={'/founder/DinaKhomitskya.jpg'}
                    width={'100%'}
                    height={'100%'}
                    alt={'founder'}
                  />
                </UI.PhotoWrapperMobile>
                <UI.PersonInfoWrap>
                  <UI.CaptionTitle>Дина Хомицкая</UI.CaptionTitle>
                  <UI.CaptionSubtitle>
                    Руководитель центра поддержки Woman Insight
                  </UI.CaptionSubtitle>
                </UI.PersonInfoWrap>
              </UI.PersonInfo>
            </UI.PersonInfoWrapper>
          </Media>
          {noAccess && (
            <UI.SupportTextWrapper>
              <UI.SupportText>
                <UI.SupportTextInner>
                  Если вы уверены, что у вас должен быть доступ, пожалуйста,
                  обратитесь за помощью в наш{' '}
                  <Link href='#' passHref>
                    <UI.SupportLink>центр поддержки</UI.SupportLink>
                  </Link>
                </UI.SupportTextInner>
                <Media lessThan='sm'>
                  <Link href='#' passHref>
                    <UI.Button mini>Помощь</UI.Button>
                  </Link>
                </Media>
              </UI.SupportText>
            </UI.SupportTextWrapper>
          )}
          <Media at='xs'>
            <UI.Paragraph noAccess={noAccess}>
              Вот несколько полезных ссылок, которые помогут найти вам то, что
              ищете:
            </UI.Paragraph>
          </Media>
          <Media greaterThan='xs'>
            <UI.Paragraph noAccess={noAccess}>
              {noAccess
                ? 'Если вы ранее не приобрели доступ к этому материалу ранее, пожалуйста, перейдите в один из основных разделов платформы и узнайте как это сделать:'
                : 'Вот несколько полезных ссылок, которые помогут помочь вам найти то, что вы ищете:'}
            </UI.Paragraph>
          </Media>

          <UI.UList direction={'row'} $wrap>
            {user && (
              <>
                <UI.ListItem>
                  <Link href='/courses' passHref>
                    <UI.Button>Главная страница</UI.Button>
                  </Link>
                </UI.ListItem>

                <UI.ListItem>
                  <Link href='/support' passHref>
                    <UI.Button>Центр поддержки</UI.Button>
                  </Link>
                </UI.ListItem>
              </>
            )}
            <UI.ListItem>
              <Link href='/courses' passHref>
                <UI.Button>
                  <Media at='xs'>Курсы и обучающие программы</Media>
                  <Media greaterThan='xs'>
                    Каталог курсов и обучающих программ
                  </Media>
                </UI.Button>
              </Link>
            </UI.ListItem>
            {user && (
              <UI.ListItem>
                <Link href='/documents' passHref>
                  <UI.Button>Бесплатный контент</UI.Button>
                </Link>
              </UI.ListItem>
            )}
            <UI.ListItem>
              <Link href='/consultations' passHref>
                <UI.Button>Консультация специалистов</UI.Button>
              </Link>
            </UI.ListItem>
            {!user && (
              <UI.ListItem>
                <UI.Button
                  as='a'
                  href='https://new.womaninsight.club/jwi_form'
                  target='_blanck'>
                  Центр поддержки
                </UI.Button>
              </UI.ListItem>
            )}
          </UI.UList>
        </Box>
        <Media greaterThan={'lg'}>
          <UI.ImagePersonWrapper>
            <Image
              src={'/founder/DinaKhomitskya.jpg'}
              width={400}
              height={450}
              alt={'founder'}
              objectFit='cover'
            />
            <UI.CaptionTitle>Дина Хомицкая</UI.CaptionTitle>
            <UI.CaptionSubtitle>
              Руководитель центра поддержки платформы Woman Insight
            </UI.CaptionSubtitle>
          </UI.ImagePersonWrapper>
        </Media>
      </UI.Main>
      <Media lessThan={'sm'}>
        <FooterNavigationMobile />
      </Media>
      <Media greaterThan={'md'}>
        <UI.Footer>
          <UI.FooterText>Woman insight © 2015-2021</UI.FooterText>
          <UI.UList direction={'row'}>
            {policy?.map(({name, link}) => (
              <UI.ListItem key={SETTING[name as keyof typeof POLICY_SETTING]}>
                <Box>
                  <Link href={link} passHref>
                    <UI.Link fz={10} weight={400} line={1}>
                      {locale.footer?.[name as keyof typeof POLICY_SETTING]}
                    </UI.Link>
                  </Link>
                </Box>
              </UI.ListItem>
            ))}
          </UI.UList>
          <UI.UList direction={'row'}>
            {icons.map((icon) => {
              const Icon = icon.component;
              const link = icon.link;
              return (
                <a
                  href={link}
                  key={icon.component}
                  target='_blank'
                  rel='noreferrer'>
                  <UI.ListItemSvg>
                    <Icon />
                  </UI.ListItemSvg>
                </a>
              );
            })}
          </UI.UList>
          <UI.FooterText>All Rights Reserved</UI.FooterText>
        </UI.Footer>
      </Media>
    </UI.Layout>
  );
};

export default ErrorPage;
