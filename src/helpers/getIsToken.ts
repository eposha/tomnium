import {parseCookies} from 'nookies';

export const getIsToken = () => {
  return Boolean(parseCookies()?.DNA_TOKEN);
};

export const getToken = () => parseCookies()?.DNA_TOKEN;
