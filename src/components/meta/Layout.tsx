import { AppShell, Container } from '@mantine/core';

import { BREAKPOINT_VALUES } from '~/constants/theme';

import { NavBar } from '../NavBar';
import { Head } from './Head';

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};
export function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head title={title} />
      <AppShell header={<NavBar />} padding={0}>
        <Container maw={BREAKPOINT_VALUES.lg}>{children}</Container>
      </AppShell>
    </>
  );
}
