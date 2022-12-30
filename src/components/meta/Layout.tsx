import styled from '@emotion/styled';
import { AppShell, Container } from '@mantine/core';

import { BREAKPOINT_VALUES } from '~/constants/theme';

import { NavBar } from '../NavBar';
import { Head } from './Head';

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const LayoutContainer = styled(Container)`
  overflow: hidden;
`;

export function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head title={title} />
      <AppShell header={<NavBar />} padding={0}>
        <LayoutContainer maw={BREAKPOINT_VALUES.lg} p={0}>
          {children}
        </LayoutContainer>
      </AppShell>
    </>
  );
}
