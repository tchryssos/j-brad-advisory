import styled from '@emotion/styled';
import { Flex, Grid, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { EMAIL_LINK } from '~/constants/links';
import { BREAKPOINT_STRINGS, getMediaQueryMinWidth } from '~/constants/theme';

import { Link } from './Link';
import { Logo } from './Logo';

const FooterWrapper = styled(Grid)`
  color: ${({ theme }) => theme.colors.gray[0]};
`;

const EmailLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.red[4]};
  color: ${({ theme }) => theme.colors.gray[0]};
  font-weight: 600;
  padding: 0 0.5rem;
  font-size: 2rem;
  :hover,
  :active {
    background-color: ${({ theme }) => theme.colors.cyan[0]};
    color: ${({ theme }) => theme.colors.blue[6]};
  }
  ${getMediaQueryMinWidth('md')} {
    font-size: 2.5rem;
  }
`;

export function Footer() {
  const atLeastMd = useMediaQuery(BREAKPOINT_STRINGS.md);
  return (
    <FooterWrapper
      align="flex-end"
      bg="purple.8"
      m={0}
      px={{ base: 16, md: 60 }}
      py={{ base: 40, md: 60 }}
    >
      <Grid.Col md={6} order={1} orderMd={2} p={0}>
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
      <Grid.Col md={6} mt={{ base: 100, md: 0 }} order={2} orderMd={1} p={0}>
        <Logo fill="white" />
      </Grid.Col>
    </FooterWrapper>
  );
}
