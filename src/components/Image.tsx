import { styled } from '@mui/material';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { pxToRem } from '~/logic/util/styles';

interface ImageProps extends NextImageProps {
  minHeight?: number;
}

function WrappedImage({ className, ...rest }: ImageProps) {
  return (
    <span className={className}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <NextImage {...rest} />
    </span>
  );
}

export const Image = styled(WrappedImage)<ImageProps>`
  width: 100%;
  min-height: ${({ minHeight }) => pxToRem(minHeight || 0)};
  position: relative;
  display: block;
`;
