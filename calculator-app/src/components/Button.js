import React from "react";

import "../styles/Button.css";

const Button = (props) => {
  const { className, value, onClick } = props;
  return (
    <button className={className} value={value} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
