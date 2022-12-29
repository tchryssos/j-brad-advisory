import { Flex, Text, Title } from '@mantine/core';
import { useEffect, useState } from 'react';

import { pxToRem } from '~/logic/util/styles';

const swappableText = [
  'help build marketing plans',
  'make a difficult decision quickly',
  'get you to try new things',
  'build bold marketing leadership',
];

export function WeExist() {
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
    <Flex direction="column" h={{ md: pxToRem(672) }} justify="center">
      <Title order={1}>We exist to</Title>
      <Text>{swappableText[activeTextIndex]}</Text>
    </Flex>
  );
}
