import React from "react";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameHandler = (e) => {
    return setEnteredUsername(e.target.value);
  };

  const ageHandler = (e) => {
    return setEnteredAge(e.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || +enteredAge < 0) {
      return;
    }

    // console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={enteredUsername} onChange={usernameHandler} />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" value={enteredAge} onChange={ageHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
