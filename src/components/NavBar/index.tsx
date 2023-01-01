import styled from '@emotion/styled';
import { Flex } from '@mantine/core';

import { BREAKPOINT_VALUES } from '~/constants/theme';

import { Logo } from '../Logo';
import { BaseMenu } from './BaseMenu';
import { MdMenu } from './MdMenu';

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
        {/* Internally, these use a media query to display none if not right size */}
        <MdMenu />
        <BaseMenu />
      </Flex>
    </Nav>
  );
}