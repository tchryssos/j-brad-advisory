import styled from '@emotion/styled';
import { Burger, Button, Menu } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';

import { ABOUT_ROUTE, HOME_ROUTE } from '~/constants/routing';
import { getMediaQueryMinWidth } from '~/constants/theme';

const BaseMenuComponent = styled(Menu)`
  display: block;
  ${getMediaQueryMinWidth('md')} {
    display: none;
  }
`;

export function BaseMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BaseMenuComponent position="left-start" shadow="md">
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
    </BaseMenuComponent>
  );
}
