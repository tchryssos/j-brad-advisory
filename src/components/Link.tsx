import styled from '@emotion/styled';
import { Flex } from '@mantine/core';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { pxToRem } from '~/logic/util/styles';

interface LinkProps {
  href: string;
  isInternal?: boolean;
  children: React.ReactNode;
  className?: string;
}

const StyledLink = styled.a<{ isActive: boolean }>`
  color: ${({ theme }) => theme.colors.gray[9]};
  text-decoration: none;
  font-size: ${pxToRem(20)};
`;

const ActiveBar = styled.div`
  height: 1px;
  width: 95%;
  background-color: ${({ theme }) => theme.colors.gray[9]};
  position: absolute;
  bottom: -4px;
`;

export function Link({
  href,
  isInternal = true,
  children,
  className,
}: LinkProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Flex align="center" direction="column" pos="relative">
      <NextLink href={href} legacyBehavior passHref>
        <StyledLink
          className={className}
          isActive={isActive}
          rel="noopener noreferrer"
          target={isInternal ? '_self' : '_blank'}
        >
          {children}
        </StyledLink>
      </NextLink>
      {isActive && <ActiveBar />}
    </Flex>
  );
}
