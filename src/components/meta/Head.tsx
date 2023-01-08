/* eslint-disable @next/next/google-font-preconnect */
import NextHead from 'next/head';

type HeadProps = {
  title?: string;
};

export function Head({ title = 'J. Bradford Advisory' }: HeadProps) {
  return (
    <NextHead>
      <link
        crossOrigin="use-credentials"
        href="https://fonts.gstatic.com"
        rel="preconnect"
      />
      <link href="https://fonts.gstatic.com/" rel="dns-prefetch" />
      <title>{title}</title>
      <meta charSet="utf-16" />
      <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      <meta
        content="J. Bradford Advisory Official Website"
        name="description"
      />
    </NextHead>
  );
}
