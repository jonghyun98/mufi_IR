export const BREAKPOINTS = {
  MOBILE: '320px',
  TABLET: '768px',
  LAPTOP: '1024px',
  DESKTOP: '1440px',
} as const;

export const MEDIA_QUERIES = {
  MOBILE: `@media (min-width: ${BREAKPOINTS.MOBILE})`,
  TABLET: `@media (min-width: ${BREAKPOINTS.TABLET})`,
  LAPTOP: `@media (min-width: ${BREAKPOINTS.LAPTOP})`,
  DESKTOP: `@media (min-width: ${BREAKPOINTS.DESKTOP})`,
} as const; 