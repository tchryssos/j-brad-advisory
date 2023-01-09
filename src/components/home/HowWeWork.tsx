import {
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { BREAKPOINT_STRINGS, getMediaQueryMinWidth } from '~/constants/theme';
import { useGetGutterSize } from '~/logic/hooks/layout';
import { pxToRem } from '~/logic/util/styles';

import { ColorExtender } from '../ColorExtender';
import { Image } from '../Image';

const pFontSize = {
  base: 16,
  md: 20,
};

const hFontSize = {
  base: 18,
  sm: 32,
};

const ySpacing = pxToRem(80);
const imageDividerHeight = 50;

const HowWeWorkGrid = styled(Box)`
  display: grid;
  gap: ${pxToRem(110)};
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.palette.primary.main};
  gap: 20px;
  color: ${({ theme }) => theme.palette.common.white};
  ${getMediaQueryMinWidth('md')} {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageDivider = styled(Image)`
  ${getMediaQueryMinWidth('xl')} {
    width: 110vw;
    transform: translateX(-10vw);
  }
  /* Image gets insanely stretched out above this size */
  @media only screen and (min-width: 1800px) {
    display: none;
  }
`;

const JumboColorDivider = styled('div')`
  width: 100%;
  height: ${imageDividerHeight}px;
  display: none;
  position: relative;
  background-color: ${({ theme }) => theme.palette.warning.main};
  @media only screen and (min-width: 1800px) {
    display: block;
  }
`;

interface WorkTextProps {
  children: string;
}

function WorkText({ children }: WorkTextProps) {
  return (
    <Typography
      sx={{
        fontSize: {
          xs: pFontSize.base,
          md: pFontSize.md,
        },
      }}
    >
      {children}
    </Typography>
  );
}

export function HowWeWork() {
  const atLeastMd = useMediaQuery(BREAKPOINT_STRINGS.md);
  // const atLeastSm = useMediaQuery(BREAKPOINT_STRINGS.sm);
  const theme = useTheme();
  const gutterSize = useGetGutterSize();
  return (
    <>
      <ImageDivider
        alt=""
        fill
        minHeight={imageDividerHeight}
        role="presentation"
        src="/flower_strip.png"
        style={{
          objectFit: 'cover',
        }}
      />
      <JumboColorDivider>
        <ColorExtender color={theme.palette.warning.main} />
      </JumboColorDivider>
      <Box
        display="grid"
        gap={2.25}
        gridTemplateColumns={{
          xs: '1fr',
          sm: '1fr 1fr',
        }}
        my={ySpacing}
        px={gutterSize}
      >
        <Typography
          fontSize={{
            xs: hFontSize.base,
            sm: hFontSize.sm,
          }}
          mb={2.25}
          variant="h2"
        >
          We work with C level executives that need sounding boards and
          objective feedback.
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          gap={{ xs: pxToRem(20), md: pxToRem(30) }}
        >
          <WorkText>
            We build actionable plans to drive results in any area of your
            business.
          </WorkText>
          <WorkText>
            We refresh your sales, marketing or comms strategy
          </WorkText>
          <WorkText>
            We help make your other agencies and partners more effective.
          </WorkText>
        </Box>
      </Box>
      <Box display="flex" position="relative">
        <ColorExtender color={theme.palette.primary.main} />
        <HowWeWorkGrid
          display="flex"
          position="relative"
          px={gutterSize}
          py={ySpacing}
        >
          <Box display="flex" flexDirection="column" gap={pxToRem(30)}>
            <Typography
              sx={{
                fontSize: {
                  xs: hFontSize.base,
                  sm: hFontSize.sm,
                },
              }}
              variant="h2"
            >
              How we work
            </Typography>
            <WorkText>
              You can hire us for a few hours or a few months to help get the
              strategy and plans moving.
            </WorkText>
            <WorkText>
              Companies spend too much time doubting and questioning plans vs
              reaching for the most aggressive goal they can reach. When budgets
              are small, impact needs to be high. Creativity and strategic
              thinking must work hand in hand to hand to breakthrough vs accept
              a status quo.
            </WorkText>
            <WorkText>
              Money and resources don&apos;t guarantee results, a clear headed
              strategy and plan will win more often than a big budget. We have
              proof and case studies from companies like Honey, Sofi, Pinterest
              to prove it.
            </WorkText>
            <WorkText>
              JBrad Advisors will help leaders and teams get excited about what
              they can do quickly to drive momentum, keep partnerships and
              agencies engaged and perform better.
            </WorkText>
          </Box>
          {atLeastMd && (
            <Box
              display="flex"
              height="100%"
              justifyContent={{ xs: 'center', md: 'flex-end' }}
              minHeight={pxToRem(224)}
            >
              <Image
                alt=""
                fill
                role="presentation"
                src="/eclipse.png"
                style={{
                  objectFit: 'contain',
                }}
              />
            </Box>
          )}
        </HowWeWorkGrid>
      </Box>
    </>
  );
}
