import { Flex, List, Title } from '@mantine/core';

export function AreasOfFocus() {
  return (
    <Flex direction="column">
      <Title order={2}>Areas of Focus</Title>
      <List listStyleType="none" type="unordered">
        <Flex justify="space-between">
          <Flex direction="column">
            <List.Item>Strategic Direction</List.Item>
            <List.Item>Marketing</List.Item>
            <List.Item>Community building</List.Item>
          </Flex>
          <Flex direction="column">
            <List.Item>Sales Effectiveness</List.Item>
            <List.Item>Partnerships</List.Item>
            <List.Item>Comms and Press</List.Item>
          </Flex>
          <Flex direction="column">
            <List.Item>Coaching and Mentoring teams</List.Item>
            <List.Item>Investing and Fundraising</List.Item>
            <List.Item>CEO/CMO Alignment</List.Item>
          </Flex>
        </Flex>
      </List>
    </Flex>
  );
}
