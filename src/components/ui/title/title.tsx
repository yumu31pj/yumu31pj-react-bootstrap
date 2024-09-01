import React from "react";
import styles from "./title.module.scss";

type TitleProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
}

const Title = (props: TitleProps) => {
  const { tag, text } = props;

  const baseClass = styles['title'];
  const modifierClass = tag.match(/^h[1-6]$/) ? styles[`title--${tag}`] : "";

  const className = `${baseClass} ${modifierClass}`;

  return React.createElement(tag, { className }, text);
}

export { Title };
