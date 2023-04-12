import React, { useState } from "react";
import style from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  // state definition for username input
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  // function for storing username, whatever user typed, into a new state
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  // function for storing age, whatever user typed, into a new state
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const AddUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      console.log("lmao ne radi");
    } else if (+enteredAge < 1) {
      console.log("lmao unesi normalan broj godina");
    } else {
      console.table(
        `Username: ${enteredUsername}, Age: ${enteredAge} added to list!`
      );
      props.onAddUser(enteredUsername, enteredAge);
      setEnteredUsername("");
      setEnteredAge("");
    }
  };

  return (
    <Card className={style.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter full name"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          placeholder="Enter your age"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        {/* <button type="submit">Add User</button> */}
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
