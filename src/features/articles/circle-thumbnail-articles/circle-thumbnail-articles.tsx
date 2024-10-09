import { Picture } from "../../../components/ui/image";
import { LinkProps, PictureProps } from "../../../types/ui-props";
import styles from "./circle-thumbnail-articles.module.scss";

type CircleThumbnailArtilceProps = {
  linkItem: LinkProps,
  imageItem: PictureProps;
  date: string;
}

type CircleThumbnailArticlesProps = {
  articles: CircleThumbnailArtilceProps[];
}

const CircleThumbnailArticles = (props: CircleThumbnailArticlesProps) => {
  const {articles} = props;
  return (
    <div className={styles['articles']}>
      {articles.map((article: CircleThumbnailArtilceProps, key: number) => (
        <div className={styles['article']} key={key}>
          <a href={article.linkItem.linkTo} className={styles['article__link']}>
            <div className={styles['article__image']}>
              <Picture
                srcSP={article.imageItem.srcSP}
                srcWebpSP={article.imageItem.srcWebpSP}
                srcPC={article.imageItem.srcPC}
                srcWebpPC={article.imageItem.srcWebpPC}
                width={article.imageItem.width}
                height={article.imageItem.height}
                altText={article.linkItem.linkText}
                breakpoint={article.imageItem.breakpoint}
              />
            </div>
            <div className={styles['article__detail']}>
              <p className={styles['article__title']}>{article.linkItem.linkText}</p>
              <div className={styles['article__date']}>{article.date}</div>
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}

export default CircleThumbnailArticles