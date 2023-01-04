import styled from '@emotion/styled';
import { useMediaQuery } from '@mantine/hooks';
import throttle from 'lodash.throttle';
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

  // TODO - If we notice a performance hit from these re-renders
  // lets try an on/off scroll that triggers the rotation
  // see https://www.30secondsofcode.org/js/s/on-scroll-stop
  useEffect(() => {
    const onScroll = throttle(() => {
      if (globalThis.window.scrollY > scrollTopRef.current) {
        setRotationDeg((prev) => prev + 0.5);
      } else {
        setRotationDeg((prev) => prev - 0.5);
      }
      scrollTopRef.current = globalThis.window.scrollY;
    }, 16);
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
