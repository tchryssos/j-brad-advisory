import { Box } from '@mui/material';

import { CONTAINER_WIDTH } from '~/constants/theme';
import { pxToRem } from '~/logic/util/styles';

import { Footer } from '../Footer';
import { NavBar } from '../NavBar';
import { Head } from './Head';

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

export function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head title={title} />
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        // width="100vw"
      >
        <NavBar />
        {/* <Box
          height="100%"
          maxWidth={pxToRem(CONTAINER_WIDTH)}
          overflow={{ xs: 'hidden', xl: 'visible' }}
          p={0}
        > */}
        {children}
        {/* </Box> */}
        <Footer />
      </Box>
    </>
  );
}
