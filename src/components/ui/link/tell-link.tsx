import removedDashes from "../../../utils/removeDashes";
import { TellText } from "../text";
import styles from "./tell-link.module.scss";

export type TellLinkProps = {
  telnum: string;
  color?: "primary" | "accent" | "white"; // if this prop is not passed, color is white.
  hasIcon?: boolean;
}

const TellLink = (props: TellLinkProps) => {
  const {telnum, color, hasIcon} = props;
  const telnum_no_dash = removedDashes(telnum);
  
  const baseClass = "tel";
  const modifierClass = hasIcon ? "tel--has-icon" : "";
  const modifierColorClass = color ? "tel--" + color : "";


  return (
    <a href={`tel:${telnum_no_dash}`} className={`${styles[baseClass]}${modifierClass ? " " + styles[modifierClass] : ""}${modifierColorClass ? " " + styles[modifierColorClass] : ""}`}>
      <TellText
        telnum={telnum}
        color={color}
        hasIcon={hasIcon}
      />
    </a>
  )
}

export { TellLink };
