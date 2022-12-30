import { BreakpointSize, BreakpointString } from '~/typings/theme';

export const BREAKPOINT_VALUES: Record<BreakpointSize, number> = {
  xs: 480,
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
