'use client';

import { useState } from "react";

import { TextAreaProps } from "../../../types/ui-props";
import { Label } from "./label";
import styles from "./textarea.module.scss";

const TextArea = (props: TextAreaProps) => {
  const {id, name, labelText, placeholder, isRequired} = props;
  const [text, setText] = useState<string>("");
  const [isActive, setIsActive] = useState(false);

  const handleOnFocus = () => {setIsActive(true); }
  const handleOnBlur = () => {if (!text) { setIsActive(false); }}

  return (
    <div className={styles['textarea']}>
      {labelText &&
        <Label
          text={labelText}
          isActive={isActive}
          htmlFor={id}
        />
      }
      <textarea name={name}
        id={id}
        className={`${styles['textarea__field']}${isActive ? ` ${styles['textarea__field--active']}` : ""}`}
        placeholder={placeholder}
        value={text}
        required={!!isRequired}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => handleOnFocus()}
        onBlur={() => handleOnBlur()}
        autoComplete="off"
      />
    </div>
  )
}

export { TextArea };
