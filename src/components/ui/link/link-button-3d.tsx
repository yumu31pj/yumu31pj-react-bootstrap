import { LinkProps } from "../../../types/ui-props";
import styles from "./link-button-3d.module.scss";

const LinkButton3D = (props: LinkProps) => {
  const {linkText, linkTo, isExternal} = props;

  return (
    <a 
      href={linkTo} 
      className={styles['link-button-3d']}
      {...(isExternal ? { rel: "noopener noreferrer", target: "_blank" } : {})}
    >
      {linkText}
    </a>
  )
}

export default LinkButton3D;