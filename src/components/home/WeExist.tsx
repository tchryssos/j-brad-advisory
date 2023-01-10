import {
  Box,
  Container,
  styled,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { BREAKPOINT_STRINGS, getMediaQueryMinWidth } from '~/constants/theme';
import { useGetGutterSize } from '~/logic/hooks/layout';
import { pxToRem } from '~/logic/util/styles';

const swappableText = [
  'help build marketing plans',
  'make difficult decisions quickly',
  'get you to try new things',
  'build bold marketing leadership',
];

const WeExistImage = styled(Image)`
  position: absolute;
  top: 0;
  right: -5%;

  ${getMediaQueryMinWidth(500)} {
    right: 10%;
  }

  ${getMediaQueryMinWidth(800)} {
    right: 15%;
  }

  ${getMediaQueryMinWidth('md')} {
    right: 0;
    top: 50%;
    transform: translate(20%, -70%);
  }
`;

const SWAP_TIME = 3000;

const WhyText = styled(Typography)<{ isActive: boolean }>(({ isActive }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  // Opacity 0 stops screen readers, so we set it to
  // 0.001 instead
  opacity: 0.001,
  transform: 'translateY(200px)',
  transition: 'opacity 0.3s, transform 1s',
  ...(isActive && {
    opacity: 1,
    transform: 'translateY(0)',
    transitionDuration: '0s',
    transitionDelay: '0.4s',
  }),
}));

interface MdContainerProps {
  children: React.ReactNode;
  atLeastMd: boolean;
}

function MdContainer({ children, atLeastMd }: MdContainerProps) {
  return atLeastMd ? (
    <Container
      maxWidth="md"
      sx={{
        position: 'relative',
      }}
    >
      {children}
    </Container>
  ) : (
    <>{children}</>
  );
}

export function WeExist() {
  const atLeastSm = useMediaQuery(BREAKPOINT_STRINGS.sm);
  const atLeastMd = useMediaQuery(BREAKPOINT_STRINGS.md);
  const gutterSize = useGetGutterSize();

  const [activeTextIndex, setActiveTextIndex] = useState(0);

  const incrementActiveTextIndex = () => {
    setActiveTextIndex((prev) => {
      if (prev === swappableText.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(incrementActiveTextIndex, SWAP_TIME);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const imageSize = atLeastMd ? 292 : atLeastSm ? 175 : 104;

  return (
    <Box
      display="flex"
      flexDirection="column"
      height={{ xs: pxToRem(232), sm: pxToRem(384) }}
      justifyContent="center"
      // maxWidth={CONTAINER_WIDTH}
      mt={{ xs: pxToRem(24), lg: pxToRem(100) }}
      position="relative"
      px={gutterSize}
      width="100%"
    >
      <MdContainer atLeastMd={atLeastMd}>
        <WeExistImage
          alt=""
          height={imageSize}
          role="presentation"
          src="/mushroom_circle.png"
          width={imageSize}
        />
        <Typography
          fontSize={{
            xs: pxToRem(32),
            md: pxToRem(72),
          }}
          fontWeight="bold"
          position="relative"
          variant="h1"
        >
          We exist to
        </Typography>

        <Box
          display="flex"
          position="relative"
          sx={{
            minHeight: {
              xs: pxToRem(100),
              md: pxToRem(223),
            },
          }}
        >
          {swappableText.map((t, i) => (
            <WhyText
              fontWeight="bold"
              isActive={i === activeTextIndex}
              key={t}
              sx={{
                fontSize: {
                  xs: pxToRem(32),
                  md: pxToRem(72),
                },
              }}
            >
              {t}
            </WhyText>
          ))}
        </Box>
      </MdContainer>
    </Box>
  );
}
