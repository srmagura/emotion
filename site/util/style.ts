export const colors = {
  body: '#212529',
  pink: '#D26AC2',
  hightlight: '#C43BAD',
  pinkBorder: '#eac3e4',
  grayBorder: '#d2d2d2',
  pinkBg: '#FBF8FD',
  hotPink: '#c865b9'
}

const breakpoints = { sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 }

export const mediaQueries = {
  smUp: `@media (min-width: ${breakpoints.sm}px)`,
  mdUp: `@media (min-width: ${breakpoints.md}px)`,
  lgUp: `@media (min-width: ${breakpoints.lg}px)`,
  xlUp: `@media (min-width: ${breakpoints.xl}px)`,
  xxlUp: `@media (min-width: ${breakpoints.xxl}px)`
}

export const styleConstants = {
  containerWidth: 1100,

  borderRadius: '0.25rem',

  fontSizeSm: '0.875rem'
}
