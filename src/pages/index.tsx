import styled from '@emotion/styled';
import { Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';

import { AreasOfFocus } from '~/components/home/AreasOfFocus';
import { Pillars } from '~/components/home/Pillars';
import { WeExist } from '~/components/home/WeExist';
import { WorkedWith } from '~/components/home/WorkedWith';
import { Layout } from '~/components/meta/Layout';
import { WheelSize } from '~/constants/images';
import { BREAKPOINT_STRINGS } from '~/constants/theme';

const ColorWheel = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-50%);
`;

function Home() {
  const atLeastMd = useMediaQuery(BREAKPOINT_STRINGS.md);

  return (
    <Layout title="Home - J. Bradford Advisory">
      <WeExist />
      <Flex direction="column" pos="relative">
        <ColorWheel
          alt=""
          height={atLeastMd ? WheelSize.md : WheelSize.base}
          role="presentation"
          src="/color_wheel.png"
          width={atLeastMd ? WheelSize.md : WheelSize.base}
        />
        <AreasOfFocus />
        <Pillars />
      </Flex>
      <WorkedWith />
    </Layout>
  );
}

export default Home;
