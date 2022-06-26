import {FC, useEffect, useMemo} from 'react';
import Image from 'next/image';
import {useCookieSettings} from 'src/hooks';
import {
  MediaIconsWrapper,
  InnerSelects,
  OptionsWrapper,
} from 'styles/footer-navigation';
import {useDirectories} from '@/graph-hooks/directories';
import Select from '@/components/common/Select';

import {getSelectOptions} from '@/helpers/common';

interface GlobalOptionPropsType {
  sidebar?: boolean;
  getFooterLinks?: (links?: {name: string; link: string}[]) => void;
}

const GlobalOption: FC<GlobalOptionPropsType> = ({sidebar, getFooterLinks}) => {
  const {directories} = useDirectories();

  const {
    settings: {languageCode, timezoneCode, currencyId},
    changeSettings,
  } = useCookieSettings();

  const handleChange =
    (cookieName: 'languageCode' | 'currencyId' | 'timezoneCode') =>
    (value: any) => {
      changeSettings(cookieName, value.value);
    };

  const languageOptions = useMemo(
    () => getSelectOptions('nativeName', 'code', directories?.Languages),
    [directories?.Languages],
  );

  const timezoneOptions = useMemo(
    () => getSelectOptions('name', 'tzCode', directories?.Timezones),
    [directories?.Timezones],
  );

  const currencyOptions = useMemo(
    () => getSelectOptions('code', 'id', directories?.Currencies),
    [directories?.Currencies],
  );

  const settingOptions = useMemo(
    () =>
      directories?.Settings &&
      Object.entries(directories?.Settings)
        .filter((setting) => setting[0] !== '__typename')
        .map((setting) => ({name: setting[0], link: setting[1]})),
    [directories?.Settings],
  );

  useEffect(() => {
    getFooterLinks && getFooterLinks(settingOptions);
  }, [directories, settingOptions, getFooterLinks]);

  const languageValue = useMemo(
    () => languageOptions?.find((it) => it.value === languageCode),
    [languageCode, languageOptions],
  );

  const timezoneValue = useMemo(
    () => timezoneOptions?.find((it) => it.value === timezoneCode),
    [timezoneCode, timezoneOptions],
  );

  const currencyValue = useMemo(
    () =>
      currencyOptions?.find((it) => String(it.value) === String(currencyId)),
    [currencyId, currencyOptions],
  );

  const mediaIcons = sidebar ? mediaIconsListSidebar : mediaIconsList;

  return (
    <OptionsWrapper sidebar={sidebar}>
      <InnerSelects sidebar={sidebar}>
        {languageValue && (
          <Select
            options={languageOptions}
            value={languageValue}
            onChange={handleChange('languageCode')}
            sidebar={sidebar}
            mode='dark'
          />
        )}
        {timezoneValue && (
          <Select
            options={timezoneOptions}
            value={timezoneValue}
            onChange={handleChange('timezoneCode')}
            sidebar={sidebar}
            mode='dark'
            isSearchable
          />
        )}
        {currencyValue && (
          <Select
            options={currencyOptions}
            value={currencyValue}
            onChange={handleChange('currencyId')}
            sidebar={sidebar}
            mode='dark'
          />
        )}
      </InnerSelects>

      <MediaIconsWrapper sidebar={sidebar}>
        {mediaIcons.map(({path, link}) => (
          <a href={link} key={path} target='__blank'>
            <Image
              key={path}
              src={path}
              width={13}
              height={15}
              alt={'media icon'}
            />
          </a>
        ))}
      </MediaIconsWrapper>
    </OptionsWrapper>
  );
};

export const mediaIconsList = [
  {
    path: '/icons/TikTokSVG.svg',
    link: 'https://www.tiktok.com/@woman_insight',
  },
  {
    path: '/icons/TelegramSVG.svg',
    link: 'https://t.me/womaninsightBot',
  },
  {
    path: '/icons/FaceBookSVG.svg',
    link: 'https://www.facebook.com/womaninsightclub/',
  },
  {
    path: '/icons/InstaSVG.svg',
    link: 'https://www.instagram.com/woman_insight/',
  },
  {
    path: '/icons/YoutubeSVG.svg',
    link: 'https://www.youtube.com/c/kerymova_WOMANINSIGHT',
  },
];
export const mediaIconsListSidebar = [
  {
    path: '/icons/sidebar/TikTok.svg',
    link: 'https://www.tiktok.com/@woman_insight',
  },
  {
    path: '/icons/sidebar/Telegram.svg',
    link: 'https://t.me/womaninsightBot',
  },
  {
    path: '/icons/sidebar/Facebook.svg',
    link: 'https://www.facebook.com/womaninsightclub/',
  },
  {
    path: '/icons/sidebar/Instagram.svg',
    link: 'https://www.instagram.com/woman_insight/',
  },
  {
    path: '/icons/sidebar/Youtube.svg',
    link: 'https://www.youtube.com/c/kerymova_WOMANINSIGHT',
  },
];

export default GlobalOption;
