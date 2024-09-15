
import { PictureProps } from "../../../types/ui-props";
import styles from "./custom-picture.module.scss";
import { Picture } from "./picture";

export type CustomPictureProps = PictureProps & {
  hasShade?: boolean,
}

const CustomPicture = (props: CustomPictureProps) => {
  const {srcPC, srcSP, srcWebpPC, srcWebpSP, width, height, altText, breakpoint, hasShade} = props;
  const baseClass = 'custom-picture';
  const modifierClass = hasShade? baseClass + "--shade" : "";

  return (
    <div className={`${styles[baseClass]}${modifierClass && " " + styles[modifierClass]}`}>
      <Picture
        srcSP={srcSP}
        srcWebpSP={srcWebpSP}
        srcPC={srcPC}
        srcWebpPC={srcWebpPC}
        width={width}
        height={height}
        altText={altText}
        breakpoint={breakpoint}
        hasShade={hasShade}
      />
    </div>
  )
}

export { CustomPicture };
