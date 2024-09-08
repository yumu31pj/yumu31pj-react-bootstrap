import { LinkItemsProps, LinkProps } from "../../../types/ui-props";
import styles from "./vertical-links.module.scss";

const VerticalLinks = (props: LinkItemsProps) => {
  const {linkItems} = props;

  return (
    <ul className={styles['links']}>
      {linkItems.map((linkItem: LinkProps, key: number) => (
        <li key={key} className={styles['links__item']}>
          <a href={linkItem.linkTo} {...(linkItem.isExternal && { target: "_blank", rel: "noreferrer noopener" })}>
            {linkItem.linkText}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default VerticalLinks;