import styled from '@emotion/styled';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';

import { WheelSize } from '~/constants/images';
import { BREAKPOINT_STRINGS } from '~/constants/theme';

const WheelImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-50%);
`;

export function ColorWheel() {
  const atLeastMd = useMediaQuery(BREAKPOINT_STRINGS.md);

  return (
    <WheelImage
      alt=""
      height={atLeastMd ? WheelSize.md : WheelSize.base}
      role="presentation"
      src="/color_wheel.png"
      width={atLeastMd ? WheelSize.md : WheelSize.base}
    />
  );
}
