import { createTheme } from '@mui/material';

import { BreakpointSize, BreakpointString } from '~/typings/theme';

export const BREAKPOINT_VALUES: Record<BreakpointSize, number> = {
  xs: 0,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1440,
};

export const createBreakpointString = (
  px: number,
  minOrMax: 'min' | 'max'
): BreakpointString => `(${minOrMax}-width: ${px}px)`;

export const BREAKPOINT_STRINGS: Record<BreakpointSize, BreakpointString> = {
  xs: createBreakpointString(BREAKPOINT_VALUES.xs, 'min'),
  sm: createBreakpointString(BREAKPOINT_VALUES.sm, 'min'),
  md: createBreakpointString(BREAKPOINT_VALUES.md, 'min'),
  lg: createBreakpointString(BREAKPOINT_VALUES.lg, 'min'),
  xl: createBreakpointString(BREAKPOINT_VALUES.xl, 'min'),
};

export const MEDIA_QUERY_STRING = '@media only screen and ';

export const getMediaQueryMinWidth = (
  breakpoint: BreakpointSize | number
): string =>
  `${MEDIA_QUERY_STRING}${
    typeof breakpoint === 'number'
      ? createBreakpointString(breakpoint, 'min')
      : BREAKPOINT_STRINGS[breakpoint]
  }`;

export const PROJECT_COLORS = {
  lightBlue: '#E2FEFF',
  blue: '#1D56AB',
  darkBlue: '#120C52',
  orange: '#E8894A',
  red: '#DA402B',
  white: '#FFF',
  black: '#000',
};

const spacing = (factor: number) => `${0.5 * factor}rem`;
const palette = {
  primary: {
    light: PROJECT_COLORS.lightBlue,
    main: PROJECT_COLORS.blue,
    dark: PROJECT_COLORS.darkBlue,
  },
  error: {
    main: PROJECT_COLORS.red,
  },
  warn: {
    main: PROJECT_COLORS.orange,
  },
};

const breakpoints = {
  values: {
    xs: 0,
    sm: BREAKPOINT_VALUES.sm,
    md: BREAKPOINT_VALUES.md,
    lg: BREAKPOINT_VALUES.lg,
    xl: BREAKPOINT_VALUES.xl,
  },
};

const typography = {
  fontFamily: 'Poppins, sans-serif',
};

export const THEME = createTheme({
  spacing,
  palette,
  breakpoints,
  typography,
});

export const CONTAINER_WIDTH = BREAKPOINT_VALUES.xl;
