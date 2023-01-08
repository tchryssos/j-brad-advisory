import { Flex, Grid, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { styled } from '@mui/material';

import { EMAIL_LINK } from '~/constants/links';
import {
  BREAKPOINT_STRINGS,
  CONTAINER_WIDTH,
  getMediaQueryMinWidth,
} from '~/constants/theme';
import { useGetGutterSize } from '~/logic/hooks/layout';

import { Link } from './Link';
import { Logo } from './Logo';

const FooterWrapper = styled(Grid)`
  color: ${({ theme }) => theme.palette.gray[0]};
  fill: ${({ theme }) => theme.palette.gray[0]};
`;

const EmailLink = styled(Link)`
  background-color: ${({ theme }) => theme.palette.red[4]};
  color: ${({ theme }) => theme.palette.gray[0]};
  font-weight: 600;
  padding: 0 0.5rem;
  font-size: 2rem;
  :hover,
  :active {
    background-color: ${({ theme }) => theme.palette.cyan[0]};
    color: ${({ theme }) => theme.palette.blue[6]};
  }
  ${getMediaQueryMinWidth('md')} {
    font-size: 2.5rem;
  }
`;

export function Footer() {
  const atLeastMd = useMediaQuery(BREAKPOINT_STRINGS.md);
  const gutterSize = useGetGutterSize();
  return (
    <Flex bg="purple.8" justify="center">
      <FooterWrapper
        align="flex-end"
        m={0}
        maw={CONTAINER_WIDTH}
        px={gutterSize}
        py={{ base: 40, md: 60 }}
        w="100%"
      >
        <Grid.Col md={5} order={1} orderMd={2} p={0}>
          <Flex direction="column" gap={20}>
            <Text size={atLeastMd ? 20 : 18}>
              If you need help on a project, a strategic plan or a team...
            </Text>
            <Flex direction="column" gap={8}>
              <Title order={2} size={atLeastMd ? 40 : 32}>
                Email us at
              </Title>
              <EmailLink href={EMAIL_LINK} isInternal={false}>
                inquires@jbrad.co
              </EmailLink>
            </Flex>
          </Flex>
        </Grid.Col>
        <Grid.Col md={7} mt={{ base: 100, md: 0 }} order={2} orderMd={1} p={0}>
          <Logo />
        </Grid.Col>
      </FooterWrapper>
    </Flex>
  );
}
