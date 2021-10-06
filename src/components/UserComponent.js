import React, { useState } from "react";
import "../components/UserComponent.css";
import UserList from "./UserList";

let users = [];

function UserComponent() {
  const [username, setusername] = useState("");
  const [age, setage] = useState("");

  function SubmitHandler(event) {
    event.preventDefault();

    if (username.trim() === 0 || age.trim() === 0) {
      return;
    }
    console.log(username, age);
    if (username.trim() != 0 && age.trim() != 0) {
      const obj = {
        name: username,
        age: age,
      };
      users = [...users, obj];
      console.log(users);
      console.log(obj);
    }

    setusername("");
    setage("");
  }
  function usernameHandler(event) {
    setusername(event.target.value);
  }
  function ageHandler(event) {
    setage(event.target.value);
  }

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <div className="box">
          <div className="username">
            <div className="label">
              <label>Username</label>
            </div>
            <input
              type="text"
              value={username}
              onChange={usernameHandler}
            ></input>
          </div>
          <div className="Age">
            <div className="label">
              <label>Age (Years)</label>
            </div>
            <input
              type="number"
              min="1"
              value={age}
              onChange={ageHandler}
            ></input>
          </div>
          <div className="Action">
            <button>Add User</button>
          </div>
        </div>
      </form>
      <UserList list={users} />
    </div>
  );
}
export default UserComponent;
