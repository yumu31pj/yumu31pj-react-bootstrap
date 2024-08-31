'use client';

import { useState } from "react";

import { SelectItemProps, SelectProps } from "../../../types/ui-props";
import { Label } from "./label";
import styles from "./select.module.scss";

const Select = (props: SelectProps) => {
  const {id, name, labelText, isRequired, selectItems} = props;
  const [text, setText] = useState<string>("");
  const [isActive, setIsActive] = useState(false);

  const handleOnFocus = () => {setIsActive(true); }
  const handleOnBlur = () => {if (!text) { setIsActive(false); }}

  return (
    <div className={styles['select']}>
      {labelText &&
        <Label
          text={labelText}
          isActive={isActive}
          htmlFor={id}
        />
      }
      <select
        id={id}
        name={name}
        className={`${styles['select__field']}${isActive ? ` ${styles['select__field--active']}` : ""}`}
        value={text}
        required={!!isRequired}
        aria-label={labelText}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => handleOnFocus()}
        onBlur={() => handleOnBlur()}
        autoComplete={id}
      >
        <option value=""></option>
        {selectItems && selectItems.map((item: SelectItemProps, index) => (
          <option key={index} value={item.valueText}>{item.displayText}</option>
        ))}
      </select>
    </div>
  )
}

export { Select };
