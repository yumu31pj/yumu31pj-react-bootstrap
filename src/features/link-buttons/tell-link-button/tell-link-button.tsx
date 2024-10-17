import { TellText, TellTextProps } from "../../../components/ui/text";
import removedDashes from "../../../utils/removeDashes";
import styles from "./tell-link-button.module.scss";

type TellLinkButtonProps = {
  telnumItem: TellTextProps,
  upperText: string,
  lowerText: string,
};

const TellLinkButton = (props: TellLinkButtonProps) => {
  const {telnumItem, upperText, lowerText} = props;
  const telnum_no_dash = removedDashes(telnumItem.telnum)

  return (
    <a href={`tel:${telnum_no_dash}`} className={styles['tell-link-button']}>
      <p>{upperText}</p>
      <TellText
        telnum={telnumItem.telnum}
        color={telnumItem.color}
        hasIcon={telnumItem.hasIcon}
      />
      <p>{lowerText}</p>
    </a>
  )
}

export default TellLinkButton;