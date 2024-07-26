import React from "react";
import "./Icon.css";

const Icon = ({ url, src, name }) => {
  return (
    <a className="image-box" href={url}>
      <img src={src} alt="" width={30} height={30} />
      <span className="image-name">{name}</span>
    </a>
  );
};

export default Icon;
