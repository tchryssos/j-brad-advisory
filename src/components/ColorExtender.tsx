import { styled } from '@mui/material';

interface ColorExtenderProps {
  color: string;
}

const Extender = styled('div')<ColorExtenderProps>`
  :before {
    content: '';
    background-color: ${({ color }) => color};
    position: absolute;
    height: 100%;
    width: 12000px;
    left: -6000px;
    top: 0;
    z-index: -1;
  }
`;

export function ColorExtender({ color }: ColorExtenderProps) {
  return <Extender color={color} />;
}
