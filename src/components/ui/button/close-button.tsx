import styles from "./close-button.module.scss";

type CloseButtonProps = {
  onClose: (isClose: boolean) => void;
}

const CloseButton = (props: CloseButtonProps) => {
  const {onClose} = props;

  const handleClick = () => {
    onClose(true);
  };

  return (
    <button className={styles["close-button"]} onClick={handleClick}></button>
  )
}

export { CloseButton };
