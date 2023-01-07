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
  fontSize?: number;
  activeUnderline?: boolean;
}

interface StyledProps extends Pick<LinkProps, 'activeUnderline' | 'fontSize'> {
  isActive: boolean;
}

const StyledLink = styled.a<StyledProps>`
  color: ${({ theme }) => theme.colors.gray[9]};
  stroke: ${({ theme }) => theme.colors.gray[9]};
  text-decoration: none;
  font-size: ${({ fontSize }) => pxToRem(fontSize || 16)};
  position: relative;
  ::after {
    content: '';
    display: ${({ isActive, activeUnderline }) =>
      isActive && activeUnderline ? 'block' : 'none'};
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray[9]};
    position: absolute;
    bottom: -4px;
    left: 0;
  }
  :hover,
  :active {
    color: ${({ theme }) => theme.colors.blue[6]};
    stroke: ${({ theme }) => theme.colors.blue[6]};
    ::after {
      background-color: ${({ theme }) => theme.colors.blue[6]};
    }
  }
`;

export function Link({
  href,
  isInternal = true,
  children,
  className,
  fontSize,
  activeUnderline,
}: LinkProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Flex align="center" direction="column" w="fit-content">
      <NextLink href={href} legacyBehavior passHref>
        <StyledLink
          activeUnderline={activeUnderline}
          className={className}
          fontSize={fontSize}
          isActive={isActive}
          rel="noopener noreferrer"
          target={isInternal ? '_self' : '_blank'}
        >
          {children}
        </StyledLink>
      </NextLink>
    </Flex>
  );
}
