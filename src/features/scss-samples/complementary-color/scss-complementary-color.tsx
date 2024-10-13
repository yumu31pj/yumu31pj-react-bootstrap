import styles from "./scss-complementary-color.module.scss";

const ScssComplementaryColor = () => {
  return (
      <>
      <div className={styles['colors']}>
        <div className={`${styles['color']} ${styles['color--base']}`}><span>Base Color</span></div>
        <div className={`${styles['color']} ${styles['color--complementary']}`}><span>Complementary Color</span></div>
      </div>

      <p>Using complementary_color</p>
    </>
  )
}

export default ScssComplementaryColor;