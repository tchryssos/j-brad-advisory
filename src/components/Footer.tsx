import { Box, styled, Typography, useTheme } from '@mui/material';

import { EMAIL_LINK } from '~/constants/links';
import { CONTAINER_WIDTH, getMediaQueryMinWidth } from '~/constants/theme';
import { useGetGutterSize } from '~/logic/hooks/layout';
import { pxToRem } from '~/logic/util/styles';

import { Link } from './Link';
import { Logo } from './Logo';
import { MaxWidthContainer } from './MaxWidthContainer';

const FooterWrapper = styled(Box)`
  color: ${({ theme }) => theme.palette.common.white};
  fill: ${({ theme }) => theme.palette.common.white};
`;

const EmailLink = styled(Link)`
  background-color: ${({ theme }) => theme.palette.error.main};
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: 600;
  padding: 0 0.5rem;
  font-size: 2rem;
  :hover,
  :active {
    background-color: ${({ theme }) => theme.palette.primary.light};
    color: ${({ theme }) => theme.palette.primary.main};
  }
  ${getMediaQueryMinWidth('md')} {
    font-size: 2.5rem;
  }
`;

export function Footer() {
  const gutterSize = useGetGutterSize();
  const theme = useTheme();
  return (
    <MaxWidthContainer bgColor={theme.palette.primary.dark}>
      <Box display="flex" justifyContent="center">
        <FooterWrapper
          alignItems="flex-end"
          display="grid"
          gridTemplateColumns={{ xs: '1fr', md: '7fr 5fr' }}
          m={0}
          maxWidth={CONTAINER_WIDTH}
          px={gutterSize}
          py={{ xs: pxToRem(40), md: pxToRem(60) }}
          width="100%"
        >
          <Box
            order={{
              xs: 1,
              md: 2,
            }}
            p={0}
          >
            <Box display="flex" flexDirection="column" gap={2.25}>
              <Typography
                component="p"
                sx={{
                  fontSize: {
                    xs: pxToRem(18),
                    md: pxToRem(20),
                  },
                }}
              >
                If you need help on a project, a strategic plan or a team...
              </Typography>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography
                  component="h2"
                  fontSize={{
                    xs: pxToRem(32),
                    md: pxToRem(40),
                  }}
                  fontWeight={600}
                >
                  Email us at
                </Typography>
                <EmailLink href={EMAIL_LINK} isInternal={false}>
                  inquires@jbrad.co
                </EmailLink>
              </Box>
            </Box>
          </Box>
          <Box
            mt={{
              xs: pxToRem(100),
              md: 0,
            }}
            order={{
              xs: 2,
              md: 1,
            }}
            p={0}
          >
            <Logo />
          </Box>
        </FooterWrapper>
      </Box>
    </MaxWidthContainer>
  );
}
