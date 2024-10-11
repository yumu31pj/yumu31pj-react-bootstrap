import styles from "./scroll-snap-wrapper.module.scss";

type ScrollSnapWrapperProps = {
  children: React.ReactNode;
}

const ScrollSnapWrapper = (props: ScrollSnapWrapperProps) => {
  const {children} = props;
  return (
    <div className={styles['container']}>
      {/* children should be section elements */}
      {children}
    </div>
  )
}

export { ScrollSnapWrapper };
