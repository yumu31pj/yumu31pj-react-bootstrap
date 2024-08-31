'use client';

import { useState } from "react";
import { AddressProps } from "../../../types/ui-props";
import styles from "./address.module.scss";
import { Label } from "./label";

const Address = (props: AddressProps) => {
  const {id = "address", name, labelText, placeholder, isRequired} = props;
  const [text, setText] = useState<string>("");
  const [isActive, setIsActive] = useState(false);

  const handleOnFocus = () => {setIsActive(true); }
  const handleOnBlur = () => {if (!text) { setIsActive(false); }}

  return (
    <div className={styles["address"]}>
      {labelText &&
        <Label
          text={labelText}
          isActive={isActive}
          htmlFor={id}
        />
      }
      <input type="text" name={name}
        id={id}
        className={`${styles["address__field"]}${isActive ? ` ${styles["address__field--active"]}` : ""}`}
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

export { Address };
