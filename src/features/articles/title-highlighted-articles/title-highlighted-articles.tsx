import { Picture } from "../../../components/ui/image";
import { LinkProps, PictureProps } from "../../../types/ui-props";
import styles from "./title-highlighted-articles.module.scss";

type TitleHighlightedArticlesProps = {
  articles: TitleHighlightedArticleProps[];
}

type TitleHighlightedArticleProps = {
  linkItem: LinkProps;
  imageItem: PictureProps;
  date: string;
}

const TitleHighlightedArticles = (props: TitleHighlightedArticlesProps) => {
  const {articles} = props;

  return (
    <div className={styles['articles']}>
      {articles.map((article:TitleHighlightedArticleProps, key: number) => (
        <div className={styles['article-wrapper']} key={key}>
          <TitleHighlightedArticle
            linkItem={article.linkItem}
            imageItem={article.imageItem}
            date={article.date}
        />
        </div>
      ))}
    </div>
  )
}

const TitleHighlightedArticle = (props: TitleHighlightedArticleProps) => {

  const {linkItem, imageItem, date} = props;
  return (
    <div className={styles['article']}>
      <a href={linkItem.linkTo}>
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
        <div className={styles['article__info']}>
          <p className={styles['article__title']}>
            <span>{linkItem.linkText}</span>
          </p>
          <div className={styles['article__date']}>{date}</div>
        </div>
      </a>
    </div>

  )
}

export default TitleHighlightedArticles;