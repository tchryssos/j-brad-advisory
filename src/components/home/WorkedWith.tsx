import styled from '@emotion/styled';
import { Flex, Group, Title } from '@mantine/core';
import Image from 'next/image';

import { pxToRem } from '~/logic/util/styles';

const companyLogos = [
  {
    src: '/sofi.png',
    alt: 'Sofi',
  },
];

const WorkedSection = styled(Flex)`
  border-top: 1px solid ${({ theme }) => theme.colors.gray[9]};
`;

export function WorkedWith() {
  return (
    <WorkedSection
      align="center"
      bg="gray.4"
      direction="column"
      gap={pxToRem(32)}
      justify="center"
      mih={pxToRem(266)}
    >
      <Title order={2}>Companies We&apos;ve Worked With</Title>
      <Group pos="relative" position="center">
        {companyLogos.map((logo) => (
          <Flex h={pxToRem(88)} key={logo.src} w={pxToRem(104)}>
            <Image
              alt={logo.alt}
              fill
              key={logo.src}
              src={logo.src}
              style={{ objectFit: 'contain' }}
            />
          </Flex>
        ))}
      </Group>
    </WorkedSection>
  );
}
