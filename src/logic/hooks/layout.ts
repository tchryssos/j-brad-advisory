import { useMediaQuery } from '@mantine/hooks';

import { BREAKPOINT_STRINGS } from '~/constants/theme';

export const useGetGutterSize = () => {
  const atLeastSm = useMediaQuery(BREAKPOINT_STRINGS.sm);
  const atLeastMd = useMediaQuery(BREAKPOINT_STRINGS.md);

  if (atLeastMd) {
    return 60;
  }
  if (atLeastSm) {
    return 32;
  }
  return 16;
};
