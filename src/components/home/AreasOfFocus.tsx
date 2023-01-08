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
      <FocusList
        sx={{
          paddingTop: {
            xs: 0,
            md: pxToRem(40),
          },
        }}
      >
        <Box
          display="flex"
          maxWidth={pxToRem(712)}
          sx={{
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            justifyContent: {
              xs: 'space-between',
              sm: 'space-around',
            },
          }}
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
                  mb={20}
                  sx={{
                    fontSize: {
                      xs: pxToRem(18),
                      sm: pxToRem(20),
                    },
                  }}
                  variant="h2"
                >
                  Our focus areas
                </Typography>
              )}
              {focusArea.map((focus) => (
                <ListItem key={focus}>
                  <Typography
                    component="span"
                    lineHeight="200%"
                    sx={{
                      fontSize: {
                        xs: pxToRem(18),
                        md: pxToRem(20),
                      },
                    }}
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
