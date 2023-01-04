import { Flex, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';

import { BREAKPOINT_STRINGS } from '~/constants/theme';

type LogoObj = {
  src: string;
  alt: string;
};

const workedForLogos: LogoObj[] = [
  {
    src: '/logos/sofi.png',
    alt: 'Sofi',
  },
  {
    src: '/logos/paypal.png',
    alt: 'PayPal',
  },
  {
    src: '/logos/microsoft.png',
    alt: 'Microsoft',
  },
  {
    src: '/logos/honey.png',
    alt: 'honey',
  },
];

const workedWithLogos: LogoObj[] = [
  {
    src: '/logos/variant.png',
    alt: 'Variant3D',
  },
  {
    src: '/logos/enkasa.png',
    alt: 'Enkasa',
  },
  {
    src: '/logos/diamond.png',
    alt: 'Diamond',
  },
  {
    src: '/logos/findkeep.png',
    alt: 'FindKeepLove',
  },
];

interface WorkedBlockProps {
  logos: LogoObj[];
  title: string;
  i: number;
}

function WorkedBlock({ logos, title, i }: WorkedBlockProps) {
  const atLeastMd = useMediaQuery(BREAKPOINT_STRINGS.md);

  return (
    <Flex
      align="center"
      bg="purple.8"
      direction="column"
      justify="center"
      pb={40}
      pt={i === 1 ? 0 : 40}
      w="100%"
    >
      <Title color="gray.0" mb={40} order={2} size={atLeastMd ? 20 : 18}>
        {title}
      </Title>
      <Flex direction={atLeastMd ? 'row' : 'column'}>
        {logos.map((logo) => (
          <Image
            alt={logo.alt}
            height={100}
            key={logo.src}
            src={logo.src}
            width={200}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export function WorkedWith() {
  return (
    <>
      <WorkedBlock
        i={0}
        logos={workedForLogos}
        title="Brands we've worked at"
      />
      <WorkedBlock i={1} logos={workedWithLogos} title="Brands we work with" />
    </>
  );
}
