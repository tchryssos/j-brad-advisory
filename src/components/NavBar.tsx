import styled from '@emotion/styled';
import { Button, Flex } from '@mantine/core';
import Link from 'next/link';

import { ABOUT_ROUTE, HOME_ROUTE } from '~/constants/routing';
import { BREAKPOINT_VALUES } from '~/constants/theme';

import { Logo } from './Logo';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export function NavBar() {
  return (
    <Nav>
      <Flex
        align="center"
        justify="space-between"
        maw={BREAKPOINT_VALUES.lg}
        p={16}
        w="100%"
      >
        <Logo />
        <Flex align="center" gap={40}>
          <Link href={HOME_ROUTE}>Home</Link>
          <Link href={ABOUT_ROUTE}>About</Link>
          <Button>Contact Us</Button>
        </Flex>
      </Flex>
    </Nav>
  );
}
