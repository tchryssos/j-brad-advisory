import { Flex, Text, Title } from '@mantine/core';

import { WeExist } from '~/components/home/WeExist';
import { Layout } from '~/components/meta/Layout';

function Home() {
  return (
    <Layout title="Home - J. Bradford Advisory">
      <WeExist />
    </Layout>
  );
}

export default Home;
