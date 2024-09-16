import { NoLinkButtonProps } from "../../../types/ui-props";
import styles from "./no-link-button.module.scss";

const NoLinkButton = (props: NoLinkButtonProps) => {
  const {buttonText} = props;

  return (
    <div className={styles['button']}>
      <span className={styles['button__text']}>{buttonText}</span>
      <span className={styles['button__icon']}>
        <svg viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
          <g>
            <line x1="1" y1="5" x2="15" y2="5"></line>
            <polyline points="11 1 15 5 11 9"></polyline>
          </g>
        </svg>
      </span>
    </div>
  )
}

export { NoLinkButton };
