import { LinkProps } from "../../../types/ui-props";
import styles from "./rolling-link.module.scss";

const RollingLink = (props: LinkProps) => {
  const {linkText, linkTo} = props;

  return (
    <a href={linkTo} className={styles['rolling-link']}>
      <span className={styles['rolling-link__front']}>{linkText}</span>
      <span className={styles['rolling-link__back']}>{linkText}</span>
    </a>
  )
}

export { RollingLink };
