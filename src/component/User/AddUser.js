import React from "react";
import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enterUsername, setEnterUsername] = useState("");
  const [enterAge, setEnterAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
      return;
    }

    if (+enterAge < 1) {
      return;
    }

    props.onAddUser(enterUsername, enterAge);
    setEnterUsername("");
    setEnterAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnterUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnterAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
