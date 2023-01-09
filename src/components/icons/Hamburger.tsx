import { styled } from '@mui/material';

import { pxToRem } from '~/logic/util/styles';

import { SvgBase } from './SvgBase';

interface LogoProps {
  className?: string;
}

const Path = styled('path')`
  fill: none;
  stroke: inherit;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const SvgWrapper = styled(SvgBase)`
  width: fit-content;
  height: ${pxToRem(24)};
`;

export function HamburgerIcon({ className }: LogoProps) {
  return (
    <SvgWrapper
      className={className}
      title="Open menu"
      titleId="menu-icon"
      viewBox="0 0 24 25"
    >
      <Path d="M3 12.873h18M3 6.874h18M3 18.873h18" />
    </SvgWrapper>
  );
}
