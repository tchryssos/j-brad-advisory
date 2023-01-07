import styled from '@emotion/styled';

import { pxToRem } from '~/logic/util/styles';

import { SvgBase } from './SvgBase';

interface LogoProps {
  className?: string;
}

const Path = styled.path`
  fill: none;
  stroke: ${({ theme }) => theme.colors.gray[9]};
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const SvgWrapper = styled(SvgBase)`
  width: fit-content;
  height: ${pxToRem(24)};
`;

export function CloseIcon({ className }: LogoProps) {
  return (
    <SvgWrapper
      className={className}
      title="Close"
      titleId="close-icon"
      viewBox="0 0 24 24"
    >
      <Path d="M18 6 6 18M6 6l12 12" />
    </SvgWrapper>
  );
}
