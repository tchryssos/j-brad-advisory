import styled from '@emotion/styled';
import { Container, Flex, Text, Title } from '@mantine/core';
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

  ${getMediaQueryMinWidth('md')} {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface MdContainerProps {
  children: React.ReactNode;
  atLeastMd: boolean;
}

function MdContainer({ children, atLeastMd }: MdContainerProps) {
  return atLeastMd ? (
    <Container maw={1000} pos="relative" w="100%">
      {children}
    </Container>
  ) : (
    <>{children}</>
  );
}

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
      <MdContainer atLeastMd={atLeastMd}>
        <WeExistImage
          alt=""
          height={atLeastMd ? 292 : 104}
          role="presentation"
          src={atLeastMd ? '/mushroom_circle.png' : '/wave_circle.png'}
          width={atLeastMd ? 292 : 104}
        />
        <Title fw="bold" order={1} pos="relative" size={atLeastMd ? 72 : 32}>
          We exist to
        </Title>
        <Text
          fw="bold"
          // min-height two lines
          mih={atLeastMd ? 223 : 100}
          pos="relative"
          size={atLeastMd ? 72 : 32}
        >
          {swappableText[activeTextIndex]}
        </Text>
      </MdContainer>
    </Flex>
  );
}
