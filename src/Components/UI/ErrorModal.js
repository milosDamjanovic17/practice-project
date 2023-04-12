import React from "react";
import Card from "./Card";
import Button from "./Button";
import style from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={style.backdrop} onClick={props.onConfirm} />
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={style.content}>
          <p>{props.message}</p>
        </div>
        <footer className={style.actions}>
          <Button onClick={props.onConfirm}>Dismiss</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
