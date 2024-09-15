import React from "react";
import { TitleProps } from "../../../types/ui-props";
import styles from "./title.module.scss";

const Title = (props: TitleProps) => {
  const { tag, text } = props;

  const baseClass = styles['title'];
  const modifierClass = tag.match(/^h[1-6]$/) ? styles[`title--${tag}`] : "";

  const className = `${baseClass} ${modifierClass}`;

  return React.createElement(tag, { className }, text);
}

export { Title };
