import {createMedia} from '@artsy/fresnel';

const AppMediaQuery = createMedia({
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1366,
    xxl: 1600,
  },
});

// Make styles for injection into the header of the page
export const mediaStyles = AppMediaQuery.createMediaStyle();

export const {Media, MediaContextProvider} = AppMediaQuery;
