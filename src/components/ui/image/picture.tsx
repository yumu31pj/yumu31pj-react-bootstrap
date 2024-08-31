import { PictureProps } from "../../../types/ui-props";
import styles from "./picture.module.scss";

const Picture = (props: PictureProps) => {
  const {srcPC, srcSP, srcWebpPC, srcWebpSP, width, height, altText, breakpoint} = props;
  return (
    <picture className={styles['responsive-image']}>
      {srcWebpPC && <source srcSet={srcWebpPC} media={`(min-width: ${breakpoint}px)`} type="image/webp" />}
      {srcWebpSP && <source srcSet={srcWebpSP} type="image/webp" />}
      <source srcSet={srcPC} media={`(min-width: ${breakpoint}px)`} {...(width && { width: width })} {...(height && { height: height })} />
      <img src={srcSP} {...(width && { width: width })} {...(height && { height: height })} alt={altText} />
    </picture>
  )
}

export { Picture };
