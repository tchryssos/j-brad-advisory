import { useMediaQuery } from '@mui/material';

import { BREAKPOINT_STRINGS } from '~/constants/theme';

import { pxToRem } from '../util/styles';

export const useGetGutterSize = () => {
  const atLeastSm = useMediaQuery(BREAKPOINT_STRINGS.sm);
  const atLeastMd = useMediaQuery(BREAKPOINT_STRINGS.md);

  let gutterSize = 16;

  if (atLeastMd) {
    gutterSize = 60;
  }
  if (atLeastSm) {
    gutterSize = 32;
  }
  return pxToRem(gutterSize);
};
