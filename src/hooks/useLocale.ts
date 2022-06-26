import {useRouter} from 'next/router';
import {en} from 'locales/en';
import {uk} from 'locales/uk';
import {ru} from 'locales/ru';

type TLocale = 'en' | 'uk' | 'ru';

interface ILocale {
  en: typeof en;
  uk: typeof uk;
  ru: typeof ru;
}

const tLocale: ILocale = {
  en: en,
  uk: uk,
  ru: ru,
};

const useLocale = () => {
  const {locale} = useRouter();

  if (locale) {
    return tLocale[locale as TLocale] || tLocale.ru;
  }

  return tLocale.ru;
};

export default useLocale;
