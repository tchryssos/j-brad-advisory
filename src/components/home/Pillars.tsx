import {
  Box,
  Grid,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { BREAKPOINT_STRINGS } from '~/constants/theme';
import { useGetGutterSize } from '~/logic/hooks/layout';

import { ColorExtender } from '../ColorExtender';
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

const PillarGrid = styled(Grid)`
  column-gap: 32px;
  row-gap: 16px;
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
  const atLeastMd = useMediaQuery(BREAKPOINT_STRINGS.md);
  const gutterSize = useGetGutterSize();
  const theme = useTheme();

  return (
    <Box
      bgcolor={theme.palette.common.white}
      display="flex"
      flexDirection="column"
      gap={20}
      mt={atLeastMd ? 68 : 40}
      pb={80}
      position="relative"
      pt={atLeastMd ? 154 : 80}
      px={gutterSize}
    >
      <ColorExtender color={theme.palette.common.white} />
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
      <PillarGrid
        p={0}
        sx={{
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr 1fr',
          },
        }}
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
            <Box display="flex" flexDirection="column" gap={20} height="100%">
              <Typography
                sx={{
                  fontSize: {
                    xs: 18,
                    md: 20,
                  },
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
  );
}
