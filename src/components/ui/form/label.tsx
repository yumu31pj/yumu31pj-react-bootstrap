'use client';

import { useEffect, useState } from "react";
import { LabelProps } from "../../../types/ui-props";
import styles from "./label.module.scss";

const Label = (props: LabelProps) => {
  const {text, htmlFor, isActive} = props;
  const [isInputActive, setIsInputActive] = useState(isActive)

  useEffect(() => {
    setIsInputActive(isActive);
  }, [isActive]);

  return (
      <label htmlFor={htmlFor}
        className={`${styles['label']}${isInputActive ? ` ${styles['label--active']}`: ""}`}
      >
        {text}
      </label>
  )
}

export { Label };
