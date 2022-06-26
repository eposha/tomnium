import {useUser} from '@/graph-hooks/user';
import {useEffect, useState} from 'react';
import {setCookie, parseCookies} from 'nookies';
import {DEFAULT_CURRENCY_ID, DEFAULT_LANGUAGE_CODE} from '@/constants/common';
import {useDirectories} from '@/graph-hooks/directories';
import {useRouter} from 'next/router';
import {addYears} from 'date-fns';
import {useProfileUpdate} from '@/graph-hooks/user/useProfileUpdate';
import {ICookiesProps} from '../types';

const handleSetCookie = (
  cookieName: 'languageCode' | 'currencyId' | 'timezoneCode',
  cookieValue: string,
  expiresDateCookies: Date,
) => {
  setCookie(null, cookieName, cookieValue, {
    path: '/',
    expires: expiresDateCookies,
  });
};

const graphFields = {
  languageCode: 'primaryLanguageId',
  currencyId: 'currencyId',
  timezoneCode: 'timezone',
};

const getExpiresDate = () => addYears(new Date(), 1);
const BROWSER_TIMEZONE = Intl.DateTimeFormat().resolvedOptions().timeZone || '';

export const useCookieSettings = () => {
  const router = useRouter();
  const {user} = useUser();
  const {directories} = useDirectories();
  const {pathname, asPath, query, locale} = router;
  const cookies = parseCookies();
  const [settings, setSettings] = useState<ICookiesProps>({
    languageCode: DEFAULT_LANGUAGE_CODE,
    timezoneCode: BROWSER_TIMEZONE,
    currencyId: DEFAULT_CURRENCY_ID,
  });
  const {changeProfile, loading} = useProfileUpdate();

  useEffect(() => {
    if (cookies) {
      setSettings({
        languageCode: cookies.languageCode,
        timezoneCode: cookies.timezoneCode,
        currencyId: cookies.currencyId,
      });
    }
  }, []);

  useEffect(() => {
    const defaultLang =
      directories?.Languages?.[0]?.code || DEFAULT_LANGUAGE_CODE;
    const userLang = user?.Language?.code;

    const lang = !user ? locale : userLang;
    const value = lang || defaultLang;

    handleSetCookie('languageCode', value, getExpiresDate());

    setSettings((prev) => ({
      ...prev,
      languageCode: value,
    }));
  }, [directories?.Languages, user]);

  useEffect(() => {
    const currency = user?.Currency?.id || DEFAULT_CURRENCY_ID;
    handleSetCookie('currencyId', String(currency), getExpiresDate());

    const timezone = user?.Timezone?.tzCode || BROWSER_TIMEZONE;
    handleSetCookie('timezoneCode', timezone, getExpiresDate());

    setSettings((prev) => ({
      ...prev,
      timezoneCode: timezone,
      currencyId: currency,
    }));
  }, [user]);

  const changeSettings = async (
    cookieName: 'languageCode' | 'currencyId' | 'timezoneCode',
    cookieValue: any,
  ) => {
    if (!cookieName || !cookieValue) return;
    const isLanguageCode = cookieName === 'languageCode';

    const cookieLangCode =
      cookies.languageCode && cookies.languageCode !== 'default'
        ? cookies.languageCode
        : 'ru';

    const locale = !isLanguageCode ? cookieLangCode : cookieValue;

    setSettings((prev) => ({...prev, [cookieName]: cookieValue}));

    if (Boolean(user)) {
      const field = graphFields[cookieName];
      const value =
        cookieName !== 'languageCode'
          ? cookieValue
          : directories?.Languages?.find((it) => it?.code === cookieValue)?.id;

      const res = await changeProfile({[field]: value});

      if (!res && !loading) {
        return setSettings((prev) => ({
          ...prev,
          [cookieName]: cookies[cookieName],
        }));
      }
    }
    handleSetCookie(cookieName, cookieValue, getExpiresDate());
    router.push({pathname, query}, asPath, {locale});
  };

  return {settings, changeSettings};
};
