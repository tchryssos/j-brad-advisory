import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';

import { BREAKPOINT_STRINGS } from '~/constants/theme';
import { pxToRem } from '~/logic/util/styles';

import { MaxWidthContainer } from '../MaxWidthContainer';

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
  const theme = useTheme();

  return (
    <MaxWidthContainer bgColor={theme.palette.primary.dark}>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        pb={5}
        position="relative"
        pt={i === 1 ? 0 : 5}
        width="100%"
      >
        <Typography
          color={theme.palette.common.white}
          fontSize={{
            xs: pxToRem(18),
            md: pxToRem(20),
          }}
          mb={5}
          variant="h2"
        >
          {title}
        </Typography>
        <Box display="flex" flexDirection={atLeastMd ? 'row' : 'column'}>
          {logos.map((logo) => (
            <Image
              alt={logo.alt}
              height={100}
              key={logo.src}
              src={logo.src}
              width={200}
            />
          ))}
        </Box>
      </Box>
    </MaxWidthContainer>
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
