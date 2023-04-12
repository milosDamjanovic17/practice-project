import React from "react";
import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={`${style.button}`} type="submit">
      Add User
    </button>
  );
};

export default Button;
