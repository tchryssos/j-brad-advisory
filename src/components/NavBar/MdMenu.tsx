import { Box, styled } from '@mui/material';

import { EMAIL_LINK } from '~/constants/links';
import { ABOUT_ROUTE, HOME_ROUTE } from '~/constants/routing';
import { getMediaQueryMinWidth } from '~/constants/theme';
import { pxToRem } from '~/logic/util/styles';

import { Link } from '../Link';

const ContactLink = styled('a')`
  font-size: ${pxToRem(16)};
  border: 2px solid ${({ theme }) => theme.palette.text.primary};
  border-radius: 500px;
  padding: ${pxToRem(4)} ${pxToRem(16)};
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
  :hover,
  :active {
    color: ${({ theme }) => theme.palette.primary.main};
    border-color: ${({ theme }) => theme.palette.primary.main};
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;

const MdMenuWrapper = styled(Box)`
  display: none;
  ${getMediaQueryMinWidth('md')} {
    display: flex;
  }
`;

export function MdMenu() {
  return (
    <MdMenuWrapper alignItems="center" display="flex" gap={40}>
      <Link activeUnderline href={HOME_ROUTE}>
        Home
      </Link>
      <Link activeUnderline href={ABOUT_ROUTE}>
        About
      </Link>
      <ContactLink href={EMAIL_LINK} target="_blank">
        Email Us
      </ContactLink>
    </MdMenuWrapper>
  );
}
