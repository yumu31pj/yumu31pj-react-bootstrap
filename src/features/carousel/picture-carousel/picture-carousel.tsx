import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { Picture } from '../../../components/ui/image';
import { PictureItemsProps, PictureProps } from "../../../types/ui-props";
import { CarouselProgressDot, useDotButton } from './carousel-progress-dot';
import styles from "./picture-carousel.module.scss";

const PictureCarousel = (props: PictureItemsProps) => {
  const {pictureItems} = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className={styles['carousel']}>
      <div className={styles["embla"]} ref={emblaRef}>
        <div className={styles["embla__container"]}>
          {pictureItems.map((item: PictureProps, key: number) => (
            <div className={styles["embla__slide"]} key={key}>
              <Picture
                srcSP={item.srcSP}
                srcWebpSP={item.srcWebpSP}
                srcPC={item.srcPC}
                srcWebpPC={item.srcWebpPC}
                width={item.width}
                height={item.height}
                altText={item.altText}
                breakpoint={item.breakpoint}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles["embla__dots"]}>
        {scrollSnaps.map((_, index) => (
          <CarouselProgressDot
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`${styles['embla__dot']}${index === selectedIndex ? ` ${styles["embla__dot--selected"]}` : ''}`}
          />
        ))}
      </div>

    </div>
  )
}

export default PictureCarousel;
