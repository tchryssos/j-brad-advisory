import { Flex, SimpleGrid, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { styled } from '@mui/material';

import {
  BREAKPOINT_STRINGS,
  BREAKPOINT_VALUES,
  getMediaQueryMinWidth,
} from '~/constants/theme';
import { useGetGutterSize } from '~/logic/hooks/layout';

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

const ySpacing = 80;
const imageDividerHeight = 50;

const HowWeWorkGrid = styled(Flex)`
  display: grid;
  gap: 110px;
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.palette.primary.main};
  gap: 20px;
  color: ${({ theme }) => theme.palette.gray[0]};
  ${getMediaQueryMinWidth('md')} {
    grid-template-columns: 1fr 1fr;
    gap: 110px;
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

const JumboColorDivider = styled.div`
  width: 100%;
  height: ${imageDividerHeight}px;
  display: none;
  position: relative;
  background-color: ${({ theme }) => theme.palette.orange[4]};
  @media only screen and (min-width: 1800px) {
    display: block;
  }
`;

export function HowWeWork() {
  const atLeastMd = useMediaQuery(BREAKPOINT_STRINGS.md);
  const atLeastSm = useMediaQuery(BREAKPOINT_STRINGS.sm);
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
        <ColorExtender colorTuple={['orange', 4]} />
      </JumboColorDivider>
      <SimpleGrid
        breakpoints={[{ minWidth: BREAKPOINT_VALUES.sm, spacing: 20, cols: 2 }]}
        cols={1}
        my={ySpacing}
        px={gutterSize}
        spacing={40}
      >
        <Title order={2} size={atLeastSm ? hFontSize.sm : hFontSize.base}>
          We work with C level executives that need sounding boards and
          objective feedback.
        </Title>
        <Flex flexDirection="column" gap={{ base: 20, md: 30 }}>
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
      <Flex pos="relative">
        <ColorExtender colorTuple={['blue', 6]} />
        <HowWeWorkGrid pos="relative" px={gutterSize} py={ySpacing}>
          <Flex flexDirection="column" gap={30}>
            <Title order={2} size={atLeastSm ? hFontSize.sm : hFontSize.base}>
              How we work
            </Title>
            <Text size={atLeastMd ? pFontSize.md : pFontSize.base}>
              You can hire us for a few hours or a few months to help get the
              strategy and plans moving.
            </Text>
            <Text size={atLeastMd ? pFontSize.md : pFontSize.base}>
              Companies spend too much time doubting and questioning plans vs
              reaching for the most aggressive goal they can reach. When budgets
              are small, impact needs to be high. Creativity and strategic
              thinking must work hand in hand to hand to breakthrough vs accept
              a status quo.
            </Text>
            <Text size={atLeastMd ? pFontSize.md : pFontSize.base}>
              Money and resources don&apos;t guarantee results, a clear headed
              strategy and plan will win more often than a big budget. We have
              proof and case studies from companies like Honey, Sofi, Pinterest
              to prove it.
            </Text>
            <Text size={atLeastMd ? pFontSize.md : pFontSize.base}>
              JBrad Advisors will help leaders and teams get excited about what
              they can do quickly to drive momentum, keep partnerships and
              agencies engaged and perform better.
            </Text>
          </Flex>
          {atLeastMd && (
            <Flex
              h="100%"
              justify={{ base: 'center', md: 'flex-end' }}
              mih={224}
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
            </Flex>
          )}
        </HowWeWorkGrid>
      </Flex>
    </>
  );
}
