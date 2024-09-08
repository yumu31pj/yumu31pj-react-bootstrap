'use client';

import { useState } from "react";
import validateForm from "../../../utils/validateForm";
import styles from "./email.module.scss";
import { Label } from "./label";

export type EmailProps = {
  id?: string;
  name: string;
  labelText?: string;
  placeholder?: string;
  isRequired?: boolean;
}

const Email = (props: EmailProps) => {
  const {id = "email", name, labelText, placeholder, isRequired} = props;
  const [text, setText] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleOnFocus = () => {setIsActive(true); }
  const handleOnBlur = () => {
    if (!text) { 
      setIsActive(false); 
    }
    setErrorMessage(validateForm(text, "email"));
  }

  const handleChange = (value: string) => {
    setText(value);
  }

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
        required={isRequired}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => handleOnFocus()}
        onBlur={() => handleOnBlur()}
        autoComplete={id}
      />
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  )
}

export { Email };
