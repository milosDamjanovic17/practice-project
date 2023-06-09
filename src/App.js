import React, { useState, Fragment } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {

  const DUMMY_USERS = [

    {
      id: 'a1',
      name: 'DUMMY1',
      age: 15
    },
    
    {
      id: 'a2',
      name: 'DUMMY2',
      age: 90
    }

  ];

  // store users array and show as a starting state
  const [usersList, setUsersList] = useState(DUMMY_USERS);

  // function for creating user object and adding to list
  const addUserHandler = (username, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        { id: Math.random().toString(), name: username, age: userAge },
        ...prevUsersList,
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
