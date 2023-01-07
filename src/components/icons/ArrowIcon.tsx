import styled from '@emotion/styled';

import { pxToRem } from '~/logic/util/styles';

import { SvgBase } from './SvgBase';

interface LogoProps {
  className?: string;
}

const Path = styled.path`
  fill: none;
  stroke: inherit;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const SvgWrapper = styled(SvgBase)`
  width: fit-content;
  height: ${pxToRem(12)};
`;

export function ArrowIcon({ className }: LogoProps) {
  return (
    <SvgWrapper
      className={className}
      title="To LinkedIn"
      titleId="to-linked-in"
      viewBox="0 0 12 12"
    >
      <Path d="M1 11 11 1M1 1h10v10" />
    </SvgWrapper>
  );
}
