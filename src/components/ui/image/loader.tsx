import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles['loader']}>
      <div className={styles['loader-animation']}></div>
    </div>
  )
}

export { Loader };
