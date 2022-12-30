import styled from '@emotion/styled';
import { Flex, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { BREAKPOINT_STRINGS, getMediaQueryMinWidth } from '~/constants/theme';
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
`;

export function WeExist() {
  const atLeastMd = useMediaQuery(BREAKPOINT_STRINGS.md);

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
    const intervalId = setInterval(incrementActiveTextIndex, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Flex
      direction="column"
      h={{ base: pxToRem(232), md: pxToRem(672) }}
      justify="center"
      mt={24}
      pos="relative"
      px={16}
    >
      <Title fw="bold" order={1} size={atLeastMd ? 72 : 32}>
        We exist to
      </Title>
      <Text fw="bold" size={atLeastMd ? 72 : 32}>
        {swappableText[activeTextIndex]}
      </Text>
      <WeExistImage
        alt=""
        height={104}
        role="presentation"
        src="/wave_circle.png"
        width={104}
      />
    </Flex>
  );
}
