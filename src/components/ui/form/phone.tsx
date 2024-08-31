'use client';

import { useState } from "react";

import { PhoneProps } from "../../../types/ui-props";
import { Label } from "./label";
import styles from "./phone.module.scss";

const Phone = (props: PhoneProps) => {
  const {id = "phone", name, labelText, placeholder, isRequired} = props;
  const [text, setText] = useState<string>("");
  const [isActive, setIsActive] = useState(false);

  const handleOnFocus = () => {setIsActive(true); }
  const handleOnBlur = () => {if (!text) { setIsActive(false); }}

  return (
    <div className={styles['phone']}>
      {labelText &&
        <Label
          text={labelText}
          isActive={isActive}
          htmlFor={id}
        />
      }
      <input type="tel" name={name}
        id={id}
        className={`${styles['phone__field']}${isActive ? ` ${styles['phone__field--active']}` : ""}`}
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

export { Phone };
