import { Picture } from "../../../components/ui/image";
import { LinkProps, PictureProps } from "../../../types/ui-props";
import styles from "./grid-articles-5.module.scss";

type GridArticleFiveProps = {
  title: string;
  linkTo: string;
  imageItem: PictureProps;
  category: LinkProps;
  date: string;
}

type GridArticlesFiveProps = {
  articles: GridArticleFiveProps[];
}

const GridArticlesFive = (props: GridArticlesFiveProps) => {
  const {articles} = props;

  return (
    <div className={styles['grid-articles']}>

      {articles.map((article: GridArticleFiveProps, key: number) => (
        <div className={styles['article']}>
          <div className={styles['article__inner']}>
            <a href={article.linkTo}>
              <Picture
                srcSP={article.imageItem.srcSP}
                srcWebpSP={article.imageItem.srcWebpSP}
                srcPC={article.imageItem.srcPC}
                srcWebpPC={article.imageItem.srcWebpPC}
                width={article.imageItem.width}
                height={article.imageItem.height}
                altText={article.title}
                breakpoint={article.imageItem.breakpoint}
              />
            </a>
            <div className={styles['article__detail']}>
              <div className={styles['article__category']}>
                <a href={article.category.linkTo}>{article.category.linkText}</a>
              </div>
              <div className={styles['article__date']}>
                {article.date}
              </div>
              <div className={styles['article__title']}>
                <a href={article.linkTo}>
                  {article.title}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GridArticlesFive;