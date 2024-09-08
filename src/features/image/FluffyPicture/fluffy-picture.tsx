import { Picture } from "../../../components/ui/image";
import { PictureProps } from "../../../types/ui-props";
import styles from "./fluffy-picture.module.scss";

const FluffyPicture = (imageItem: PictureProps) => {
  return (
    <div className={styles['fluffy']}>
      <Picture
        srcSP={imageItem.srcSP}
        srcWebpSP={imageItem.srcSP}
        srcPC={imageItem.srcPC}
        srcWebpPC={imageItem.srcWebpPC}
        width={imageItem.width}
        height={imageItem.height}
        altText={imageItem.altText}
        breakpoint={imageItem.breakpoint}
      />
    </div>
  )
}

export default FluffyPicture;