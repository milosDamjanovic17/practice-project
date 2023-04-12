import React, {Fragment} from "react";
import ReactDOM from 'react-dom';
import Card from "./Card";
import Button from "./Button";
import style from "./ErrorModal.module.css";

const Backdrop = props => {
  <div className={style.backdrop} onClick={props.onConfirm} />
};

const modalOverlay = props => {
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

};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm}/>, 
        document.getElementById('backdrop-root'))}
    </Fragment>
  );
};

export default ErrorModal;
