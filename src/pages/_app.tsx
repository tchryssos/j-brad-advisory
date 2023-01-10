import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

import { THEME } from '~/constants/theme';

function Page({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyles
        styles={{
          body: {
            overscrollBehavior: 'none',
            height: '100%',
          },
          html: {
            height: '100%',
          },
          '#__next': {
            height: '100%',
          },
        }}
      />
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default Page;
