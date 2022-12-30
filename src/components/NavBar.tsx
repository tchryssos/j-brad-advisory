import styled from '@emotion/styled';
import { Burger, Button, Flex, Menu } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { useState } from 'react';

import { ABOUT_ROUTE, HOME_ROUTE } from '~/constants/routing';
import { BREAKPOINT_STRINGS, BREAKPOINT_VALUES } from '~/constants/theme';

import { Logo } from './Logo';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const atLeastMd = useMediaQuery(BREAKPOINT_STRINGS.md);

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
        {atLeastMd ? (
          <Flex align="center" gap={40}>
            <Link href={HOME_ROUTE}>Home</Link>
            <Link href={ABOUT_ROUTE}>About</Link>
            <Button>Contact Us</Button>
          </Flex>
        ) : (
          <Menu position="left-start" shadow="md">
            <Menu.Target>
              <Burger
                aria-label="Open Navigation"
                opened={isOpen}
                size={24}
                title="Open Navigation"
                onClick={() => setIsOpen(!isOpen)}
              />
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>
                <Link href={HOME_ROUTE}>Home</Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={ABOUT_ROUTE}>About</Link>
              </Menu.Item>
              <Menu.Item>
                <Button>Contact Us</Button>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        )}
      </Flex>
    </Nav>
  );
}
