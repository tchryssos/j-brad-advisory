import styled from '@emotion/styled';
import { Flex } from '@mantine/core';

import { ABOUT_ROUTE, HOME_ROUTE } from '~/constants/routing';
import { getMediaQueryMinWidth } from '~/constants/theme';

import { Link } from '../Link';

const ContactLink = styled.a``;

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
      <ContactLink>Contact Us</ContactLink>
    </MdMenuWrapper>
  );
}
