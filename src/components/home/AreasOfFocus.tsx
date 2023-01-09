import { Box, List, ListItem, styled, Typography } from '@mui/material';

import { WheelSize } from '~/constants/images';
import { getMediaQueryMinWidth } from '~/constants/theme';
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

const WheelSpaceGrid = styled('div')`
  display: grid;
  grid-template-columns: ${WheelSize.base / 2}px auto;
  gap: ${pxToRem(44)};
  margin-top: ${pxToRem(60)};
  ${getMediaQueryMinWidth('md')} {
    grid-template-columns: ${WheelSize.md / 2}px auto;
    gap: 0;
  }
`;

const FocusList = styled(List)`
  list-style: none;
  padding-top: 0;
  ${({ theme }) => theme.breakpoints.up('md')} {
    padding-top: ${pxToRem(40)};
  }
  li {
    padding: 0;
    margin: 0;
  }
`;

// Hacky fake list item to even out lists
const FakeListItem = styled('div')`
  height: 31px;
  display: none;
  ${getMediaQueryMinWidth('sm')} {
    display: block;
  }
`;

export function AreasOfFocus() {
  return (
    <WheelSpaceGrid>
      {/* This empty div creates space for the color wheel */}
      <div />
      <FocusList>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent={{ xs: 'space-between', sm: 'space-around' }}
          maxWidth={pxToRem(712)}
        >
          {focusAreas.map((focusArea, i) => (
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
              key={focusArea.join('-')}
            >
              {i === 0 && (
                <Typography
                  fontSize={{ xs: pxToRem(18), sm: pxToRem(20) }}
                  mb={2.25}
                  variant="h2"
                >
                  Our focus areas
                </Typography>
              )}
              {focusArea.map((focus) => (
                <ListItem key={focus}>
                  <Typography
                    component="span"
                    fontSize={{ xs: pxToRem(18), md: pxToRem(20) }}
                    lineHeight="200%"
                  >
                    {focus}
                  </Typography>
                </ListItem>
              ))}
              {i === 1 && <FakeListItem />}
            </Box>
          ))}
        </Box>
      </FocusList>
    </WheelSpaceGrid>
  );
}
