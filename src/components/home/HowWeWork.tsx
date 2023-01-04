import { Flex, SimpleGrid, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import NextImage from 'next/image';

import { BREAKPOINT_STRINGS, BREAKPOINT_VALUES } from '~/constants/theme';

import { Image } from '../Image';

const pFontSize = {
  base: 16,
  md: 20,
};

const hFontSize = {
  base: 18,
  md: 32,
};

export function HowWeWork() {
  const atLeastMd = useMediaQuery(BREAKPOINT_STRINGS.md);
  return (
    <>
      <Image
        alt=""
        fill
        minHeight={50}
        role="presentation"
        src="/flower_strip.png"
        style={{
          objectFit: 'cover',
        }}
      />
      <SimpleGrid
        breakpoints={[{ minWidth: BREAKPOINT_VALUES.md, spacing: 20, cols: 2 }]}
        cols={1}
        my={{ base: 86, md: 100 }}
        px={{ base: 20, md: 60 }}
        spacing={40}
      >
        <Title order={2} size={atLeastMd ? hFontSize.md : hFontSize.base}>
          We work with C level executives that need sounding boards and
          objective feedback.
        </Title>
        <Flex direction="column" gap={{ base: 20, md: 30 }}>
          <Text size={atLeastMd ? pFontSize.md : pFontSize.base}>
            We build actionable plans to drive results in any area of your
            business.
          </Text>
          <Text size={atLeastMd ? pFontSize.md : pFontSize.base}>
            We refresh your sales, marketing or comms strategy
          </Text>
          <Text size={atLeastMd ? pFontSize.md : pFontSize.base}>
            We help make your other agencies and partners more effective.
          </Text>
        </Flex>
      </SimpleGrid>
      <Flex
        direction={{ base: 'column-reverse', md: 'row' }}
        gap={{ base: 110, md: 100 }}
        mb={{ base: 50, md: 228 }}
        px={{ base: 20, md: 60 }}
      >
        <Flex direction="column" gap={30}>
          <Title order={2} size={atLeastMd ? hFontSize.md : hFontSize.base}>
            How We Work
          </Title>
          <Text size={atLeastMd ? pFontSize.md : pFontSize.base}>
            You can hire us for a few hours or a few months to help get the
            strategy and plans moving.
          </Text>
          <Text size={atLeastMd ? pFontSize.md : pFontSize.base}>
            Companies spend too much time doubting and questioning plans vs
            reaching for the most aggressive goal they can reach. When budgets
            are small, impact needs to be high. Creativity and strategic
            thinking must work hand in hand to hand to breakthrough vs accept a
            status quo.
          </Text>
          <Text size={atLeastMd ? pFontSize.md : pFontSize.base}>
            Money and resources don&apos;t guarantee results, a clear headed
            strategy and plan will win more often than a big budget. We have
            proof and case studies from companies like Honey, Sofi, Pinterest to
            prove it.
          </Text>
          <Text size={atLeastMd ? pFontSize.md : pFontSize.base}>
            JBrad Advisors will help leaders and teams get excited about what
            they can do quickly to drive momentum, keep partnerships and
            agencies engaged and perform better.
          </Text>
        </Flex>
        <Flex justify={{ base: 'center', md: 'flex-end' }} w="100%">
          <NextImage
            alt=""
            height={atLeastMd ? 532 : 224}
            role="presentation"
            src="/eclipse.png"
            width={atLeastMd ? 532 : 224}
          />
        </Flex>
      </Flex>
    </>
  );
}
