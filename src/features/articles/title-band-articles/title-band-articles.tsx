import TitleBandArticle, { TitleBandArticleProps } from "../../card/article/title-band-article/title-band-article";
import styles from "./title-band-articles.module.scss";

type TitleBandArticlesProps = {
  articles: TitleBandArticleProps[];
}
const TitleBandArticles = (props: TitleBandArticlesProps) => {
  const {articles} = props;

  return (
    <div className={styles['articles']}>
      {articles.map((article:TitleBandArticleProps, key: number) => (
        <div className={styles['article-wrapper']} key={key}>
          <TitleBandArticle
            linkItem={article.linkItem}
            imageItem={article.imageItem}
        />
        </div>
      ))}
    </div>
  )
}

export default TitleBandArticles;