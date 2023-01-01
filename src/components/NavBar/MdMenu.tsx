import styled from '@emotion/styled';
import { Flex } from '@mantine/core';

import { ABOUT_ROUTE, HOME_ROUTE } from '~/constants/routing';
import { getMediaQueryMinWidth } from '~/constants/theme';
import { pxToRem } from '~/logic/util/styles';

import { Link } from '../Link';

const ContactLink = styled.a`
  font-size: ${pxToRem(20)};
  border: 2px solid ${({ theme }) => theme.colors.gray[9]};
  border-radius: 500px;
  padding: ${pxToRem(8)} ${pxToRem(16)};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray[9]};
  :hover {
    color: ${({ theme }) => theme.colors.blue[6]};
    border-color: ${({ theme }) => theme.colors.blue[6]};
    background-color: ${({ theme }) => theme.colors.blue[0]};
  }
`;

const MdMenuWrapper = styled(Flex)`
  display: none;
  ${getMediaQueryMinWidth('md')} {
    display: flex;
  }
`;

export function MdMenu() {
  return (
    <MdMenuWrapper align="center" gap={40}>
      <Link href={HOME_ROUTE}>Home</Link>
      <Link href={ABOUT_ROUTE}>About</Link>
      <ContactLink href="mailto:inquiries@jbrad.co" target="_blank">
        Email Us
      </ContactLink>
    </MdMenuWrapper>
  );
}
