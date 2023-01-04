import { DefaultMantineColor } from '@mantine/core';

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

type MantineSwatch = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

export const CUSTOM_THEME_COLORS: Partial<
  Record<DefaultMantineColor, MantineSwatch>
> = {
  green: [
    '#EEF7ED',
    '#D0E9CD',
    '#B1DBAD',
    '#93CD8D',
    '#74BF6D',
    '#56B14E',
    '#458E3E',
    '#336A2F',
    '#22471F',
    '#112310',
  ],
  yellow: [
    '#FEF8E7',
    '#FCEDBB',
    '#FAE18F',
    '#F8D563',
    '#F6C937',
    '#F4BD0B',
    '#C39709',
    '#927207',
    '#624C04',
    '#312602',
  ],
  red: [
    '#ffe8e4',
    '#f9c2bb',
    '#ee9c91',
    '#e57566',
    // red.4 is close to "red"
    '#dd4f3c',
    '#c33522',
    '#99291a',
    '#6e1c12',
    '#440f07',
    '#1e0200',
  ],
  blue: [
    '#e3f1ff',
    '#bbd3f8',
    '#91b6ee',
    '#6699e5',
    '#3d7cdd',
    '#2463c3',
    // blue.6 is close to "blue"
    '#1a4d99',
    '#0f376e',
    '#052144',
    '#000b1c',
  ],
  purple: [
    '#eae9ff',
    '#c1bcf5',
    '#9890ed',
    '#7064e5',
    '#4838de',
    '#301fc4',
    '#251899',
    '#1a116d',
    // purple.8 is close to "darkBlue"
    '#0f0a43',
    '#050219',
  ],
  orange: [
    '#ffeede',
    '#fad2b6',
    '#f3b48c',
    '#ec9860',
    // orange.4 is close to "orange"
    '#e57a33',
    '#cc611a',
    '#9f4b13',
    '#72350b',
    '#461f03',
    '#1e0800',
  ],
  teal: [
    '#EFF6F5',
    '#D2E5E4',
    '#B4D4D3',
    '#97C4C2',
    '#7AB3B0',
    '#5DA29F',
    '#4A827F',
    '#38615F',
    '#254140',
    '#132020',
  ],
  cyan: [
    // cyan.0 is "lightBlue"
    '#e5feff',
    '#bcfbfd',
    '#91f9fc',
    '#6cf7fc',
    '#56f4fb',
    '#4bdce2',
    '#3aaab0',
    '#29797d',
    '#15494b',
    '#00191a',
  ],
  pink: [
    '#FFE5F2',
    '#FFB8D9',
    '#FF8AC1',
    '#FF5CA9',
    '#FF2E90',
    '#FF0078',
    '#CC0060',
    '#990048',
    '#660030',
    '#330018',
  ],
};

export const PROJECT_COLORS = {
  lightBlue: '#E2FEFF',
  blue: '#1D56AB',
  darkBlue: '#120C52',
  orange: '#E8894A',
  red: '#DA402B',
  white: '#FFF',
  black: '#000',
};

export const CONTAINER_WIDTH = BREAKPOINT_VALUES.xl;
