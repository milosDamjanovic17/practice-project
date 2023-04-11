import React from "react";
import style from "./AddUser.module.css";
import Card from "../UI/Card";

const AddUser = (props) => {
  const AddUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={style.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" placeholder="Enter full name" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" placeholder="Enter your age" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
