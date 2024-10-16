import styles from "./tell-link.module.scss";

export type TellProps = {
  telnum: string;
  color?: "primary" | "accent"; // if this prop is not passed, color is white.
  hasIcon?: boolean;
}

const TellLink = (props: TellProps) => {
  const {telnum, color, hasIcon} = props;
  const baseClass = "tel";
  const modifierClass = hasIcon ? "tel--has-icon" : "";
  const modifierColorClass = color ? "tel--" + color : "";

  return (
    <a href={`tel:${telnum}`} className={`${styles[baseClass]}${modifierClass ? " " + styles[modifierClass] : ""}${modifierColorClass ? " " + styles[modifierColorClass] : ""}`}>
      {telnum}
    </a>
  )
}

export { TellLink };
