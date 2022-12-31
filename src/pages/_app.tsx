import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import { useState } from 'react';

import { BREAKPOINT_VALUES, CUSTOM_THEME_COLORS } from '~/constants/theme';
import { ColorScheme } from '~/typings/theme';

function Page({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          colors: CUSTOM_THEME_COLORS,
          breakpoints: {
            xs: BREAKPOINT_VALUES.xs,
            sm: BREAKPOINT_VALUES.sm,
            md: BREAKPOINT_VALUES.md,
            lg: BREAKPOINT_VALUES.lg,
            xl: BREAKPOINT_VALUES.xl,
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default Page;
