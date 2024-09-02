import styles from "./google-map.module.scss";

export type GoogleMapProps = {
  src: string;
  width: number;
  height: number;
}

const GoogleMap = (props: GoogleMapProps) => {
  const {src, width, height} = props;

  return (
    <div className={styles['google-map']}>
    <iframe 
      src={src}
      width={width}
      height={height}
      allowFullScreen={true}
      loading="lazy"
    />
    </div>
  )
}

export { GoogleMap };
