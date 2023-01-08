import { styled } from '@mui/material';
import { Head, Html, Main, NextScript } from 'next/document';

const Body = styled.body`
  overscroll-behavior: none;
`;

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Body>
        <Main />
        <NextScript />
      </Body>
    </Html>
  );
}
