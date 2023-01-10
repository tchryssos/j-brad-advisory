import { Box } from '@mui/material';

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
        height="100%"
      >
        <NavBar />
        {children}
        <Footer />
      </Box>
    </>
  );
}
