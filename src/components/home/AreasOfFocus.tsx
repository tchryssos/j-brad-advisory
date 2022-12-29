import { Flex, List, Title } from '@mantine/core';

import { pxToRem } from '~/logic/util/styles';

const focusAreas = [
  ['Strategic Direction', 'Marketing', 'Community building'],
  ['Sales Effectiveness', 'Partnerships', 'Comms and Press'],
  [
    'Coaching and Mentoring teams',
    'Investing and Fundraising',
    'CEO/CMO Alignment',
  ],
];

export function AreasOfFocus() {
  return (
    <Flex direction="column" gap={pxToRem(40)}>
      <Title order={2}>Our focus areas</Title>
      <List listStyleType="none" type="unordered">
        <Flex gap={{ base: 16, sm: 0 }} justify="space-between">
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
  );
}
