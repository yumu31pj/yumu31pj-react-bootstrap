'use client';

import { useState } from "react";

import { ZipCodeType } from "../../../types/ui-props";
import { Label } from "./label";
import styles from "./zip-code.module.scss";

const ZipCode = (props: ZipCodeType) => {
  const {id = "zip", name, labelText, placeholder, isRequired} = props;
  const [text, setText] = useState<string>("");
  const [isActive, setIsActive] = useState(false);

  const handleOnFocus = () => {setIsActive(true); }
  const handleOnBlur = () => {if (!text) { setIsActive(false); }}

  return (
    <div className={styles['input-zip']}>
      {labelText &&
        <Label
          text={labelText}
          isActive={isActive}
          htmlFor={id}
        />
      }
      <input type="text" name={name}
        id={id}
        className={`${styles['zip-code__field']}${isActive ? ` ${styles['zip-code__field--active']}` : ""}`}
        placeholder={placeholder}
        value={text}
        required={!!isRequired}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => handleOnFocus()}
        onBlur={() => handleOnBlur()}
        autoComplete={id}
        pattern="^[0-9a-zA-Z\-]+$"
      />
    </div>
  )
}

export { ZipCode };
