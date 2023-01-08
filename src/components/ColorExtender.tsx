import styled from '@emotion/styled';
import { MantineColor } from '@mantine/core';

interface ColorExtenderProps {
  colorTuple: [MantineColor, number];
}

const Extender = styled.div<ColorExtenderProps>`
  :before {
    content: '';
    background-color: ${({ theme, colorTuple }) =>
      theme.colors[colorTuple[0]][colorTuple[1]]};
    position: absolute;
    height: 100%;
    width: 9000px;
    left: -4500px;
    top: 0;
    z-index: -1;
  }
`;

export function ColorExtender({ colorTuple }: ColorExtenderProps) {
  return <Extender colorTuple={colorTuple} />;
}
