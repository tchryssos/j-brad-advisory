import styled from '@emotion/styled';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { WheelSize } from '~/constants/images';
import { BREAKPOINT_STRINGS } from '~/constants/theme';

interface WheelImageProps {
  rotationDeg: number;
}

const WheelImage = styled(Image)<WheelImageProps>`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-50%) rotate(${({ rotationDeg }) => rotationDeg}deg);
`;

export function ColorWheel() {
  const atLeastMd = useMediaQuery(BREAKPOINT_STRINGS.md);
  const scrollTopRef = useRef(globalThis.window?.scrollY || 0);

  const [rotationDeg, setRotationDeg] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (globalThis.window.scrollY > scrollTopRef.current) {
        setRotationDeg((prev) => prev + 1);
      } else {
        setRotationDeg((prev) => prev - 1);
      }
      scrollTopRef.current = globalThis.window.scrollY;
    };
    window.onscroll = onScroll;

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <WheelImage
      alt=""
      height={atLeastMd ? WheelSize.md : WheelSize.base}
      role="presentation"
      rotationDeg={rotationDeg}
      src="/color_wheel.png"
      width={atLeastMd ? WheelSize.md : WheelSize.base}
    />
  );
}
