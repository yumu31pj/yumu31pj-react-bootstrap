import parse from "html-react-parser";
import { LinkViewMore } from "../../components/ui/link";
import { Title } from "../../components/ui/title";
import { LinkProps, TitleProps } from "../../types/ui-props";
import styles from "./pickup-link.module.scss";

export type PickupLinkProps = {
  titleItem: TitleProps;
  text: string;
  linkItem: LinkProps;
}

const PickupLink = (props: PickupLinkProps) => {
  const {titleItem, text, linkItem} = props;
  return (
    <section className={styles['pickup-link']}>
      <div className={styles['pickup-link__inner']}>
        <div className={styles['pickup-link__title']}>
          <Title 
            tag={titleItem.tag}
            text={titleItem.text}
          />
        </div>
        <div className={styles['pickup-link__text']}>
          <p>{parse(text)}</p>
        </div>
        <div className={styles['pickup-link__link']}>
          <LinkViewMore
            linkText={linkItem.linkText}
            linkTo={linkItem.linkTo}
            isExternal={linkItem.isExternal}
          />
        </div>

      </div>
    </section>
  )
}

export default PickupLink;