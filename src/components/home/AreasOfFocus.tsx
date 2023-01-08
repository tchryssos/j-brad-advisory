import { Flex, List, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { styled } from '@mui/material';

import { WheelSize } from '~/constants/images';
import { BREAKPOINT_STRINGS, getMediaQueryMinWidth } from '~/constants/theme';
import { pxToRem } from '~/logic/util/styles';

const focusAreas = [
  [
    'Strategic direction',
    'Marketing',
    'Community building',
    'Sales effectiveness',
    'Partnerships',
  ],
  [
    'Comms & press',
    'Coaching & mentoring',
    'Investing & fundraising',
    'CEO/CMO alignment',
  ],
];

const WheelSpaceGrid = styled.div`
  display: grid;
  grid-template-columns: ${WheelSize.base / 2}px auto;
  gap: ${pxToRem(44)};
  margin-top: ${pxToRem(60)};
  ${getMediaQueryMinWidth('md')} {
    grid-template-columns: ${WheelSize.md / 2}px auto;
    gap: 0;
  }
`;

// Hacky fake list item to even out lists
const FakeListItem = styled.div`
  height: 31px;
  display: none;
  ${getMediaQueryMinWidth('sm')} {
    display: block;
  }
`;

export function AreasOfFocus() {
  const atLeastSm = useMediaQuery(BREAKPOINT_STRINGS.sm);

  return (
    <WheelSpaceGrid>
      {/* This empty div creates space for the color wheel */}
      <div />
      <List listStyleType="none" pt={{ base: '', md: 40 }} type="unordered">
        <Flex
          direction={atLeastSm ? 'row' : 'column'}
          justify={atLeastSm ? 'space-around' : 'space-between'}
          maw={712}
        >
          {focusAreas.map((focusArea, i) => (
            <Flex
              direction="column"
              justify="flex-end"
              key={focusArea.join('-')}
            >
              {i === 0 && (
                <Title mb={20} order={2} size={atLeastSm ? 20 : 18}>
                  Our focus areas
                </Title>
              )}
              {focusArea.map((focus) => (
                <List.Item key={focus}>
                  <Text component="span" lh="200%" size={atLeastSm ? 20 : 14}>
                    {focus}
                  </Text>
                </List.Item>
              ))}
              {i === 1 && <FakeListItem />}
            </Flex>
          ))}
        </Flex>
      </List>
    </WheelSpaceGrid>
  );
}
