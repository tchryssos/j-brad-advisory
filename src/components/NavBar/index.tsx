import { Box, styled } from '@mui/material';

import { HOME_ROUTE } from '~/constants/routing';
import { CONTAINER_WIDTH } from '~/constants/theme';
import { useGetGutterSize } from '~/logic/hooks/layout';
import { pxToRem } from '~/logic/util/styles';

import { Link } from '../Link';
import { Logo } from '../Logo';
import { BaseMenu } from './BaseMenu';
import { MdMenu } from './MdMenu';

const Nav = styled('nav')`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LogoLink = styled(Link)`
  stroke: none;
  padding: 4px 8px;
  display: inline-flex;
  width: fit-content;
  :hover,
  :active {
    stroke: none;
    fill: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

export function NavBar() {
  const gutterSize = useGetGutterSize();
  return (
    <Nav>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        maxWidth={pxToRem(CONTAINER_WIDTH)}
        px={gutterSize}
        py={2.25}
        width="100%"
      >
        <LogoLink href={HOME_ROUTE} title="J. Bradford Advisory Home">
          <Logo />
        </LogoLink>
        {/* Internally, these use a media query to display none if not right size */}
        <MdMenu />
        <BaseMenu />
      </Box>
    </Nav>
  );
}
