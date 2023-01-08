import { styled } from '@mui/material';

import { EMAIL_LINK } from '~/constants/links';
import { getMediaQueryMinWidth } from '~/constants/theme';
import { pxToRem } from '~/logic/util/styles';

const StyledLink = styled.a`
  font-size: ${pxToRem(22)};
  border: 2px solid ${({ theme }) => theme.palette.gray[9]};
  border-radius: 500px;
  padding: ${pxToRem(4)} ${pxToRem(16)};
  text-decoration: none;
  color: ${({ theme }) => theme.palette.gray[9]};
  :hover,
  :active {
    color: ${({ theme }) => theme.palette.blue[6]};
    border-color: ${({ theme }) => theme.palette.blue[6]};
    background-color: ${({ theme }) => theme.palette.blue[0]};
  }
  ${getMediaQueryMinWidth('md')} {
    font-size: ${pxToRem(16)};
  }
`;

interface ContactLinkProps {
  className?: string;
}

export function ContactLink({ className }: ContactLinkProps) {
  return (
    <StyledLink className={className} href={EMAIL_LINK} target="_blank">
      Email us
    </StyledLink>
  );
}
