/**
 * Link
 */
export type LinkProps = {
  linkText: string;
  linkTo: string;
  isExternal?: boolean;
}

export type LinkItemsProps = {
  linkItems: LinkProps[];
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
  hasShade?: boolean;
}

export type PictureItemsProps = {
  pictureItems: PictureProps[];
}

/**
 * Form
 */
export type AddressProps = {
  id?: string;
  name: string;
  labelText?: string;
  placeholder?: string;
  isRequired?: boolean;
}

export type LabelProps = {
  text: string;
  htmlFor?: string;
  isActive: boolean;
}

export type CheckboxProps = {
  id?: string;
  name: string;
  value: string;
  text: string;
}

export type EmailProps = {
  id?: string;
  name: string;
  labelText?: string;
  placeholder?: string;
  isRequired?: boolean;
}

export type PasswordProps = {
  id?: string;
  name: string;
  placeholder?: string;
  isRequired?: boolean;
  labelText?: string;
}

export type PhoneProps = {
  id?: string;
  name: string;
  labelText?: string;
  placeholder?: string;
  isRequired?: boolean;
}

export type RadioProps = {
  id?: string;
  name: string;
  value: string;
  text: string;
}

export type SelectProps = {
  id?: string;
  name: string;
  labelText?: string;
  isRequired?: boolean;
  selectItems: SelectItemProps[];
}

export type SelectItemProps = {
  valueText: string;
  displayText: string;
}

export type InputTextProps = {
  id?: string;
  name: string;
  labelText?: string;
  placeholder?: string;
  isRequired?: boolean;
  value?: string;
}

export type TextAreaProps = {
  id?: string;
  name: string;
  labelText?: string;
  placeholder?: string;
  isRequired?: boolean;
  value?: string;
}

export type ZipCodeType = {
  id?: string;
  name: string;
  labelText?: string;
  placeholder?: string;
  isRequired?: boolean;
}

/**
 * FAQ
 */
export type FAQTextProps = {
  question: string;
  answer: string;
}

export type FAQListProps = {
  faqItems: FAQTextProps[];
}

/**
 * Buttons
 */

export type HamburgerButtonType = {
  isHamburgerOpen: boolean;
  toggleIsHamburgerOpen: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * Layout
 */
export type WrapperProps = {
  type: "div" | "section";
  children: React.ReactNode;
}