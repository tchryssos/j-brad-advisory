import { Box } from '@mui/material';

import { CONTAINER_WIDTH } from '~/constants/theme';

interface MaxWidthContainerProps {
  bgColor?: string;
  children: React.ReactNode;
}

export function MaxWidthContainer({
  bgColor,
  children,
}: MaxWidthContainerProps) {
  return (
    <Box
      bgcolor={bgColor}
      display="flex"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <Box
        display="flex"
        flexDirection="column"
        maxWidth={CONTAINER_WIDTH}
        position="relative"
        width="100%"
      >
        {children}
      </Box>
    </Box>
  );
}
