import styled from '@emotion/styled';
import { Flex, List, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

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
  margin-top: ${pxToRem(72)};
  ${getMediaQueryMinWidth('md')} {
    grid-template-columns: ${WheelSize.md / 2}px auto;
    gap: 0;
  }
`;

// Hacky fake list item to even out lists
const FakeListItem = styled.div`
  height: 25px;
`;

export function AreasOfFocus() {
  const atLeastMd = useMediaQuery(BREAKPOINT_STRINGS.md);

  return (
    <WheelSpaceGrid>
      {/* This empty div creates space for the color wheel */}
      <div />
      <List listStyleType="none" type="unordered">
        <Flex
          direction={atLeastMd ? 'row' : 'column'}
          justify={atLeastMd ? 'space-around' : 'space-between'}
          maw={712}
        >
          {focusAreas.map((focusArea, i) => (
            <Flex
              direction="column"
              justify="flex-end"
              key={focusArea.join('-')}
            >
              {i === 0 && (
                <Title mb={{ base: 20, md: 40 }} order={2} size={18}>
                  Our focus areas
                </Title>
              )}
              {focusArea.map((focus) => (
                <List.Item key={focus}>{focus}</List.Item>
              ))}
              {i === 1 && atLeastMd && <FakeListItem />}
            </Flex>
          ))}
        </Flex>
      </List>
    </WheelSpaceGrid>
  );
}
