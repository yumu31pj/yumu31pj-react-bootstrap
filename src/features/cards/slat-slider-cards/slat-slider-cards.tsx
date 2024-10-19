import { useState } from "react";
import styles from "./slat-slider-cards.module.scss";

const SlatSliderCards = () => {

  const [visibleIndex, setVisibleIndex] = useState(1)

  const onClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const index = Number(event.currentTarget.getAttribute('data-index'));
    setVisibleIndex(index);
  }

  return (
    <div className={styles['slat-slider']}>
      <div className={styles['slat-slider__inner']}>
        <div 
          className={`${styles['slider-item']} ${visibleIndex === 1 ? styles['slider-item--visible'] : ''}`}
          data-index="1" 
          onClick={onClickHandler}
        >
          <div className={styles['slider-item__body']}>body 1</div>
          <div className={styles['slider-item__slat']}>slat 1</div>
        </div>

        <div 
          className={`${styles['slider-item']} ${visibleIndex === 2 ? styles['slider-item--visible'] : ''}`}
          data-index="2"
          onClick={onClickHandler}
        >
          <div className={styles['slider-item__body']}>body 2</div>
          <div className={styles['slider-item__slat']}>slat 2</div>
        </div>

        <div 
          className={`${styles['slider-item']} ${visibleIndex === 3 ? styles['slider-item--visible'] : ''}`}
          data-index="3" 
          onClick={onClickHandler}>
          <div className={styles['slider-item__body']}>body 3</div>
          <div className={styles['slider-item__slat']}>slat 3</div>
        </div>
      </div>
    </div>
  )
}

export default SlatSliderCards;