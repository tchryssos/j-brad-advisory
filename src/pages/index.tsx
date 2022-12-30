import { Flex } from '@mantine/core';

import { ColorWheel } from '~/components/ColorWheel';
import { AreasOfFocus } from '~/components/home/AreasOfFocus';
import { Pillars } from '~/components/home/Pillars';
import { WeExist } from '~/components/home/WeExist';
import { WorkedWith } from '~/components/home/WorkedWith';
import { Layout } from '~/components/meta/Layout';

function Home() {
  return (
    <Layout title="Home - J. Bradford Advisory">
      <WeExist />
      <Flex direction="column" pos="relative">
        <ColorWheel />
        <AreasOfFocus />
        <Pillars />
      </Flex>
      <WorkedWith />
    </Layout>
  );
}

export default Home;
