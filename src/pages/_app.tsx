import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

import { THEME } from '~/constants/theme';

function Page({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={THEME}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default Page;
