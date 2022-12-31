import styled from '@emotion/styled';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { pxToRem } from '~/logic/util/styles';

interface ImageProps extends NextImageProps {}

function WrappedImage({ className, ...rest }: ImageProps) {
  return (
    <span className={className}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <NextImage {...rest} />
    </span>
  );
}

export const Image = styled(WrappedImage)`
  width: 100%;
  min-height: ${pxToRem(208)};
  position: relative;
  display: block;
`;
