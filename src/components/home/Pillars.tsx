import styled from '@emotion/styled';
import { Flex, SimpleGrid, Text, Title } from '@mantine/core';

import { BREAKPOINT_VALUES, getMediaQueryMinWidth } from '~/constants/theme';

const pillarGroups = [
  {
    title: 'Ambitious thinking',
    description:
      'We want to go farther than you think you can, by pushing your  company to the next level.',
  },
  {
    title: 'Clear headed goals',
    description: 'We help everyone get really clear on priorities and goals.',
  },
  {
    title: 'Understood by all',
    description:
      'The plans and strategies we will build need to be understood and used by everyone.',
  },
  {
    title: 'Executed really well',
    description:
      'We will help you get it done. Nothing really matters unless it is executed.',
  },
];

const GridItem = styled(Flex)`
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray[9]};
  border-top-width: 1px;
  border-right-width: 1px;
  border-left-width: 1px;
  border-bottom-width: 0;
  ${getMediaQueryMinWidth('sm')} {
    &:nth-child(2n) {
      border-left-width: 0;
    }
  }
  ${getMediaQueryMinWidth('md')} {
    &:not(:first-child) {
      border-left-width: 0;
    }
  } ;
`;

export function Pillars() {
  return (
    <Flex bg="cyan.0" direction="column" gap={16} mt={48}>
      <Title order={2}>Our Pillars</Title>
      <SimpleGrid
        breakpoints={[
          {
            maxWidth: BREAKPOINT_VALUES.sm - 1,
            cols: 1,
          },
          {
            minWidth: BREAKPOINT_VALUES.sm,
            cols: 2,
          },
          {
            minWidth: BREAKPOINT_VALUES.md,
            cols: 4,
          },
        ]}
        cols={1}
        p={0}
        spacing={0}
      >
        {pillarGroups.map((pillarGroup) => (
          <GridItem direction="column" gap={20} key={pillarGroup.title} p={16}>
            <Title order={3}>{pillarGroup.title}</Title>
            <Text>{pillarGroup.description}</Text>
          </GridItem>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
