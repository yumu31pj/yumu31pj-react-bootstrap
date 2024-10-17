import styles from "./speech-bubble.module.scss";

export type SpeechBubbleProps = {
  text: string;
}

const SpeechBubble = (props: SpeechBubbleProps) => {
  const {text} = props;
  return (
    <p className={styles['speech-bubble']}>
      {text}
    </p>
  )
}

export { SpeechBubble };

