import {DEFAULT_IMAGE, FILE_URL} from '@/constants/common';

export const getImgSrc = (path?: string) =>
  path ? FILE_URL + path : DEFAULT_IMAGE;
