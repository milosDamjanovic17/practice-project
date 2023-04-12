import React from "react";
import style from "./UsersList.module.css";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const UsersList = (props) => {
  return (
    <Card className={style.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
