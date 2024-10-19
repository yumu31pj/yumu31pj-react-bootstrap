import { useState } from "react";
import styles from "./flip-card.module.scss";

type FlipCardProps = {
  frontCard: React.ReactNode;
  backCard: React.ReactNode;
}

const FlipCard = (props: FlipCardProps) => {
  const {frontCard, backCard} = props;
  const [isFlipped, setIsFlipped] = useState(false);

  const onClickHandler = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className={`${styles['flip-card']} ${isFlipped ? styles['flip-card--flipped'] : ''}`}>
      <div className={styles['flip-card__front']}>
        {frontCard}
        <div className={styles['flip-card__button']} onClick={() => onClickHandler()}>
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.61 122.88"><path d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"/></svg>
        </div>
      </div>
      <div className={styles['flip-card__back']}>
        {backCard}
        <div className={styles['flip-card__button']} onClick={() => onClickHandler()}>
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.61 122.88"><path d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"/></svg>
        </div>
      </div>
    </div>

  )
}

export default FlipCard;