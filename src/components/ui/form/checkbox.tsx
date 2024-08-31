'use client';

import { useState } from "react";
import { CheckboxProps } from "../../../types/ui-props";
import styles from "./checkbox.module.scss";

const Checkbox = (props: CheckboxProps) => {
  const {id, name, value, text} = props;
  const [isActive, setIsActive] = useState(false);

  const handleToggleCheckbox = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles['checkbox']}>
      <input type="checkbox" name={name}
        id={id}
        className={styles.input_checkbox__field}
        value={value}
        checked={isActive}
        onChange={() => {}}
        autoComplete="off"
      />
      <label
        htmlFor={id}
        className={styles.input_checkbox__label}
        onClick={handleToggleCheckbox}
      >
        {text}
      </label>
    </div>
  )
}

export { Checkbox };
