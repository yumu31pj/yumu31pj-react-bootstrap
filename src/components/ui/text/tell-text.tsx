import styles from "./tell-text.module.scss";

export type TellTextProps = {
  telnum: string;
  color?: "primary" | "accent" | "white"; // if this prop is not passed, color is white.
  hasIcon?: boolean;
}

const TellText = (props: TellTextProps) => {
  const {telnum, color, hasIcon} = props;
  
  const baseClass = "tel";
  const modifierClass = hasIcon ? "tel--has-icon" : "";
  const modifierColorClass = color ? "tel--" + color : "";


  return (
    <div className={`${styles[baseClass]}${modifierClass ? " " + styles[modifierClass] : ""}${modifierColorClass ? " " + styles[modifierColorClass] : ""}`}>
      {telnum}
    </div>
  )
}

export { TellText };
