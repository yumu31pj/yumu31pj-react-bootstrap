export type LinkProps = {
  linkText: string;
  linkTo: string;
  isExternal?: boolean;
}

/**
 * Props for picture tag
 */
export type PictureProps = {
  srcSP: string;
  srcPC?: string;
  srcWebpPC?: string;
  srcWebpSP?: string;
  width?: number;
  height?: number;
  altText: string;
  breakpoint?: number;
}