import parse from "html-react-parser";
import { CSSProperties } from "react";
import { NoLinkButton } from "../../../components/ui/button";
import styles from "./card-link.module.scss";

type CardLinkProps = {
  cardItem: {
    title: string;
    text: string;
    backgroundImage: string;
    buttonText: string;
    linkTo: string;
  }
}

const CardLink = (props: CardLinkProps) => {
  const {cardItem} = props;
  const cssProperties = {
    'backgroundImage': `url(${cardItem.backgroundImage})`
  } as CSSProperties

  return (
  <div className={styles['link-card']} style={ cssProperties }>
    <a href={cardItem.linkTo}>
      <div className={styles['link-card__inner']}>
          <p className={styles['link-card__title']}>{cardItem.title}</p>
          <p className={styles['link-card__text']}>{parse(cardItem.text)}</p>
          <NoLinkButton
            buttonText={cardItem.buttonText}
            />
      </div>
    </a>
  </div>

  )
}

export default CardLink;