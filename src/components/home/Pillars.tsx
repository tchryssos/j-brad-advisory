import { Box, styled, Typography, useTheme } from '@mui/material';

import { useGetGutterSize } from '~/logic/hooks/layout';
import { pxToRem } from '~/logic/util/styles';

import { Image } from '../Image';
import { MaxWidthContainer } from '../MaxWidthContainer';

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

const PillarGrid = styled('div')`
  display: grid;
  column-gap: ${pxToRem(32)};
  row-gap: ${pxToRem(16)};
  grid-template-columns: 1fr;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const PillarItem = styled('div')`
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
  const gutterSize = useGetGutterSize();
  const theme = useTheme();

  return (
    <MaxWidthContainer bgColor={theme.palette.primary.light}>
      <Box
        display="flex"
        flexDirection="column"
        gap={2.25}
        mt={{ xs: pxToRem(40), md: pxToRem(68) }}
        pb={10}
        position="relative"
        pt={{ xs: pxToRem(80), md: pxToRem(154) }}
        px={gutterSize}
      >
        <Typography
          sx={{
            fontSize: {
              xs: 18,
              sm: 20,
            },
          }}
          variant="h2"
        >
          Our pillars
        </Typography>
        <PillarGrid>
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
              <Box
                display="flex"
                flexDirection="column"
                gap={2.25}
                height="100%"
              >
                <Typography
                  fontSize={{
                    xs: pxToRem(18),
                    md: pxToRem(20),
                  }}
                  variant="h3"
                >
                  {pillarGroup.title}
                </Typography>
                <Typography>{pillarGroup.description}</Typography>
              </Box>
            </PillarItem>
          ))}
        </PillarGrid>
      </Box>
    </MaxWidthContainer>
  );
}
