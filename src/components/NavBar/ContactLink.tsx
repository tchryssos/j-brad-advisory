import styled from '@emotion/styled';

import { EMAIL_LINK } from '~/constants/links';
import { pxToRem } from '~/logic/util/styles';

const StyledLink = styled.a`
  font-size: ${pxToRem(16)};
  border: 2px solid ${({ theme }) => theme.colors.gray[9]};
  border-radius: 500px;
  padding: ${pxToRem(4)} ${pxToRem(16)};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray[9]};
  :hover,
  :active {
    color: ${({ theme }) => theme.colors.blue[6]};
    border-color: ${({ theme }) => theme.colors.blue[6]};
    background-color: ${({ theme }) => theme.colors.blue[0]};
  }
`;

interface ContactLinkProps {
  className?: string;
}

export function ContactLink({ className }: ContactLinkProps) {
  return (
    <StyledLink className={className} href={EMAIL_LINK} target="_blank">
      Email Us
    </StyledLink>
  );
}
