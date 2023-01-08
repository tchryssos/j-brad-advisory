import styled from '@emotion/styled';
import { Flex, SimpleGrid, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { BREAKPOINT_STRINGS, BREAKPOINT_VALUES } from '~/constants/theme';
import { useGetGutterSize } from '~/logic/hooks/layout';

import { Image } from '../Image';

const pillarGroups = [
  {
    title: 'Ambitious thinking',
    description:
      'We want to go farther than you think you can, by pushing your  company to the next level.',
    src: '/ambitious_thinking.png',
  },
  {
    title: 'Clear headed goals',
    description: 'We help everyone get really clear on priorities and goals.',
    src: '/clear_headed.png',
  },
  {
    title: 'Understood by all',
    description:
      'The plans and strategies we will build need to be understood and used by everyone.',
    src: '/understood_by_all.png',
  },
  {
    title: 'Executed really well',
    description:
      'We will help you get it done. Nothing really matters unless it is executed.',
    src: '/understood.png',
  },
];

const PillarGrid = styled(SimpleGrid)`
  column-gap: 32px;
  row-gap: 16px;
`;

const PillarItem = styled.div`
  display: grid;
  gap: 20px;
  grid-template-rows: auto 1fr;
`;

const PillarPicture = styled(Image)`
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 1.5;
`;

export function Pillars() {
  const atLeastSm = useMediaQuery(BREAKPOINT_STRINGS.sm);
  const atLeastMd = useMediaQuery(BREAKPOINT_STRINGS.md);
  const gutterSize = useGetGutterSize();

  return (
    <Flex
      bg="cyan.0"
      direction="column"
      gap={20}
      mt={atLeastMd ? 68 : 40}
      pb={80}
      pt={atLeastMd ? 154 : 80}
      px={gutterSize}
    >
      <Title order={2} size={atLeastSm ? 20 : 18}>
        Our pillars
      </Title>
      <PillarGrid
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
      >
        {pillarGroups.map((pillarGroup) => (
          <PillarItem key={pillarGroup.title}>
            <PillarPicture
              alt=""
              fill
              role="presentation"
              src={pillarGroup.src}
              style={{
                objectFit: 'cover',
              }}
            />
            <Flex direction="column" gap={20} h="100%">
              <Title order={3} size={atLeastMd ? 20 : 18}>
                {pillarGroup.title}
              </Title>
              <Text>{pillarGroup.description}</Text>
            </Flex>
          </PillarItem>
        ))}
      </PillarGrid>
    </Flex>
  );
}
