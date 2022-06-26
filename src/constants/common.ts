export const DATE_FORMAT = {
  primary: 'dd.MM.yy',
  secondary: 'dd.MM.yy HH:mm',
  tertiary: 'dd MMM HH:mm',
  time: 'HH:mm',
};

export const CURRENCY_CODE = {
  USD: 'USD',
  UAH: 'UAH',
  RUB: 'RUB',
};

export const CURRENCY_ICON_BY_CODE = {
  USD: '$',
  UAH: '₴',
};

export const CURRENCY_ICON_BY_ID = {
  2: '₴',
  3: '$',
};

export const DOCUMENT_TYPE = {
  DOCUMENT_TYPE_ARTICLE: 'Статья',
  DOCUMENT_TYPE_COURSE: 'Курс',
  DOCUMENT_TYPE_EXTERNAL_VIDEO: 'Видео',
  DOCUMENT_TYPE_FILE: 'Файл',
  DOCUMENT_TYPE_LESSON: 'Урок',
  DOCUMENT_TYPE_NEWS: 'Новость',
  DOCUMENT_TYPE_WEBINAR: 'Вебинар',
  DOCUMENT_TYPE_LIVE: 'Live',
};

export const DEFAULT_CURRENCY_ID = 3;

export const DEFAULT_LANGUAGE_CODE = 'ru';

export const FILE_URL = process.env.NEXT_PUBLIC_FILE_URL;

export const DEFAULT_IMAGE = '/images/defaultPicture.png';

export const FAVORITE_TYPE = {
  FAVORITE_TYPE_CONSULTATION: 'Консультации',
  FAVORITE_TYPE_COURSE: 'Курсы',
  FAVORITE_TYPE_DOCUMENT: 'Материалы',
};

export const COURSE_MODE_TYPE = {
  COURSE_PREVIEW_DEFAULT_THREAD: 'default',
  COURSE_PREVIEW_OWN_THREAD: 'own',
};

export const VIDEO_RESOLUTIONS = {
  VIDEO_RESOLUTION_1080: '1080p',
  VIDEO_RESOLUTION_720: '720p',
  VIDEO_RESOLUTION_360: '360p',
};
