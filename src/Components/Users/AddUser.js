import React, { useState } from "react";
import style from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  // state definition for username input
  const [enteredUsername, setEnteredUsername] = useState("");
  // state definition for age input
  const [enteredAge, setEnteredAge] = useState("");
  // state definition for error modal
  const [error, setError] = useState();

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
      setError({
        title: "Invalid inpuit",
        message: "Please enter valid name and age!",
      });
    } else if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Age value must be greater than 0!",
      });
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
    <div>
      {error && <ErrorModal title={error.title} message={error.message} />}
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
    </div>
  );
};

export default AddUser;
