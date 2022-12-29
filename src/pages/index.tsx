import { Flex, Text, Title } from '@mantine/core';

import { AreasOfFocus } from '~/components/home/AreasOfFocus';
import { WeExist } from '~/components/home/WeExist';
import { Layout } from '~/components/meta/Layout';

function Home() {
  return (
    <Layout title="Home - J. Bradford Advisory">
      <WeExist />
      <AreasOfFocus />
    </Layout>
  );
}

export default Home;
