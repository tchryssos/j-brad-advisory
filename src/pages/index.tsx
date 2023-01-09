import { Box } from '@mui/material';

import { ColorWheel } from '~/components/ColorWheel';
import { AreasOfFocus } from '~/components/home/AreasOfFocus';
import { HowWeWork } from '~/components/home/HowWeWork';
import { Pillars } from '~/components/home/Pillars';
import { WeExist } from '~/components/home/WeExist';
import { WorkedWith } from '~/components/home/WorkedWith';
import { Layout } from '~/components/meta/Layout';

function Home() {
  return (
    <Layout title="Home - J. Bradford Advisory">
      <WeExist />
      <Box display="flex" flexDirection="column" position="relative">
        <ColorWheel />
        <AreasOfFocus />
        <Pillars />
      </Box>
      <WorkedWith />
      <HowWeWork />
    </Layout>
  );
}

export default Home;
