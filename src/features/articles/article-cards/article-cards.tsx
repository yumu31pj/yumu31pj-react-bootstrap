import { ContentForIndexType } from "../../../types/post-types";
import { PictureProps } from "../../../types/ui-props";
import { getFormatedDateString } from "../../../utils/getFormatedDateString";
import FluffyPicture from "../../image/FluffyPicture/fluffy-picture";
import styles from "./article-cards.module.scss";

type AritcleCardProp = ContentForIndexType & {
  imageItem: PictureProps;
  categories: string[];
}

type ArticleCardProps = {
  articles: AritcleCardProp[];
}

const ArticleCards = (props: ArticleCardProps) => {
  const {articles} = props;
  return (
    <div className={styles['articles']}>
      {articles.map((article: AritcleCardProp, key: number) => (
        <a href={article.id} key={key} className={styles['article']}>
          <FluffyPicture
            srcSP={article.imageItem.srcSP}
            srcWebpSP={article.imageItem.srcWebpSP}
            srcPC={article.imageItem.srcPC}
            srcWebpPC={article.imageItem.srcWebpPC}
            altText={article.imageItem.altText}
            breakpoint={article.imageItem.breakpoint}
          />
          <div className={styles['article__detail']}>
            <p className={styles['article__title']}>{article.title}</p>
            {article.categories && (
              <div className={styles['article__categories']}>
                {article.categories.map((category: string, key: number) => (
                  <span key={key} className={styles['article__category']}>{category}</span>
                ))}
              </div>
            )}
            <div className={styles['article__date']}>{getFormatedDateString(article.publishedAt)}</div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default ArticleCards;