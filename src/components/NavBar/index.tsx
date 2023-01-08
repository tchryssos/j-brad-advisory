import styled from '@emotion/styled';
import { Flex } from '@mantine/core';

import { HOME_ROUTE } from '~/constants/routing';
import { CONTAINER_WIDTH } from '~/constants/theme';
import { useGetGutterSize } from '~/logic/hooks/layout';

import { Link } from '../Link';
import { Logo } from '../Logo';
import { BaseMenu } from './BaseMenu';
import { MdMenu } from './MdMenu';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LogoLink = styled(Link)`
  stroke: none;
  padding: 4px 8px;
  display: inline-flex;
  :hover,
  :active {
    stroke: none;
    fill: ${({ theme }) => theme.colors.gray[0]};
    background-color: ${({ theme }) => theme.colors.purple[8]};
  }
`;

export function NavBar() {
  const gutterSize = useGetGutterSize();
  return (
    <Nav>
      <Flex
        align="center"
        justify="space-between"
        maw={CONTAINER_WIDTH}
        px={gutterSize}
        py={20}
        w="100%"
      >
        <LogoLink href={HOME_ROUTE} title="J. Bradford Advisory Home">
          <Logo />
        </LogoLink>
        {/* Internally, these use a media query to display none if not right size */}
        <MdMenu />
        <BaseMenu />
      </Flex>
    </Nav>
  );
}
