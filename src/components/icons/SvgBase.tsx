import styled from '@emotion/styled';

const Svg = styled.svg`
  height: 100%;
  width: 100%;
`;

export interface BaseSvgProps {
  className?: string;
  viewBox?: string;
  title: string;
  titleId: string;
  children: React.ReactNode;
}

export function SvgBase({
  viewBox = '0 0 24 24',
  title,
  titleId,
  className,
  children,
}: BaseSvgProps) {
  return (
    <Svg
      aria-labelledby={titleId}
      className={className}
      role="img"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={titleId}>{title}</title>
      {children}
    </Svg>
  );
}
