import { LinkProps } from "../../../types/ui-props";
import styles from "./link-label.module.scss";

const LinkLabel = (props: LinkProps) => {
  const {linkText, linkTo} = props;
  return (
    <a href={linkTo} className={styles['link-label']}>
      {linkText}
    </a>
  )
}

export { LinkLabel };
