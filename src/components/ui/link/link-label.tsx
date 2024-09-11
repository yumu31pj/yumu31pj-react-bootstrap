import { LinkProps } from "../../../types/ui-props";
import styles from "./link-label.module.scss";

type LinkLabelProps = LinkProps & {
  shape?: 'round' | 'rectangle';
}

const LinkLabel = (props: LinkLabelProps) => {
  const {linkText, linkTo, shape} = props;

  const modifier = shape ? shape : "rectangle"

  const baseClass = 'link-label';
  const modifierClass = baseClass + '--' + modifier;

  return (
    <a href={linkTo} className={`${styles['link-label']}${modifierClass && " " + styles[modifierClass]}`}>
      {linkText}
    </a>
  )
}

export { LinkLabel };
