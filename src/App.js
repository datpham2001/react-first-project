import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddUser from "./component/User/AddUser";
import UserList from "./component/User/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList}></UserList>
    </div>
  );
}

export default App;
