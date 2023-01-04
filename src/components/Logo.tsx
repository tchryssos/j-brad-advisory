import styled from '@emotion/styled';

import { getMediaQueryMinWidth } from '~/constants/theme';
import { pxToRem } from '~/logic/util/styles';

import { SvgBase } from './SvgBase';

interface LogoProps {
  className?: string;
  fill?: 'white' | 'black';
}

const Path = styled.path<Pick<LogoProps, 'fill'>>`
  fill: ${({ theme, fill = 'black' }) =>
    fill === 'white' ? theme.colors.gray[0] : theme.colors.gray[9]};
`;

const SvgWrapper = styled(SvgBase)`
  width: fit-content;
  height: ${pxToRem(26)};
  ${getMediaQueryMinWidth('md')} {
    height: ${pxToRem(40)};
  }
`;

export function Logo({ className, fill }: LogoProps) {
  return (
    <SvgWrapper
      className={className}
      title="J. Bradford"
      titleId="j-bradford-logo"
      viewBox="0 0 138 34"
    >
      <Path
        d="M34.468 19.106c0-.457-.14-.762-.422-.914-.27-.152-.668-.229-1.195-.229h-8.156v-1.265h8.156c1.921 0 2.882.802 2.882 2.408 0 .902-.263 1.552-.79 1.95-.528.4-1.225.598-2.092.598h-8.156V20.39h8.156c1.078 0 1.617-.428 1.617-1.283ZM23.992 29.247h-1.265V7.734H32.85c.797 0 1.476.246 2.039.738.562.48.843 1.084.843 1.81 0 .961-.263 1.658-.79 2.092-.528.422-1.225.633-2.092.633h-8.156V11.74h8.156c1.078 0 1.617-.486 1.617-1.459 0-.398-.153-.709-.457-.931-.305-.235-.692-.352-1.16-.352h-8.859v20.248Zm.703-14.975h8.156c1.16 0 2.138-.345 2.935-1.037.808-.703 1.213-1.687 1.213-2.953 0-1.02-.422-1.91-1.266-2.671-.832-.762-1.792-1.143-2.882-1.143H21.46v22.78h-1.265V5.202H32.85c1.441 0 2.7.51 3.779 1.529 1.09 1.008 1.634 2.191 1.634 3.55 0 1.067-.252 1.998-.756 2.795a4.99 4.99 0 0 1-2.003 1.846c1.84.656 2.76 1.992 2.76 4.007 0 1.594-.528 2.87-1.583 3.832-1.054.949-2.331 1.424-3.831 1.424h-8.156V22.92h8.156c1.16 0 2.138-.346 2.935-1.037.808-.703 1.213-1.687 1.213-2.953 0-.855-.305-1.611-.914-2.267-.61-.657-1.506-1.037-2.69-1.143a6.057 6.057 0 0 1-.544.018h-8.156v-1.266Zm16.1-3.99c0 1.64-.58 3.123-1.74 4.447 1.16 1.29 1.74 2.69 1.74 4.201 0 1.465-.369 2.8-1.107 4.008a7.68 7.68 0 0 1-2.918 2.794 8.076 8.076 0 0 1-3.92.985h-8.155V25.45h8.156c1.828 0 3.398-.61 4.71-1.828 1.313-1.23 1.969-2.795 1.969-4.693 0-.68-.176-1.43-.528-2.25-.34-.832-.814-1.464-1.423-1.898 1.3-1.219 1.95-2.719 1.95-4.5 0-1.71-.667-3.193-2.003-4.447-1.336-1.265-2.894-1.898-4.675-1.898H18.93v25.31h-1.265V2.672H32.85c1.394 0 2.7.345 3.92 1.037a7.82 7.82 0 0 1 2.935 2.794 7.044 7.044 0 0 1 1.09 3.78Zm-.298 4.518c1.042-1.395 1.564-2.9 1.564-4.518a8.213 8.213 0 0 0-1.266-4.411 9.082 9.082 0 0 0-3.374-3.252 9.074 9.074 0 0 0-4.57-1.213H16.399v27.841h-1.266V.141h17.718c1.851 0 3.58.457 5.185 1.37 1.617.915 2.9 2.157 3.85 3.727a9.439 9.439 0 0 1 1.44 5.044c0 1.723-.486 3.234-1.459 4.535.973 1.348 1.46 2.719 1.46 4.113 0 1.57-.282 3.012-.844 4.324-.563 1.3-1.324 2.384-2.285 3.252-.95.867-2.057 1.54-3.322 2.02-1.266.481-2.607.721-4.025.721h-8.156v-1.265h8.156c1.23 0 2.408-.229 3.533-.685a9.451 9.451 0 0 0 2.935-1.899 8.85 8.85 0 0 0 1.986-2.882 8.673 8.673 0 0 0 .756-3.586c0-.562-.135-1.236-.404-2.021a6.168 6.168 0 0 0-1.16-2.11ZM55.736 14.764h7.628c1.16 0 2.138-.375 2.935-1.124.809-.75 1.213-1.817 1.213-3.2 0-1.019-.422-1.933-1.266-2.741-.843-.82-1.804-1.23-2.882-1.23H52.5v22.779h-1.265V5.202h12.128c1.43 0 2.689.533 3.779 1.6 1.09 1.054 1.634 2.267 1.634 3.638 0 1.687-.527 3.04-1.582 4.06-1.054 1.02-2.331 1.529-3.831 1.529h-7.628v-1.266Zm0 2.531h7.628c1.828 0 3.398-.638 4.71-1.915 1.313-1.29 1.969-2.936 1.969-4.94 0-1.722-.674-3.234-2.021-4.534-1.336-1.313-2.889-1.969-4.658-1.969H49.97v25.31h-1.265V2.672h14.659c1.394 0 2.7.357 3.92 1.072a8.144 8.144 0 0 1 2.935 2.882c.726 1.196 1.09 2.467 1.09 3.814 0 2.309-.786 4.242-2.356 5.8-1.558 1.548-3.422 2.32-5.59 2.32h-7.627v-1.265Zm0 2.531h7.628c1.64 0 3.164-.404 4.57-1.212 1.406-.809 2.53-1.934 3.374-3.375.844-1.453 1.266-3.053 1.266-4.799 0-1.581-.422-3.064-1.266-4.446a9.407 9.407 0 0 0-3.374-3.34 8.878 8.878 0 0 0-4.57-1.248H47.439v27.841h-1.265V.141h17.19c1.84 0 3.568.474 5.185 1.423 1.617.938 2.9 2.203 3.85 3.797.96 1.582 1.44 3.275 1.44 5.08 0 2.085-.45 3.92-1.353 5.501-.89 1.582-2.103 2.818-3.638 3.709l3.269 9.596H70.78l-3.129-8.999c-.468.188-.826.317-1.072.387l2.936 8.612H68.18l-2.865-8.313c-.106.023-.48.064-1.125.123l2.724 8.19h-1.336l-2.689-8.155h-1.142l2.566 8.155h-1.336l-2.584-8.155h-4.657v-1.266Zm-.704 9.421h-1.265V7.734h9.597c.785 0 1.459.27 2.021.808.574.528.861 1.16.861 1.899 0 2.038-.96 3.058-2.882 3.058h-7.628v-1.266h7.628c.504 0 .896-.129 1.177-.386.293-.27.44-.739.44-1.406 0-.41-.158-.75-.475-1.02C64.202 9.14 63.821 9 63.364 9h-8.332v20.248ZM2.024 25.31H0v-1.406h2.024c.581 0 1.07-.26 1.464-.781.395-.52.593-1.21.593-2.07V0h1.185v21.053c0 1.237-.313 2.259-.938 3.066-.626.794-1.394 1.191-2.304 1.191Zm0 2.813H0v-1.407h2.024c1.229 0 2.27-.553 3.126-1.66.867-1.106 1.3-2.44 1.3-4.003V0h1.185v21.053c0 1.953-.548 3.62-1.645 5-1.086 1.38-2.408 2.07-3.966 2.07Zm0 2.812H0v-1.406h2.024c1.887 0 3.488-.827 4.805-2.48 1.327-1.654 1.99-3.653 1.99-5.996V0h1.185v21.053c0 1.784-.356 3.437-1.07 4.96-.701 1.51-1.666 2.708-2.895 3.594-1.229.885-2.567 1.328-4.015 1.328Zm0 2.812H0v-1.406h2.024c1.25 0 2.44-.3 3.57-.898 1.13-.6 2.101-1.4 2.913-2.402.823-1.016 1.476-2.22 1.958-3.614.483-1.393.724-2.85.724-4.374V0h1.185v21.053c0 1.718-.274 3.359-.823 4.921-.537 1.563-1.272 2.917-2.205 4.063a10.36 10.36 0 0 1-3.307 2.695 8.431 8.431 0 0 1-4.015 1.015ZM116.094 21.654V7.734h8.63c1.394 0 2.589.685 3.585 2.056 1.008 1.36 1.512 2.994 1.512 4.904 0 1.922-.504 3.562-1.512 4.921-.996 1.36-2.191 2.04-3.585 2.04h-8.63Zm1.265-1.265h7.365c1.043 0 1.933-.557 2.671-1.67.75-1.113 1.125-2.455 1.125-4.025 0-1.582-.375-2.924-1.125-4.025-.738-1.113-1.628-1.67-2.671-1.67h-7.365v11.39Zm-2.531 2.53h9.896c1.746 0 3.246-.802 4.499-2.407 1.266-1.617 1.899-3.556 1.899-5.818 0-1.488-.293-2.865-.879-4.13-.574-1.266-1.354-2.262-2.338-2.988-.972-.739-2.033-1.108-3.181-1.108h-9.896V22.92Zm-1.265 1.267V5.203h11.161c1.371 0 2.648.422 3.831 1.265 1.184.844 2.121 1.998 2.813 3.463.703 1.453 1.054 3.04 1.054 4.763 0 1.71-.351 3.299-1.054 4.763-.692 1.465-1.629 2.62-2.813 3.463-1.183.844-2.46 1.265-3.831 1.265h-11.161Zm-1.266 1.265h12.427c1.605 0 3.093-.48 4.464-1.441 1.383-.961 2.484-2.268 3.305-3.92.82-1.652 1.23-3.45 1.23-5.396 0-1.933-.41-3.726-1.23-5.378-.821-1.664-1.922-2.977-3.305-3.938-1.382-.96-2.871-1.44-4.464-1.44h-12.427V25.45Zm-1.265 1.265V2.672h13.692c1.828 0 3.533.539 5.115 1.617 1.581 1.066 2.841 2.525 3.779 4.376.937 1.852 1.406 3.861 1.406 6.03 0 2.167-.469 4.177-1.406 6.028-.938 1.851-2.198 3.316-3.779 4.394-1.582 1.066-3.287 1.6-5.115 1.6h-13.692Zm-1.266 1.266h14.958c1.535 0 3.017-.351 4.447-1.055a11.887 11.887 0 0 0 3.708-2.83c1.043-1.183 1.875-2.595 2.496-4.235.633-1.653.949-3.375.949-5.168 0-1.793-.316-3.51-.949-5.15-.621-1.64-1.453-3.052-2.496-4.236a11.766 11.766 0 0 0-3.708-2.847c-1.43-.703-2.912-1.055-4.447-1.055h-14.958v26.576Zm14.958 1.265h-16.223V.141h16.223c2.285 0 4.417.65 6.398 1.95 1.98 1.301 3.556 3.07 4.728 5.309 1.183 2.238 1.775 4.67 1.775 7.294 0 1.969-.352 3.855-1.055 5.66-.691 1.793-1.617 3.34-2.777 4.64a13.2 13.2 0 0 1-4.13 3.111 11.252 11.252 0 0 1-4.939 1.142ZM95.954 15.416c0-1.704-.512-3.022-1.535-3.954-1.022-.932-2.375-1.398-4.058-1.398-1.425 0-2.648.506-3.67 1.518-1.023 1.012-1.535 2.223-1.535 3.634 0 .799.104 1.518.31 2.157.208.625.486 1.151.836 1.577.362.413.79.76 1.282 1.039.492.266 1.003.459 1.534.579.544.12 1.12.18 1.728.18 1.476 0 2.822-.373 4.04-1.119v1.438a8.402 8.402 0 0 1-4.06 1.018 9 9 0 0 1-2.64-.379 7.38 7.38 0 0 1-2.234-1.178c-.673-.533-1.21-1.252-1.611-2.157-.389-.918-.583-1.97-.583-3.155 0-1.837.628-3.394 1.884-4.672 1.255-1.279 2.828-1.918 4.719-1.918 2.084 0 3.767.606 5.049 1.818 1.294 1.198 1.942 2.855 1.942 4.972v14.178h-1.398V15.416Zm4.194 0v14.178H98.75V15.416c0-2.516-.783-4.513-2.35-5.99-1.566-1.492-3.58-2.237-6.04-2.237-2.278 0-4.181.779-5.709 2.336-1.527 1.558-2.291 3.455-2.291 5.691 0 1.358.226 2.576.68 3.654.465 1.079 1.093 1.944 1.883 2.596a8.703 8.703 0 0 0 2.641 1.498c.984.333 2.02.5 3.107.5 1.476 0 2.88-.354 4.214-1.06v1.518c-1.398.6-2.809.9-4.233.9-1.282 0-2.499-.2-3.651-.6a9.823 9.823 0 0 1-3.088-1.777c-.906-.786-1.624-1.797-2.155-3.035-.531-1.252-.796-2.65-.796-4.194 0-2.622.9-4.852 2.699-6.69 1.812-1.85 4.046-2.775 6.7-2.775 1.864 0 3.534.393 5.01 1.178 1.476.772 2.641 1.897 3.495 3.375.855 1.477 1.282 3.181 1.282 5.112Zm2.797 0v14.178h-1.399V15.416c0-2.197-.492-4.14-1.476-5.831-.97-1.704-2.304-3.009-4-3.914-1.696-.905-3.6-1.358-5.71-1.358-2.006 0-3.838.493-5.495 1.478a10.548 10.548 0 0 0-3.903 3.954c-.933 1.664-1.399 3.488-1.399 5.471 0 1.704.305 3.262.913 4.673.609 1.398 1.424 2.55 2.447 3.454a11.723 11.723 0 0 0 3.515 2.117c1.32.493 2.7.739 4.136.739 1.463 0 2.9-.313 4.311-.939v1.458c-1.476.573-2.925.859-4.35.859-2.24 0-4.298-.52-6.175-1.558-1.877-1.038-3.38-2.51-4.505-4.413-1.127-1.904-1.69-4.034-1.69-6.39 0-1.677.31-3.275.932-4.792.635-1.518 1.489-2.83 2.564-3.934 1.074-1.105 2.369-1.984 3.883-2.636a12.047 12.047 0 0 1 4.817-.979c2.369 0 4.505.52 6.408 1.558 1.916 1.038 3.424 2.516 4.525 4.433 1.1 1.917 1.651 4.1 1.651 6.55Zm2.796 0v14.178h-1.398V15.416c0-2.716-.615-5.139-1.845-7.269-1.23-2.143-2.907-3.794-5.03-4.952-2.123-1.171-4.492-1.757-7.107-1.757-2.512 0-4.81.619-6.894 1.857a13.393 13.393 0 0 0-4.914 5.032c-1.19 2.103-1.786 4.4-1.786 6.89 0 1.637.252 3.194.757 4.672.518 1.464 1.217 2.749 2.097 3.854a14.963 14.963 0 0 0 3.069 2.835 13.823 13.823 0 0 0 7.845 2.437c1.528 0 2.978-.3 4.35-.899v1.478c-1.437.519-2.913.778-4.427.778a15.67 15.67 0 0 1-4.583-.678 14.821 14.821 0 0 1-4.117-1.997 16.358 16.358 0 0 1-3.321-3.136c-.958-1.21-1.709-2.622-2.253-4.233-.543-1.61-.815-3.315-.815-5.112 0-2.063.375-4.027 1.126-5.89.764-1.878 1.8-3.495 3.107-4.853 1.32-1.371 2.913-2.456 4.777-3.255C86.257.406 88.25 0 90.361 0c2.149 0 4.168.373 6.059 1.118 1.89.746 3.521 1.784 4.893 3.115 1.373 1.318 2.454 2.942 3.243 4.873.79 1.93 1.185 4.033 1.185 6.31Z"
        fill={fill}
      />
    </SvgWrapper>
  );
}
