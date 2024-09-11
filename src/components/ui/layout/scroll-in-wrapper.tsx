import React from "react";
import useScrollInView from "../../../hooks/useScrollInView";
import { WrapperProps } from "../../../types/ui-props";
import styles from "./scroll-in-wrapper.module.scss";

const ScrollInWrapper = (props: WrapperProps) => {
  const {type, children} = props;
  const ref = useScrollInView(styles["in-view"]);

  return React.createElement(
    type,
    { className: `${styles["scroll-in"]}`, ref },
    children
  );
}

export { ScrollInWrapper };
