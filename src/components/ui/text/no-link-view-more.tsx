import styles from "./no-link-view-more.module.scss";

type NoLinkViewMoreProps = {
  text: string;
}

const NoLinkViewMore = (props: NoLinkViewMoreProps) => {
  const {text} = props;
  return (
    <p className={styles['no-link-view-more']}>
      {text}
      <svg xmlns="http://www.w3.org/2000/svg"><path d="M5.02 5.952A1.879 1.879 0 015.386 6L10.04.114 9.95 0s-.532.063-.807.063S8.388 0 8.388 0L5.02 4.36 1.652 0s-.48.063-.755.063S.091 0 .091 0L0 .114 4.655 6a1.879 1.879 0 01.365-.048z"></path></svg>
    </p>
  )
}

export { NoLinkViewMore };
