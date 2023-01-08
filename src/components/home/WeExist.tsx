import { Container, Flex, Text, TextProps, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { styled } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import {
  BREAKPOINT_STRINGS,
  BREAKPOINT_VALUES,
  getMediaQueryMinWidth,
} from '~/constants/theme';
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

const WhyText = styled(Text)(({ isActive }) => ({
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
})) as React.ComponentType<
  TextProps & {
    isActive: boolean;
  }
>;

interface MdContainerProps {
  children: React.ReactNode;
  atLeastMd: boolean;
}

function MdContainer({ children, atLeastMd }: MdContainerProps) {
  return atLeastMd ? (
    <Container maw={BREAKPOINT_VALUES.md} pos="relative" w="100%">
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
    <Flex
      direction="column"
      h={{ base: pxToRem(232), md: pxToRem(384) }}
      justify="center"
      mt={{ base: 24, lg: 100 }}
      pos="relative"
      px={gutterSize}
    >
      <MdContainer atLeastMd={atLeastMd}>
        <WeExistImage
          alt=""
          height={imageSize}
          role="presentation"
          src="/mushroom_circle.png"
          width={imageSize}
        />
        <Title fw="bold" order={1} pos="relative" size={atLeastMd ? 72 : 32}>
          We exist to
        </Title>
        {/* min-height 2 lines */}
        <Flex mih={atLeastMd ? 223 : 100} pos="relative">
          {swappableText.map((t, i) => (
            <WhyText
              fw="bold"
              isActive={i === activeTextIndex}
              key={t}
              size={atLeastMd ? 72 : 32}
            >
              {t}
            </WhyText>
          ))}
        </Flex>
      </MdContainer>
    </Flex>
  );
}
