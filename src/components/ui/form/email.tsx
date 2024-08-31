'use client';

import { useState } from "react";
import { EmailProps } from "../../../types/ui-props";
import styles from "./email.module.scss";
import { Label } from "./label";

const Email = (props: EmailProps) => {
  const {id = "email", name, labelText, placeholder, isRequired} = props;
  const [text, setText] = useState<string>("");
  const [isActive, setIsActive] = useState(false);

  const handleOnFocus = () => {setIsActive(true); }
  const handleOnBlur = () => {if (!text) { setIsActive(false); }}

  return (
    <div className={styles['email']}>
      {labelText &&
        <Label
          text={labelText}
          isActive={isActive}
          htmlFor={id}
        />
      }
      <input type="email" name={name}
        id={id}
        className={`${styles['email__field']}${isActive ? ` ${styles['email__field--active']}` : ""}`}
        placeholder={placeholder}
        value={text}
        required={!!isRequired}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => handleOnFocus()}
        onBlur={() => handleOnBlur()}
        autoComplete={id}
      />
    </div>
  )
}

export { Email };
