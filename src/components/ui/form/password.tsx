'use client';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import { useState } from "react";

import { PasswordProps } from "../../../types/ui-props";
import { Label } from "./label";
import styles from "./password.module.scss";

const Password = (props: PasswordProps) => {
  const {id, name, placeholder, isRequired, labelText} = props;
  const [text, setText] = useState<string>("");
  const [isPasswordRevealed, setIsPasswordRevealed] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const handleOnFocus = () => {setIsActive(true); }
  const handleOnBlur = () => {if (!text) { setIsActive(false); }}

  const handlePasswordRevealed = () => {
    setIsPasswordRevealed(!isPasswordRevealed);
  }

  return (
    <div className={styles['password']}>
      {labelText &&
        <Label
          text={labelText}
          isActive={isActive}
          htmlFor={id}
        />
      }
      <input type={isPasswordRevealed ? "password" : "text"}
        name={name}
        id={id}
        className={`${styles['password__field']}${isActive ? ` ${styles['password__field--active']}` : ""}`}
        placeholder={placeholder}
        value={text}
        required={!!isRequired}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => handleOnFocus()}
        onBlur={() => handleOnBlur()}
        autoComplete={id}
      />
      <span className={styles.input_password__toggle_icon} onClick={handlePasswordRevealed}>
        {isPasswordRevealed ? (<FaRegEyeSlash />) : (<FaRegEye />)}
      </span>
    </div>
  )
}

export { Password };
