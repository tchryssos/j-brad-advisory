import { MantineColor } from '@mantine/core';
import { styled } from '@mui/material';

interface ColorExtenderProps {
  colorTuple: [MantineColor, number];
}

const Extender = styled.div<ColorExtenderProps>`
  :before {
    content: '';
    background-color: ${({ theme, colorTuple }) =>
      theme.palette[colorTuple[0]][colorTuple[1]]};
    position: absolute;
    height: 100%;
    width: 12000px;
    left: -6000px;
    top: 0;
    z-index: -1;
  }
`;

export function ColorExtender({ colorTuple }: ColorExtenderProps) {
  return <Extender colorTuple={colorTuple} />;
}
