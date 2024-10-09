import { LinkProps } from "../../../types/ui-props";
import styles from "./link-view-more-arrow.module.scss";

const LinkViewMoreArrow = (props: LinkProps) => {
  const {linkText, linkTo} = props;
  return (
    <a href={linkTo} className={styles['link']}>
      <span className={styles['link__text']}>{linkText}</span>
      <i className={styles['link__arrow']}></i>
    </a>
  )
}

export { LinkViewMoreArrow };
