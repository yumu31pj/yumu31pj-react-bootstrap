import styles from "./scss-color-saturation.module.scss";

const ScssColorSaturation = () => {
  const lightnessArray = Array.from({ length: 11 }, (_, index) => index * 10);

  return (
    <>
      <div className={styles['colors']}>
        {lightnessArray.map((saturation) => (
          <div
            key={saturation}
            className={`${styles['color']} ${styles[`color--${saturation}`]}`}
          >
            {saturation}%
          </div>
        ))}
      </div>
      <p>Using color_saturation</p>
    </>
  );
};  

export default ScssColorSaturation;
