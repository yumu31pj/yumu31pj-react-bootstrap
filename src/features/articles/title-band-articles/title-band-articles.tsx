import { Picture } from "../../../components/ui/image";
import { LinkProps, PictureProps } from "../../../types/ui-props";
import TitleBandArticle, { TitleBandArticleProps } from "../../card/article/title-band-article/title-band-article";
import styles from "./title-band-articles.module.scss";

type TitleBandArticleProps = {
  linkItem: LinkProps;
  imageItem: PictureProps;
}

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
      <p className={styles['article__title']}><span>{linkItem.linkText}</span></p>
    </a>
  )
}

export default TitleBandArticles;