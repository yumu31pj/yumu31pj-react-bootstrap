import { Picture } from "../../../../components/ui/image";
import { LinkProps, PictureProps } from "../../../../types/ui-props";
import styles from "./title-band-article.module.scss";

export type TitleBandArticleProps = {
  linkItem: LinkProps;
  imageItem: PictureProps;
}

const TitleBandArticle = (props: TitleBandArticleProps) => {
  const {linkItem, imageItem} = props;

  return (
    <a href={linkItem.linkTo} className={styles['article']}>
      <div className={styles['article__image']}>
        <Picture
          srcSP={imageItem.srcSP}
          srcWebpSP={imageItem.srcWebpSP}
          srcPC={imageItem.srcPC}
          srcWebpPC={imageItem.srcWebpPC}
          width={imageItem.width}
          height={imageItem.height}
          altText={imageItem.altText}
          breakpoint={imageItem.breakpoint}
        />
      </div>
      <p className={styles['article__title']}>{linkItem.linkText}</p>
    </a>
  )
}

export default TitleBandArticle;