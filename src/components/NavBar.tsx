import { Button, Flex } from '@mantine/core';
import Link from 'next/link';

import { ABOUT_ROUTE, HOME_ROUTE } from '~/constants/routing';

import { Logo } from './Logo';

export function NavBar() {
  return (
    <nav>
      <Flex align="center" justify="space-between" p={16}>
        <Logo />
        <Flex align="center" gap={40}>
          <Link href={HOME_ROUTE}>Home</Link>
          <Link href={ABOUT_ROUTE}>About</Link>
          <Button>Contact Us</Button>
        </Flex>
      </Flex>
    </nav>
  );
}
