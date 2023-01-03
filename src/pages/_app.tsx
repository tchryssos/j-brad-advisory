import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';

import { BREAKPOINT_VALUES, CUSTOM_THEME_COLORS } from '~/constants/theme';

function Page({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        colors: CUSTOM_THEME_COLORS,
        fontFamily: 'Poppins, sans-serif',
        breakpoints: {
          xs: BREAKPOINT_VALUES.xs,
          sm: BREAKPOINT_VALUES.sm,
          md: BREAKPOINT_VALUES.md,
          lg: BREAKPOINT_VALUES.lg,
          xl: BREAKPOINT_VALUES.xl,
        },
        headings: { fontFamily: 'Poppins, sans-serif' },
        components: {
          Text: {
            defaultProps: {
              component: 'p',
              p: 0,
              m: 0,
            },
          },
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default Page;
