import styles from "./submit-button.module.scss";
type SubmitButtonProps = {
  buttonText: string;
}

const SubmitButton = (props: SubmitButtonProps) => {
  const {buttonText} = props;

  return (
    <button className={styles["submit-button"]}>
      {buttonText}
    </button>
  )
}

export { SubmitButton };
