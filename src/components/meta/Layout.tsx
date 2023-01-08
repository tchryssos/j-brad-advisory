import styled from '@emotion/styled';
import { AppShell, Container, Header } from '@mantine/core';

import { NAV_HEIGHTS } from '~/constants/nav';
import { CONTAINER_WIDTH, getMediaQueryMinWidth } from '~/constants/theme';

import { Footer } from '../Footer';
import { NavBar } from '../NavBar';
import { Head } from './Head';

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const AppContainer = styled(AppShell)`
  overflow: hidden;
`;

const LayoutContainer = styled(Container)`
  overflow: hidden;
  ${getMediaQueryMinWidth('xl')} {
    overflow: visible;
  }
`;

const ShadowlessHeader = styled(Header)`
  border: none;
`;

export function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head title={title} />
      <AppContainer
        // https://mantine.dev/core/app-shell/#static-position
        fixed={false}
        footer={<Footer />}
        header={
          // If you notice some weird scrolling with the body / header
          // its probably because NAV_HEIGHTS need to be changed
          <ShadowlessHeader height={{ ...NAV_HEIGHTS }}>
            <NavBar />
          </ShadowlessHeader>
        }
        padding={0}
      >
        <LayoutContainer h="100%" maw={CONTAINER_WIDTH} p={0}>
          {children}
        </LayoutContainer>
      </AppContainer>
    </>
  );
}
