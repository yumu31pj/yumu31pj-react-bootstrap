'use client';

import { useState } from "react";
import { RadioProps } from "../../../types/ui-props";
import styles from "./radio.module.scss";

const Radio = (props: RadioProps) => {
  const {id, name, value, text} = props;
  const [isActive, setIsActive] = useState(false);

  const handleToggleRadio = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles['radio']}>
      <input type="radio" name={name}
        id={id}
        className={styles['radio__field']}
        value={value}
        checked={isActive}
        onChange={() => {}}
        autoComplete="off"
      />
      <label
        htmlFor={id}
        className={styles['radio__label']}
        onClick={handleToggleRadio}
      >
        {text}
      </label>
    </div>
  )
}

export { Radio };
