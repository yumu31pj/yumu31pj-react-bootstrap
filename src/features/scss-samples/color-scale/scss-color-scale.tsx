import styles from "./scss-color-scale.module.scss";

const ScssColorScale = () => {
  const lightnessArray = Array.from({ length: 11 }, (_, index) => index * 10);

  return (
    <>
      <div className={styles['colors']}>
        {lightnessArray.map((lightness) => (
          <div
          key={lightness}
          className={`${styles['color']} ${styles[`color--${lightness}`]}`}
          >
            {lightness}%
          </div>
        ))}
      </div>
      <p>Using color_scale</p>
    </>
  );
};  

export default ScssColorScale;
