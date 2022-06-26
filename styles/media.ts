import {generateMedia} from 'styled-media-query';

export const BREAKPOINT_XXS = 375;
export const BREAKPOINT_XS = 480;
export const BREAKPOINT_SM = 576;
export const BREAKPOINT_MD = 768;
export const BREAKPOINT_LG = 992;
export const BREAKPOINT_XL = 1366;
export const BREAKPOINT_XXL = 1600;
export const BREAKPOINT_CONTAINER = 1180;

export const media = generateMedia({
  xxs: `${BREAKPOINT_XXS}px`,
  xs: `${BREAKPOINT_XS}px`,
  sm: `${BREAKPOINT_SM}px`,
  md: `${BREAKPOINT_MD}px`,
  lg: `${BREAKPOINT_LG}px`,
  xl: `${BREAKPOINT_XL}px`,
  xxl: `${BREAKPOINT_XXL}px`,
  container: `${BREAKPOINT_CONTAINER}px`,
});
