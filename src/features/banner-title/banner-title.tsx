import { Picture } from "../../components/ui/image";
import { NoLinkViewMore } from "../../components/ui/text";
import { Title } from "../../components/ui/title";
import { PictureProps, TitleProps } from "../../types/ui-props";
import styles from "./banner-title.module.scss";

type BannerTitleProps = {
  imageItem: PictureProps;
  titleItem: TitleProps;
  linkText: string;
}

const BannerTitle = (props: BannerTitleProps) => {
  const {imageItem, titleItem, linkText} = props;

  return (
    <div className={styles['banner-title']}>
      <div className={styles['banner-title__image']}>
        <Picture
          srcPC={imageItem.srcPC}
          srcSP={imageItem.srcSP}
          srcWebpPC={imageItem.srcWebpPC}
          srcWebpSP={imageItem.srcWebpSP}
          width={imageItem.width}
          height={imageItem.height}
          altText={imageItem.altText}
          breakpoint={imageItem.breakpoint}
        />
      </div>
    <a className={styles['banner-title__textwrapper']}>
      <div className={styles['banner-title__title']}>
        <Title
          tag={titleItem.tag}
          text={titleItem.text}
        />
      </div>
      <NoLinkViewMore
        text={linkText}
      />
    </a>
    </div>
  )
}

export default BannerTitle;