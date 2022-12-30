import styled from '@emotion/styled';
import { Flex, Grid, List, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { WheelSize } from '~/constants/images';
import { BREAKPOINT_STRINGS } from '~/constants/theme';
import { pxToRem } from '~/logic/util/styles';

const focusAreas = [
  [
    'Strategic Direction',
    'Marketing',
    'Community building',
    'Sales Effectiveness',
    'Partnerships',
  ],
  [
    'Comms and Press',
    'Coaching and Mentoring teams',
    'Investing and Fundraising',
    'CEO/CMO Alignment',
  ],
];

const WheelSpaceGrid = styled.div`
  display: grid;
  grid-template-columns: ${WheelSize.base / 2}px auto;
  gap: 1rem;
`;

export function AreasOfFocus() {
  const atLeastMd = useMediaQuery(BREAKPOINT_STRINGS.md);

  return (
    <WheelSpaceGrid>
      <div />
      <Flex direction="column" gap={pxToRem(40)}>
        <Title order={2} size={18}>
          Our focus areas
        </Title>
        <List listStyleType="none" type="unordered">
          <Flex
            direction={atLeastMd ? 'row' : 'column'}
            justify="space-between"
          >
            {focusAreas.map((focusArea) => (
              <Flex direction="column" key={focusArea.join('-')}>
                {focusArea.map((focus) => (
                  <List.Item key={focus}>{focus}</List.Item>
                ))}
              </Flex>
            ))}
          </Flex>
        </List>
      </Flex>
    </WheelSpaceGrid>
  );
}
